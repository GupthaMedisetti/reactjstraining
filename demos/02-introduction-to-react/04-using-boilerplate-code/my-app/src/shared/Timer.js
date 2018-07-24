import React from 'react';
import { Button } from 'react-bootstrap';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elapsedIntervals: 0, 
            timeStarted: new Date
        };
        this.stop = this.stop.bind(this);
    }

    tick() {
        this.setState(prevState => ({
            elapsedIntervals: prevState.elapsedIntervals + 1
        }));
    }

    stop() {
        clearInterval( this.interval );
        let elapsedSeconds = ( (new Date).getTime() - this.state.timeStarted.getTime() ) / 1000;
        console.log( 'elapsed intervals = ', this.state.elapsedIntervals );
        console.log( 'elapsed seconds = ', elapsedSeconds );
        console.log( 'intervals per seconds = ', this.state.elapsedIntervals / elapsedSeconds );
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 10);
    }

    componentWillUnmount() {
        this.stop();
    }

    render() {
        /* <button onClick={this.stop} class="btn btn-primary">Stop</button> */
        return (
            <div>
                Intervals elapsed: {this.state.elapsedIntervals}
                <br />
                <Button
                    onClick={this.stop}
                    bsStyle="primary">
                        Stop
                </Button>                
            </div>
        );
    }
}
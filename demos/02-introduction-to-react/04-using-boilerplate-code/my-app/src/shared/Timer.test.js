import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';

describe( 'timer tests', () => {
    let div;

    beforeEach(() => {
        div = document.createElement('div');
    });

    it('renders without crashing', () => {
        ReactDOM.render(<Timer />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it( 'increments interval', () => {
        let timer = <Timer />
        let timerInstance = ReactDOM.render( timer, div );
        timerInstance.tick();
        timerInstance.tick();
        expect(timerInstance.state.elapsedIntervals).toEqual( 2 );
    });
});

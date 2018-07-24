# Lifecycle methods of a React Component

## Phases in the lifetime of a component instance
There are three phases in the lifetime of a React component.
1. Mounting - methods called when component is initialized and rendered for the first time
2. Updating - methods are fired when state, props change or parent also re-renders
3. Unmounting - methods called when component is destroyed and removed from the DOM

## Lifecycle methods
These methods are treated specially and get called at various points during a component's lifecycle.

1. Mounting phase lifecycle methods
* constructor( props ) - called only once before all other methods - when component is created. It initializes component instance and sets the state up.
* componentWillMount() - called before render method is called.
* render() - called for initial render - this returns the element which has to be rendered by React
* componentDidMount() - called after render once the element returned by render is actually rendered.

2. Updating phase lifecycle methods - none of these EXCEPT render() are called the first time a component renders
* componentWillReceiveProps( nextProps ) - when parent sends props or updates them
* shouldComponentUpdate( nextProps, nextState ) - called before updation can start - the updation can be cancelled here by returning false. To prevent update, return true.
* componentWillUpdate( nextProps, nextState ) - called before render()
* render() - called when state changes (internal) or props changes (in parent and then sent downstream via props).
* componentDidUpdate( prevProps, prevState ) - called after render()

3. Unmounting phase
* componentWillUnmount()

## Applicability of lifecycle methods and important points
* constructor() - initialize state
* componentWillMount()
    * DOM not ready
    * Better to avoid setState()
    * Avoid Ajax calls
* render()
    * MUST be a pure function
        * Avoid setState() and direct changes to state
        * Avoid DOM access
        * Avoid Ajax calls
    * This is a mandatory method
* componentDidMount()
    * Can call setState()
    * Can access DOM and set event listeners
    * Can Make Ajax calls
    * Timers can be used
* componentWillUnmount()
    * Use this to
        * Invalidate timers
        * Cancel Ajax requests
        * Remove event listeners
    * Avoid setState()  
  
* Only the following methods can update state/call setState()
    * Mounting phase
        * componentWillMount()
        * componentDidMount()
    * Update phase
        * componentWillReceiveProps()
        * componentDidUpdate()

## References
* [Guide on React site](https://reactjs.org/docs/state-and-lifecycle.html)
* [Reference on React site](https://reactjs.org/docs/react-component.html)


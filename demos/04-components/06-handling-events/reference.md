# Handling events
React defines its own set of events that are equivalent to JS native events - it calls them synthetic events. They are cross-browser compatible versions of the native JS events. They can be set only on React equivalents of native HTML elements, and not custom components.

If the handler is a class method, make sure to use a bound handler in order to have the context of the handler set to the component instance. If this is to be done always, it is better bound in the constructor. 

Just like native JS events, the event object is passed to the handler and contains event-specific information and data specific to the event type (mouse events, keyboard events etc.).

Synthetic events are camelCased - example onClick. You cannot prevent the default handling for the event by returning false - you MUST call preventDefault().

## References
* [Guide on event handling in React](https://reactjs.org/docs/handling-events.html)
* [Reference for synthetic events](https://reactjs.org/docs/events.html)
# What is a component
A component is a highly cohesive building block for UIs loosely coupled with other components.

It is a self-contained, encapsulation for a view. It has a state and is customized using props. They are like custom HTML elements with props for attributes. It renders the UI and responds to events depending on props and state. Since components are written completey in JS (including markup), they allow you to use the full power of JS.

The compoent is re-rendered on every single data change. React however diffs the changes and renders only those that have actually changed. This is made possible using the Virual DOM, a data structure similar to the DOM, that React maintains.

## Creating components
Components can be created using
1. Functions - stateless components - faster but don't have state
2. Class - stateful components - a bit slow but can have state

The function or the class' render() method can return JSX expression or even null or false. In case null or false is returned, nothing renders when an element of that component is created - this is used to "hide" the element depending on application logic.

## Props
Properties are like attributes. We can also add defaultProps (add as property on the function or class). Props also has the children which form part of the innerHTML of the element. The children can be undefined (empty innerHTML), string (text as innerHTML), single element or an array of elements.

Props are immutable. Never say something like ```this.props.x = y```

Props can be used to set prop values for child components. This way attribute values can be sent downstream.

PropTypes is used to associate data types with props as also allowed values, whether something is required, or even custom validation.

## State
State is encapsulated by the component. It is private and initialized by the component - rest of the application has no idea of a component's state. State represents the state of an component over time. Unlike prp, it changes over time (mutable). Only class-based components are stateful. The state can changes due to various reasons - e.g. user input (say during a form validation, due to data obtained from server)

Use the inherited setState() method to set state - it may update state asynchronously. It has 2 variants - one takes a state object and other a callback when state is ready to be changed - so prefer the second variant. The callback receives current state and props. It should return the new state. The new state object is merged with the old state (new one's properties override old ones in case of clash).

A component can pass its state down to children as props.

## Events
Synthetic events wrap actual DOM events. These normalize the events across browsers as well as event objects. Event handlers can be set on React elements corresponding to native DOM elements, but they cannot be set on custom elements. Even the event object is a wrapper over the native event object. Returning false does not prevent default action - you need to call preventDefault( to do it.

Synthetic events are named using camelCase rather than lowercase.

The event handler is a function and not a set of statements to be executed. Also event handlers have undefined as their context - you need to bind them to the element (usually inside constructor).

The event handlers set on React elements are NOT set up as corresponding native event handlers!

## Keys
Key is used to set a unique key for an element. This is an indication to help improve the diffing algorithm and Virtual DOM-Browser DOM reconciliation. Always set the key on the element that is generated via iteration (eg. using array's map()) - we should not pass key as prop and set on the child element.

## Controlled and uncontrolled components
* [Uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html)
* [React forms](https://reactjs.org/docs/forms.html)
* [https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)

## Copyright notice
React JS Demos v1.0.0  
Copyright Prashanth Puranik  
All rights reserved. No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the author, except in the case of brief quotations embodied in critical reviews and certain other non-commercial uses permitted by copyright law. For permission requests, write to the publisher, addressed "Attention: Permissions Coordinator" at the address below.  
Prahara Consulting Private Limited  
204, Sri Vari Enclave  
Horamavu Agara Road, Horamavu, Bangalore.   
puranik@digdeeper.in  
Date: 2018-02-28T17:24Z  
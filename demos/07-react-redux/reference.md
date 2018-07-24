## Installation
Adding Redux and React-Redux to an existing React project
```
$ npm install --save redux
$ npm install --save react-redux
```

## React-Redux
Separates presentation of component from container that subscribes to stores and dispatch actions. The container subscribes to stores, passes Redux state as props and action creators too as function props. The container dispatches actions on view events etc.

However it is upto the developer to enfore separation this way.

## Components of React-Redux
* Provider - prop is store

## API
* connect() - replaces dispatch() and subscribe()
* mapStateToProps( state, [ownProps] )
* mapDispatchToProps( state, [ownProps] )

## Important points
* When connect()(component) is called in the container, the container is connected to the component. The container injects a prop called dispatch (a function) as props in the component.

## Redux devtools
Install Redux devtools from the Chrome store.  

To enable Redux devtools debugging...
* Installing Redux devtools
```
$ npm install redux-devtools-extension
```
* To use devtools in the app import composeWithDevTools and pass as second parameter to createStore() as composeWithDevTools(). To use other middleware when you use composeWithDevTools use the following.
```
composeWithDevTools( applyMiddleware( mw1, mw2, ... ) )
```

Reference:
* [react-redux project on GitHub](https://github.com/reactjs/react-redux)
* [Using Redux with React](https://redux.js.org/basics/usage-with-react)
* [Tutorial on using React Redux by Valentino Gagliardi](https://www.valentinog.com/blog/react-redux-tutorial-beginners/)
* [GitHub project on Redux devtools](https://github.com/zalmoxisus/redux-devtools-extension)

## Copyright notice
React JS Demos v1.0.0  
Copyright Prashanth Puranik  
All rights reserved. No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the author, except in the case of brief quotations embodied in critical reviews and certain other non-commercial uses permitted by copyright law. For permission requests, write to the publisher, addressed "Attention: Permissions Coordinator" at the address below.  
Prahara Consulting Private Limited  
204, Sri Vari Enclave  
Horamavu Agara Road, Horamavu, Bangalore.   
puranik@digdeeper.in  
Date: 2018-02-28T17:24Z  
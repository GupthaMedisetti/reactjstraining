# Axios
Axios is a library to make Ajax calls. To install
```
$ npm install --save axios
```

## How to work with Ajax
Ajax calls need to be made after component is rendered - use componentDidMount(). The reducer needs to define 3 states for fetching, fetch success and fetch error.

## Thunk middleware
To install Thunk
```
$ npm install --save redux-thunk
``` 
The default export of redux-thunk is the Thunk middleware. Thunk wraps the store's dispatch() method and allows you to dispatch something other than actions, for example, functions or Promises. Thus, in the action creator we return a function
```
function someActionCreator() {
    return function( dispatch, getState ) {
        // do Ajax calls here
    };
}
```
The returned function (referred here as function action) receives store methods dispatch and getState as reference. Since the function action gets a dispatch reference and does the dispatching, it can simply return on certain condition (without calling dispatch) to prevent dispatch on those conditions. You do Ajax calls inside of the returned function action.

## Reference
* [Axios project on GitHub](https://github.com/axios/axios)
* [Sample API for experimentation - The GitHub API](https://api.github.com/)

## Copyright notice
React JS Demos v1.0.0  
Copyright Prashanth Puranik  
All rights reserved. No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the author, except in the case of brief quotations embodied in critical reviews and certain other non-commercial uses permitted by copyright law. For permission requests, write to the publisher, addressed "Attention: Permissions Coordinator" at the address below.  
Prahara Consulting Private Limited  
204, Sri Vari Enclave  
Horamavu Agara Road, Horamavu, Bangalore.   
puranik@digdeeper.in  
Date: 2018-02-28T17:24Z  
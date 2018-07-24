## Installation
```
$ npm install --save react-router-dom
```

## Components
* BrowserRouter, HashRouter - Enables routing - Enclose the top-level App component using this
* Link, NavLink - replacement for anchor tag (enforces client-side routing). NavLink for having the link to current route stand out
* Route - configuration for a route, as well as placeholder for the component rendered
* Switch - Surround routes using this to break on first match
* Redirect - to redirect user to another route

### Props for components
* Link - to (route string)
* NavLink - to , activeClassName (active class name - string), exact (boolean)
* Route - path (route string), component (component class), render (function returning element), exact (boolean)
* Redirect - to

### Some more points
- Use "*" as path for catch-all route.
- Routing is distributed across the application. Different components can import Route, Link, Switch etc. and define routing specific to the paths fragments starting with the root url of that component.
- Dynamic paths fragments created using /:variable syntax
- The dynamic parts are available inside the rendered element inside the element's props.match.params object (as 'variable' property for example)

## References
* [React router overview video](https://reacttraining.com/react-router/)
* [React router demos](https://reacttraining.com/react-router/web/guides/philosophy)

## Copyright notice
React JS Demos v1.0.0  
Copyright Prashanth Puranik  
All rights reserved. No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the author, except in the case of brief quotations embodied in critical reviews and certain other non-commercial uses permitted by copyright law. For permission requests, write to the publisher, addressed "Attention: Permissions Coordinator" at the address below.  
Prahara Consulting Private Limited  
204, Sri Vari Enclave  
Horamavu Agara Road, Horamavu, Bangalore.   
puranik@digdeeper.in  
Date: 2018-02-28T17:24Z  
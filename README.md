# react-harman-sep-26-28-2018
React JS training material for training at Harman, Bangalore (Sep 26 - 28, 2018)  
Training provided by __Enterprise Patterns__

## About React
React is a web front-end library used to create user interfaces, i.e. a view in MVC architecture. Originally created at Facebook, it is now a free and open-source framework maintained by Facebook, Instagram and some other individual developers and corporations. It is not a full- fledged Single Page Application (SPA) framework unlike Angular, and hence other libraries like React Router and Redux are required to build an SPA. Additionally, a module bundler like Webpack is usually used in a React application.  

Redux is a state management library. It can be used with any framework or standalone but is popularly used in a React app. It manages the state of an application and helps then behave consistently across different platforms.

## Pre-requisites
- Working knowledge of HTML, CSS
- Good knowledge of JavaScript including object-oriented JS features like object prototypes etc. ES2015 (ES6) knowledge is a plus but not necessary.
- Bootstrap knowledge is a plus, but not necessary

## Shared folder path
This path is a shared folder where software for training is available for download
```
\\??.??.??.??
```

## List of software to be installed before training starts
* Git CLI and a GitHub account
    - [Git CLI download](https://git-scm.com/downloads)
    - [GitHub link for account creation](https://github.com/join?source=header-home)
    The account username needs to be shared with the trainer - this is so that permissions can be given to access the training material.

* Node.js (which also installs npm tool)  
    - [Node.js](https://nodejs.org/en/download/)
    The proxy server details may need to be configured to enable npm access the npm registry (this registry is required to download Node modules required to build Node applications - React is available as node modules and hence the requirement).
    To configure the proxy for npm these articles will be helpful.
    - [https://jjasonclark.com/how-to-setup-node-behind-web-proxy/](https://jjasonclark.com/how-to-setup-node-behind-web-proxy/)
    - [https://forum.freecodecamp.org/t/npm-behind-a-proxy-server/19386](https://forum.freecodecamp.org/t/npm-behind-a-proxy-server/19386)

* VisualStudio Code (VSCode)  
    - [Download VSCode](https://code.visualstudio.com/download)
    A modern IDE like VSCode is highly recommended. If you prefer using one of Atom, WebStorm, SublimeText, Brackets, Eclipse, Netbeans or Visual Studio – that is fine.
    It is available for Windows, Mac OSX and popular Linux distributions.

* Latest version of one of Chrome/Firefox (preferably Chrome). Internet Explorer is not acceptable.  
    - [Chrome](https://www.google.com/chrome/browser/desktop/index.html)
    - [Firefox](https://www.mozilla.org/en-US/firefox/new/)
  
* __IMPORTANT__: It would be great if you have as little restrictions (as permissible) on internet access during the session.  

## Training schedule
__Topic__: React JS  
__Dates__: Sep 26 - 28, 2018  
__Time__: 9:30 AM - 5:30 PM
  
__Breaks__:  
Lunch break: 1:00 PM - 1:45 PM  
Tea breaks: Two tea breaks - one in morning and one in afternoon session, each 10 minutes

## How to join the meeting
The training session are recorded using Zoom (https://zoom.us). If you are using Zoom for the first time you will be prompted to download Zoom when you open the meeting link in the browser. Do so and follow the steps in the wizard.

[Join from PC, Mac, Linux, iOS or Android](https://zoom.us/j/740411308)

## Video recordings
The videos recordings of the session is available at the following location.
- [Day 1 | July 26](https://s3.amazonaws.com/corporate-trainings/harman/sep-26-28-2018-react/sep-26-2018.mp4)
- [Day 2 | July 27](https://s3.amazonaws.com/corporate-trainings/harman/sep-26-28-2018-react/sep-27-2018.mp4)
- [Day 3 | July 28](https://s3.amazonaws.com/corporate-trainings/harman/sep-26-28-2018-react/sep-28-2018.mp4)


## How to run the server for blogs (Ajax example)
You need to run the server placed within server/ folder for the examples on Ajax.

- To run the server first go inside the server/ folder
```
$ cd server
```

- Next install all required node modules (server's dependencies). The dependencies for Node projects are given in package.json.
```
$ npm install
```

- To run the server
```
$ npm run json:server
```

- The server starts on the following URL
```
$ http://localhost:4201/
```

- You can access the data via various endpoints. For example, to retrieve the comments for the post with id = 1, we can hit the endpoint...
```
http://localhost:4201/posts/1/comments
```

## Table of contents
- Pre-requisites
    * Basics of Babel and ES2015 (ES6) for React
    * The Single Page Application (SPA) architecture
- Introduction to React
    * Overview of React, Redux and React Router
    * Underlying concepts – Data-binding, virtual DOM, routing etc.
    * Getting started with React – including it in your application
    * Scaffolding a React application using boilerplate code
    * Understanding the Project Structure and build process
- Using JSX
    * What is JSX?
    * JSX for components
    * HTML attributes
    * Unescaping content
- Components
    * Creating Components
    * Taking inputs using props
    * Maintaining component state using state
    * Lifecycle methods
    * Composing components
- Routing
    * Introduction to React Router
    * Route configuration
    * Handling params and querystring
    * Using links to setup navigation
    * Handling redirects
    * Hooks in routing
- Redux
    * Three core Redux principles
    * Redux flow overview
    * Actions and Stores
    * Immutability
    * Reducers
    * Middleware in Redux and popular Redux middleware
    * Implementing custom middleware
    * React-Redux introduction
    * mapStateToProps and mapDispatchToProps
- Redux Flow
    * Actions
    * Reducers and root reducers
    * Instantiating store and provider
    * Action type constants
- Production Builds
    * Setting up the production Redux store
    * Webpack setup
    * HTML build setup
    * Dist server setup
- Appendix
    * The SystemJS Universal Module Loader
    * Brief introduction to Webpack
    * Async in Redux using Redux Saga
        * Async library options
        * Introduction to Redux Saga
        * Understanding yield
        * Redux Saga Effects and Interaction between Sagas


## Contact details
__Email__: puranik@digdeeper.in  
__Phone__: +91-9448441478

## References
- [Official documentation for React](https://reactjs.org/)
- [React.js cheatsheet at devhints.io](https://devhints.io/react)

## Copyright notice
React JS Demos v1.0.0  
Copyright Prashanth Puranik  
All rights reserved. No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the author, except in the case of brief quotations embodied in critical reviews and certain other non-commercial uses permitted by copyright law. For permission requests, write to the publisher, addressed "Attention: Permissions Coordinator" at the address below.  
Prahara Consulting Private Limited  
204, Sri Vari Enclave  
Horamavu Agara Road, Horamavu, Bangalore.   
puranik@digdeeper.in  
Date: 2018-02-28T17:24Z  
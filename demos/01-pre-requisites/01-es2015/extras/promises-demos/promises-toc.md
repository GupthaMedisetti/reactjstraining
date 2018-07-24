# Promises in ES6
* Disadvantages of callbacks to manage asynchronous operations
    * Callback hell
    * Single handler
    * Tough to serialize/parallelize (i.e. synchronize) async processes
* Promise: A handle for async operations
    * Callbacks are always executed after completion of current run of event loop
    * Callbacks are called even if they are added after reolution/rejection
    * Multiple callbacks may be called and they are called in insertion order
* Using a Promise's then() for resolution handling (fulfilled)
* Using a Promise's then() for rejection handling. Using a catch() for exclusive rejection handling.
* How Promise chaining works - promise in chain is the one returned by previous call (either the one returned by the called function, or success/error handler in case of then() method). In case of rejection, catch() is executed
* [].reduce etc. for sequential execution
* Promise.all() for parallel execution
    * Accepts an iterable of promises
    * On resolution of all returns an array of results
    * rejects on first rejection with results of rejected promise
* Promise.race() for resolution on first successful resolution
* Making an async method implement Promises - Creating a Promise and returning from a function
* Shortcut to create Promises that resolve or reject (Promise.resolve() and Promise.reject())
* Promise that resolves or rejects based on another Promise
* Example using jQuery's $.ajax()

## Copyright notice
React JS Demos v1.0.0  
Copyright Prashanth Puranik  
All rights reserved. No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the author, except in the case of brief quotations embodied in critical reviews and certain other non-commercial uses permitted by copyright law. For permission requests, write to the publisher, addressed "Attention: Permissions Coordinator" at the address below.  
Prahara Consulting Private Limited  
204, Sri Vari Enclave  
Horamavu Agara Road, Horamavu, Bangalore.   
puranik@digdeeper.in  
Date: 2018-02-28T17:24Z  
# Ember Service Testing Demo

This project demos Ember's service feature, and how to use it for 
automated testing.

## Running production-like setup

There are two services; the frontend Ember service and the backend API.

* API - very simple Node.js app; it responds with the exact same data to 
  any HTTP request. To run, in the project root:
  ```
  $ npm api
  ```
* Frontend - normal Ember project. In the project root, run `ember s`

Running both services, navigate to 
[localhost:4200](http://localhost:4200) to see the app in action; it 
displays a very barebones piece of content, with several 'comments' 
fetched from the API.

## Running automated tests

Everything breaks if you just want to run automated tests. Make sure 
that the API service is not running and run `ember s` by itself.  
Navigate to [localhost:4200/tests](http://localhost:4200/tests), and 
notice that the `visit index` acceptance test fails; this is because 
Ember is trying to fetch from a service that isn't running!

For certain types of tests, you want to be running the full stack to be 
sure that all services are working together properly. However, you want 
tests to be as simple as possible so that they can run quickly, and so 
that you can isolate problems - as simple as possible, but no simpler.  
For example, running the full stack is overkill if you just want to make 
sure that your app renders comments correctly.

The solution is to mock the Ember Data `store` service. Checkout the 
`mock-store` branch to see this in action!

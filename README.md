# Ember Service Testing Demo

This project demos Ember's service feature, and how to use it for 
automated testing.

## Running production-like setup

There are two services; the frontend Ember service and the backend API.

* API - very simple Node.js app; it responds with the exact same data to 
  any HTTP request. To run, in the project root:
  ```
  $ npm run api
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

## Mocking Services in Automated Tests

At this point, the test we're writing is making the assumption that the 
API works as expected. Therefore, we don't need to be running the API 
server; that would be needless overhead if we're just testing a frontend 
change. A complete test suite will also include tests of the full stack 
running together in addition to the individual services. This example 
tests that an individual service is behaving as expected. If we're only 
making changes to the frontend, we don't need to concern ourselves with 
how the backend works.

With that in mind, rather than create a setup that runs the entire stack 
on this test, we're going to create a mock service so we can concentrate 
strictly on the problem at hand.

Making sure that no other services are running (particularly no API), 
run `ember s` and navigate to 
[localhost:4200/tests](http://localhost:4200/tests). The tests are 
passing now! Look at the test file at
`tests/acceptance/visit-index-test.js` to see why.

Instead of using the real Store service, we're creating a mock service, 
`MockStore`. This service provides an API identical to that of Ember 
Data's `Store`, but only does the bare minimum to provide a reasonable 
response to the app. We de-register the normal `store` service, and 
register the mock service in the `beforeEach` hook.  _Note that we 
didn't need to modify any application, or the test itself, to make this 
happen!_

With this in mind, you can create frontend tests that can run in an 
isolated state. It still takes a lot of work to stub every potential 
part of the store's api, but tools such as 
[Mirage](https://www.ember-cli-mirage.com/) exist that take some of the 
tedious work out of that.

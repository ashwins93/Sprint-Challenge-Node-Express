# Review Questions

## What is Node.js?

Node.js is a JavaScript runtime built on top of Chrome's V8 engine. Node lets us
run JavaScript outside browsers and lets us interact with the operating system.

## What is Express?

Express is a JS web framework for Node.js. It is highly unopionated meaning it
doesn't come with a lot of features out-of-the-box but lets you build custom
middlewares that lets you dive right between the request-response cycle to do
whatever you want (You might as well cure cancer now jk).

## Mention two parts of Express that you learned about this week.

- express.Router interface that lets you modularize routing
- express' error handling capabilities and express' default error handler

## What is Middleware?

Middlewares are functions that are run between the start and the end of
request-response cycle. They can be used to enhance the request and response
objects.

## What is a Resource?

A resource (web resource) is an identifiable thing with an unambigous location.
It may be a file, or a web server serving information or a computational
service. Every resource has an unique adress known as Uniform Resource
Identifier.

## What can the API return to help clients know if a request was successful?

HTTP status codes.

## How can we partition our application into sub-applications?

By modularizing parts of code using libraries and frameworks.

## What is express.json() and why do we need it?

`express.json()` returns a middleware function that parses JSON data attached to
the body of a POST/PUT request and stores it on to variable named `body` on the
request object. The body of the request are received in chunks over a readable
stream, express' body parser listens for a `data` event to collect all the
information and parses JSON string to convert them into JavaScript objects.

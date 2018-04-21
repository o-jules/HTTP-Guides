# Methods

Not all methods are implemented by every server.
To be compliant with HTTP Version 1.1, a server need implement only the GET and HEAD methods for its resources.

## Safe Methods

HTTP defines a set of methods that are called safe methods.
The GET and HEAD methods are said to be safe, meaning that no action should occur as a result of an
HTTP request that uses either the GET or HEAD method.

By no action, we mean that nothing will happen on the server as a result of the
HTTP request.

## GET

It usually is used to ask a server to send a resource.

(The `GET` method is required for HTTP/1.1 compliance.)

## HEAD

Exactly like the GET method, but the server returns only the headers in the response. No entity body is ever returned.

This allows a client to inspect the headers for a resource without having to actually get the resource. Using
HEAD, you can:
  1. Find out about a resource (e.g., determine its type) without getting it.
  2. See if an object exists, by looking at the status code of the response.
  3. Test if the resource has been modified, by looking at the headers.

Server developers must ensure that the headers returned are exactly those that a GET request would return.

(The `HEAD` method is required for HTTP/1.1 compliance.)

## PUT

The PUT method writes documents to a server, in the inverse of the way that GET reads documents from a server.

## POST

The POST method was designed to send input data to the server.

## TRACE

When a client makes a request, that request may have to travel through firewalls,
proxies, gateways, or other applications. Each of these has the opportunity to modify
the original HTTP request. The TRACE method allows clients to see how its
request looks when it finally makes it to the server.

No entity body can be sent with a TRACE request. The entity body of the TRACE
response contains, verbatim, the request that the responding server received.

## OPTIONS

The `OPTIONS` method asks the server to tell us about the various supported capabilities
of the web server. You can ask a server about what methods it supports in general
or for particular resources.

## DELETE

It asks the server to delete the resources specified by the request URL.

## Extension Methods

Extension methods are methods that are not defined in the HTTP specification.
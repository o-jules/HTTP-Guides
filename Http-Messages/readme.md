# HTTP messages

## The flow of messages

- transactional direction

  * inbound: to server
  * outbound: to client

- downstream and upstream

  All messages flow downstream, regardless of whether they are request messages or response messages.
  The sender of any message is upstream of the receiver.

## The parts of a message

Structures:

```
message:
  start line: text
  headers: lines of text
  empty line: one empty line
  entity body: optional; text or binary
```

- Request message:
```
<method> <request-URL> <version>
<headers>

<entity-body>
```

- Response message:
```
<version> <status-code> <reason-phrase>
<headers>

<entity-body>
```

### Start line

All HTTP messages begin with a start line.
The start line for a request message says what to do.
The start line for a response message says what happened.

- Request line

  The start line for a request message; contains:

    * method: what operation the server should perform;
    * request URL: the resource on which to perform the method;
    * the HTTP version: what dialect of HTTP the client is speaking;

  All of these fields are separated by *whitespace*.

- Response line

  The start line for a response message; contains:

  * the HTTP version: that the response message is using;
  * status code: numeric
  * reason phrase: textual, describing the status of the operation;

  All these fields are separated by *whitespace*.

- Methods

Common HTTP methods:

| Method  | Description                              | Message body |
| ------- | ---------------------------------------- | ------------ |
| GET     | Get a document from server               | no           |
| HEAD    | Get just the headers for a document from the server | no           |
| POST    | Send data to the server for processing   | yes          |
| PUT     | Store the body of the request on the server | yes          |
| TRACE   | Trace the message through proxy servers to the server | no           |
| OPTIONS | Determine what methods can operate on a server | no           |
| DELETE  | Remove a document from the server        | no           |

Not all servers methods implement all the seven of the methods. And servers may implement additional methods (**extension methods**).

- Status codes

Status code classes:

| Overall range | Defined range | Category      |
| ------------- | ------------- | ------------- |
| 100-199       | 100-101       | Informational |
| 200-299       | 200-206       | Successful    |
| 300-399       | 300-305       | Redirection   |
| 400-499       | 400-415       | Client error  |
| 500-599       | 500-505       | Server error  |

- Reason phrase

  A human-readable version of the numeric status code, consisting of all the text until the end-of-line sequence.
  It provides a *textual explanation* of the status code.

- Version numbers

Version numbers appear in both request and response message start lines in the format `HTTP/{major}.{minor}`.
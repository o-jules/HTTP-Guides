# Status codes

HTTP status codes are classified into five broad categories:
  - informational
  - Success
  - Redirection
  - ​
  - ​

## Informational status codes

Range: 100-199.

The defined informational status codes:

| Status code | Reason phase        | Meaning                                  |
| ----------- | ------------------- | ---------------------------------------- |
| 100         | Continue            | Indicates that an initial part of the request was received and the client should continue. After sending this, the server must respond after receiving the request. |
| 101         | Switching Protocols | Indicates that the server is changing protocols, as specified by the client, to one |

## Success Status codes

Range: 200-299.

The  the defined success status codes:

| Status code | Reason phase                  | Meaning                                  |
| ----------- | ----------------------------- | ---------------------------------------- |
| 200         | OK                            | Request is okay, entity body contains requested resource. |
| 201         | Created                       | For requests that create server objects (e.g., PUT). The entity body of the response. The server must have created the object prior to sending this status code. |
| 202         | Accepted                      | The request was accepted, but the server has not yet performed any action with it.  There are no guarantees that the server will complete the request; this just means that the request looked valid when accepted. The server should include an entity body with a description indicating the status of the request and possibly an estimate for when it will be completed (or a pointer to where this information can be obtained). |
| 203         | Non-Authoritative Information | The information contained in the entity headers (see “Entity Headers” for more information on entity headers) came not from the origin server but from a copy of the resource. This could happen if an intermediary had a copy of a resource but could not or did not validate the meta-information (headers) it sent about the resource. This response code is not required to be used; it is an option for applications that have a response that would be a 200 status if the entity headers had come from the origin server. |
| 204         | No Content                    | The response message contains headers and a status line, but no entity body. Primarily used to update browsers without having them move to a new document (e.g., refreshing a form page). |
| 205         | Reset Content                 | Another code primarily for browsers. Tells the browser to clear any HTML form elements  on the current page. |
| 206         | Partial Content               | A partial or range request was successful. Later, we will see that clients can request part or a range of a document by using special headers—this status code indicates that the range request was successful. See “Range Requests” in Chapter 15 for more on the Range header. A 206 response must include a Content-Range, Date, and either ETag or Content-Location header. |

## Redirection status code


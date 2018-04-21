# ETag

`ETag` contains the the digest information of the resource (i.e. MD5 hash).
The browsers send the `Etag` value in `If-None-Match` request header, the servers compare it with the news resource. If matched, browsers will use the cache file; If not, a new resource will be sent to the browsers. 

`ETag` is useful when the cache control time is reached but the file has not been changed.

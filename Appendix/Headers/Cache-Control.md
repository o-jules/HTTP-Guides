# Cache-Control

`Cache-Control` can contains fileds:
  - `no-cache`: Don't use permenant local cache. If there is an `ETag`, then check with the server to see if the request has been altred, if yes, then re-load the request data, if not, use the cache.
	- `no-store`: Don't allow browsers to cache data and always load data from server.
	- `public`: Request could be cached by all clients. Including users and public CDNs.
	- `private`: Only browsers could do the cache. Public intermediate servers can not.
	- `max-age`: The maximum time for files to be cached since the last time it was requested.

## Sample:

```
Cache-Control：public, max-age=1000
```

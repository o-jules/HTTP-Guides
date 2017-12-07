# HTTP messages

Structures:
  start line
  headers
  empty line
  body


- Request message:
```
<method> <request-URL> <version>
<headers>

<entity-body>
```

- response message:
```
<version> <status> <reason-phrase>
<headers>

<entity-body>
```

Reason phrase:

A human-readable version of the numeric status code, consisting of all the text
until the end-of-line sequence.
# URLs and Resources

URI: uniform resource identifier
URL: uniform resource location

## URL syntax

```
<scheme>://<user>:<password>@<host>:<port>/<path>;<params>?<query>#<frag>
```

| Component | Description | Default value |
|-----------|-------------|---------------|
| scheme    | protocol to use | None |
| user      | username    | anonymous |
| password  | password for use |      |
| host | the hostname or dotted IP address of the server | None |
| port | port number | Scheme-specific |
| path | the local name for the resource on the server |
| params | "name/value" pair Used by scheme to specify input parameters | None |
| query | Used by scheme to pass parameters to active applications | None |
| frag | A name for a piece or part of the resource | None |

## URL shortcuts

### Relative URLs

URL come in two flavors: `absolute` and `relative`.

#### Base URLs

The base URL serves as a point of reference for the relative URL.

#### Resolving relative references

Convert a relative URL into an absolute one to break up both the relative and base URLs into their component pieces.


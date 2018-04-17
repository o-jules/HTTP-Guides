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

## Shady characters

URLs are designed to be:

  1. *portable*: URLs are permitted to contain only characters from a relatively small, universally safe alphabet.
	2. *readable*: invisible, nonpriting characters also are prohibited in URLs.
  3. *complete*: an esacpe mechanism was added, allowing unsafe characters to be encoded into safe characters for transport.

### The URL character set

The basic character set of URLs is the US-ASCII character set (7-bit).

### Encoding mechanisms

Rules for unsafe characters: a percent sign (%) following by two hexadecimal digits that represent the ASCII code of the character.

Examles:

| Character | ASCII code | URL   |
|-----------|------------|-------|
| ~         | 126(0x7e)  | %7E   |
| SPACE     | 32(0x20)   | %20   |
| %         | 37(0x25)   | %25   |

### Character restriction

Characters that should be encoded in a URL before you use them for anything other than their reserved purposes.

Reserved and restricted characters:

| Character | Reservation/Restriction |
| --------- | ----------------------- |
| %         | Reserved as escape token for encoded characters |
| /         | Reserved for delimiting splitting up path segments in the path component |
| .         | Reserved in the path component |
| ..        | Reserved in the path component |
| #         | Reserved as the fragment delimiter |
| ?         | Reserved as the query-string delimiter
| ;         | Reserved as the params delimiter
| :         | Reserved to delimit the scheme, user/password, and host/port components |
| $ +       | Reserved |
| @ & =     | Reserved because they have special meaning in the context of some schemes |
| { } | \ ^ ~ [ ] ' | Restricted because of unsafe handling by various transport agents, such as gateways |
| < > "     | Unsafe; should be encoded because these characters often have meaning outside the scope of the URL, such as delimiting the URL itself in a document (e.g., "http://www.joes-hardware.com") |
| 0x00 - 0x1F, 0x7F | Restricted; characters within these hex ranges fall within the nonprintable section of the US-ASCII character
set |
| over 0x7F | Restricted; characters |

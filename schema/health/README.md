# Health Checks <Badge text="omg@beta" type="warn" vertical="middle"/>

A service **MUST** provide health checks to ensure that the Platform knows of it's current state.
Services are consistently down will be terminated and restarted.

**Sample**

```yaml
health:
  http:
    path: /health
    port: 5000
```

## What's considered healthy

Your health endpoint **MUST** return a HTTP `2xx` code when it's `healthy` and anything else when it's not. (e.g. 5xx, 4xx)

<json-table>
<p>
{
  "http": {
    "desc": "Describes the HTTP interface for the health check.",
    "$block": {
      "port": {
        "desc": "The port on which the connection must be established.",
        "required": true
      },
      "path": {
        "desc": "The path for the health check to fetch state.",
        "required": true
      }
    }
  }
}
</p>
</json-table>

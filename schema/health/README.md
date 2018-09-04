# Health Checks

A service **SHOULD** provide health checks to ensure that the Platform knows of it's current state.
Services are consistently down will be terminated and restarted.

**Sample**
```yaml
health:
  interval: 30s
  timeout: 30s
  retries: 3
  command: ["curl", "-f", "http://localhost:8080"]
```

<json-table>
<p>
{
    "interval": "How often to execute the health check `command`. This defaults to 30s",
    "timeout": "The timeout to wait for before the assuming that the command `command` failed. This defaults to 30s.",
    "retries": "The number of occurrences for the command `command` to fail continuously before the service is terminated. This defaults to 3",
    "command": {
        "desc": "The command to execute for checking the health of the service",
        "required": true
    }
}
</p>
</json-table>
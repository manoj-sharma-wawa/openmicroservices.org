# Lifecycle

A service **SHOULD** define a startup command if it needs to initialise itself (for example, start a HTTP server).

**Sample**
```yaml
lifecycle:
  startup:
    command: ["/bin/server", "-p", "5000"]
  shutdown:
    command: /app/shutdown.sh
    timeout: 300
```

<json-table>
<p>
{
  "startup": {
    "required": true,
    "desc": "Startup configuration for your service",
    "$block": {
      "command": {
        "desc": "The startup command to be executed. This command **SHOULD** open on a `tcp` port for incoming HTTP connections - the desired way to communicate with your service"
      }
    }
  },
  "shutdown": {
    "desc": "Shutdown configuration for your service",
    "$block": {
      "command": {
        "desc": "The shutdown command to execute when your service will be destroyed. If absent, a **KILL** signal will be sent to the startup command"
      },
      "timeout": {
        "desc": "The timeout to gracefully shutdown your service in seconds. Defaults to 300 seconds"
      }
    }
  }
}
</p>
</json-table>
# Lifecycle

A service **MAY** define custom lifecycle hooks for startup and shutdown.

```yaml
lifecycle:
  startup:
    command: ./startup.sh
    timeout: 300
  shutdown:
    command: ./shutdown.sh
    timeout: 300
```

*Lifecycle commands **MUST** exit status zero.*

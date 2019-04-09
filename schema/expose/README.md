# Expose

To indicate to a cloud provider that certain endpoints of your micrservice
may be exposed to the public internet, an `expose` MAY be declared.

Any HTTP traffic coming to this endpoint from an external source (the internet)
SHOULD be directly proxied to your container.

An `expose` may be defined as the following:
```yaml
omg: 1
lifecycle: ...
expose:
  management_ui:
    http:
      path: /management_ui
      port: 8080
  control_interface:
    http:
      path: /control
      port: 8081
```

## HTTP
<Badge text="expose.$.http" type="tip"/>

<json-table>
<p>
{
    "path": {
        "required": true, 
        "desc": "The HTTP path for this `expose`"
    },
    "port": {
        "required": true, 
        "desc": "The port for this `expose`"
    }
}
</p>
</json-table>

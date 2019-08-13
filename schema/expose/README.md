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
    help: The management interface
    http:
      path: /management_ui
      port: 8080      
  control_interface:
    help: The control interface
    http:
      path: /control
      port: 8081
```

<Badge text="expose.$" type="tip"/>

<json-table>
<p>
{
    "http": {
        "required": true, 
        "desc": "The HTTP configuration for this `expose`"
    },
    "help": {
        "required": false, 
        "desc": "A short description about this `expose` which can provide clarity to the end user."
    }
}
</p>
</json-table>

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

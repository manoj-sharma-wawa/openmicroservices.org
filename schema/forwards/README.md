# Forwards

To indicate to a cloud provider that certain endpoints of your microservice
may be exposed to the public internet, a `forwards` section MAY be declared.
This section MUST appear in the root of the `microservice.yaml`.

Any HTTP traffic coming to this endpoint from an external source (the internet)
SHOULD be directly proxied to your container.

A `forwards` section may be defined as the following:
```yaml
omg: 1
lifecycle: ...
forwards:
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

<Badge text="forwards.$" type="tip"/>

<json-table>
<p>
{
    "http": {
        "required": true, 
        "desc": "The HTTP configuration for this `forward`"
    },
    "help": {
        "required": false, 
        "desc": "A short description about this `forward` which can provide clarity to the end user."
    }
}
</p>
</json-table>

## HTTP
<Badge text="forwards.$.http" type="tip"/>

<json-table>
<p>
{
    "path": {
        "required": true, 
        "desc": "The HTTP path for this `forward`"
    },
    "port": {
        "required": true, 
        "desc": "The port for this `forward`"
    }
}
</p>
</json-table>

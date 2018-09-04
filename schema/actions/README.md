# Actions
Defining actions is a way to organize which APIs are exposed 
and how they are used within an application or platform.

Properly defining actions can assist with the following:
  - Service discovery
  - Documentation
  - Operational insight

Services **MUST** list actions that can be executed.

At a high level, services **SHOULD** define the following about themselves:

- Interface
- Arguments
- Output 


**Sample**

```yaml {4-5}
actions:
  convert:
    help: Convert a currency into another currency
    http/format:
      ...
    arguments:
      units:
        type: number
        in: query
        required: true
      from:
        type: string
        in: query
        required: true
      to:
        type: string
        in: query
        required: true
    output:
      type: object
      contentType: application/json
      properties:
        units:
          type: number
        currency:
          type: string
    
```
Within a named action, the following fields are available:

<json-table>
<p>
{
    "help": {
        "desc": "A human friendly description for this action"    
    }, 
    "http": {
        "desc": "This is described in depth [here](/schema/interface/#http)"
    },
    "format": {
        "desc": "This is described in depth [here](/schema/interface/#command)"
    },
    "rpc": {
        "desc": "This is described in depth [here](/schema/interface/#rpc)"
    },
    "arguments": {
        "desc": "An action **MAY** have named arguments. Each argument, may have the following information about them",
        "$block": {
            "help": {
                "desc": "Arguments **SHOULD** provide a short description of the argument which can provide clarity to end users."
            },
            "type": {
                "desc": "The type of this argument. It must be one of `int`, `float`, `string`, `list`, `map`, `boolean`, `enum`",
                "required": true
            },
            "in": {
                "desc": "The location of this argument. Each execution strategy provides different possible values for this.",
                "required": true
            },
            "required": {
                "desc": "Whether this argument is required or not. The default value for this is false"
            } 
        }
    },
    "output": {
        "desc": "If your action returns data, it's output **SHOULD** be described here",
        "$block": {
            "type": {
                "desc": "The type of output. It must be one of `int`, `float`, `string`, `list`, `map`, `boolean`, `object`"
            },
            "contentType": {
                "desc": "If the `type` is specified as `object`, this **MUST** indicate the Content-Type of the response"
            },
            "properties": {
                "desc": "The properties which are available to the user. For example, if this action returns `{\"units\": 100, \"currency\": \"eur\"}`, you **SHOULD** declare `units` and `currency` as two properties. Each property mentioned here, may have the following information about it:",
                "$block": {
                    "type": {
                        "desc": "The type of this attribute. It must be one of `int`, `float`, `string`, `list`, `map`, `boolean`, `object`",
                        "required": true
                    }
                }
            }
        }
    }
}
</p>
</json-table>

::: tip 💡 Heads up!
The various types of interfaces (such as `http`, `command`, `rpc`) for actions are described [here](/schema/interface/).  
:::


## Checks

Arguments **SHOULD** provide variable checks.

### Patterns

```yaml{6}
actions:
  colorize:
    arguments:
      color:
        type: string
        pattern: '^\#?\w{6}$'
```

### Enums

```yaml{6-9}
actions:
  colorize:
    arguments:
      color:
        type: enum
        enum:
        - red
        - blue
        - green
```

### Range

```yaml{6,7,8}
actions:
  colorize:
    arguments:
      threshold:
        type: number
        range:
          min: 10
          max: 20
```

:bulb: By default there are no bounds for min and max.
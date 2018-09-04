# Actions
Defining actions is a way to organize which APIs are exposed 
and how they are used within an application or platform.

Properly defining actions can assist with the following:
  - Service discovery
  - Documentation
  - Operational insight

Services **MUST** define actions and arguments that can be used.

At a high level, services **SHOULD** define the following about themselves:

- Execution strategy
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
        "desc": "When the HTTP execution strategy is to be used, this specifies the HTTP connection settings",
        "$block": {
            "method": {                                                          
                "desc": "The HTTP method to be used - one of get/post/put/delete/patch",
                "required": true
            },
            "port": {                                                          
                "desc": "The port on which the connection must be established.",
                "required": true
            },
            "path": {                                                          
                "desc": "The path for this action to be executed",
                "required": true
            }
        }    
    },
    "format": {
        "desc": "When the command execution strategy is to be used, this specifies the command to be executed",
        "$block": {
            "command": {                                                          
                "desc": "The command to be executed. This may either be an array of strings, or a single string instead. An array of strings is **RECOMMENDED**",
                "required": true
            }
        }        
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
    }
}
</p>
</json-table>

# Execution Strategy
## HTTP

## Command
If the container provider is Docker, then `docker exec` is used:

### Docker Run/Exec
Docker run/exec can be used as an interface for execution **and** communication.
Data is transmitted using standard output. Arguments can be used to pass values to the container.

**Sample**

```yaml
actions:
  count:
    format:
      command: ["/app/count.sh"]
    arguments:
      word:
        type: string
    output:
      type: int
```


```sh
$ docker run --rm alpine /app/count.sh '{"word": "hello"}'
5
```

#### Output
- The Service **MAY** write data to `stdout` which is considered the result of the operation.
- The Service **MUST** `exit 0` if it performed the operations successfully.

#### Fail and Traceback
- If the Service fails to process the request, it **MUST** `exit 1` or `exit 2`.
- Data written to `stdout` is ignored when the exit code is greater than `0`.
- Data written to `stderr` **SHOULD** be traceback details.

##### Deterministic Failure
- The Service **MAY** exit with code `1` if it failed to performed the operation.
- An `exit 1` will inform the Platform *not* to process the command as the failure is deterministic.

##### Retry Failure
- The Service **MAY** exit with code `2` which indicates a failure and the Platform **SHOULD** retry.


##### Data Flow

```sh
+----------+               +------------+                                +----------------------+
|          |               |            |                                |                      |
|  Caller  |               |  Platform  |                                |  Interface via Exec  |
|          |               |            |                                |                      |
+----+-----+               +-----+------+                                +----------+-----------+
     |                           |                                                  |
     |    {"word": "hello"}      |                                                  |
     | ------------------------> |                                                  |
     |                           |   docker exec service count '{"word":"hello"}'   |
     |                           |  --------------------------------------------->  |
     |                           |                     5                            |
     |                           |  <---------------------------------------------  |
     |      {"length": 5}        |                                                  |
     | <------------------------ |                                                  |
     |                           |                                                  |
```

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
# Commands
Defining commands give developers a way to organize which microservices are exposed and how they are used within an application or platform.

Properly defining commands can assist with the following:
  - Service discovery
  - Documentation
  - Operational insight

Services **SHOULD** define commands and arguments that can be used.

[[toc]]


# Basic Usage

```yaml
commands:
  foobar:
    arguments:
      foo:
        type: string
      bar:
        type: object
    output: string
```

# Advanced Usage

## Types

Arguments **MUST** provide a data type.

| Types     | Encoding        |
| --------- | --------------- |
| `int`     | literal         |
| `float`   | literal         |
| `string`  | literal         |
| `uuid`    | literal         |
| `list`    | JSON            |
| `object`  | JSON            |
| `boolean` | `true`, `false` |
| `path`    | literal         |


## Format

A command **MAY** define a `format` attribute. The following methods exist:

* `$arg`
* `$json`
* *user-defined*

### Usage

Example usage describing a simple microservice that calculates the sum of two numbers

:bulb: The `$json` method is used by default

#### $args
```yaml
commands:
  sum:
    format: '$args'
    arguments:
      x:
        type: int
      y:
        type: int
```

`docker run sum --x 4 --y 7`

#### $json
```yaml
commands:
  sum:
    format: '$json'
    arguments:
      x:
        type: int
      y:
        type: int
```
`docker run sum '{x: 4, y: 7}'`

#### user-defined
```yaml
commands:
  sum:
    format: 'x_val={{x}} y_val={{y}}'
    arguments:
      x:
        type: int
      y:
        type: int
```
``docker run sum x_val=4 y_val=7``

:warning: *All arguments **MUST** be specified in the `format` value. Extra values will result in a failure.*


## Help

Arguments **SHOULD** provide a short description of the command and any arguments that can provide clarity to end users.

```yaml{3,7}
commands:
  fly:
    help: "Jump on a spaceship."
    arguments:
      dest:
        type: int
        help: "Choose a destination."
    output: int
```

## Checks

Arguments **SHOULD** provide variable checks.

### Patterns

```yaml{6}
commands:
  foobar:
    arguments:
      color:
        type: string
        pattern: '^\#?\w{6}$'
    output: boolean
```

### Enums

```yaml{6}
commands:
  foobar:
    arguments:
      choose:
        type: string
        enum:
        - thing_one
        - thing_two
    output: object
```

### Range

```yaml{6,7,8}
commands:
  foobar:
    arguments:
      choose:
        type: number
        range:
          min: 10
          max: 20
    output: int
```

:bulb: By default there are no bounds for min and max.

## Required

```yaml{6}
commands:
  foobar:
    arguments:
      action:
        type: string
        required: true
    output: array
```

:bulb: By default, **false**.


## Entrypoint

```yaml{2}
commands:
  entrypoint:
    # ...
```

Services **MAY** use the reserved keyword `entrypoint` which is used when no command is provided.

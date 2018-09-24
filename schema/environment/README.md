# Environment

Services **MUST** list environment variables that may be used to 
perform any actions the service exposes. They are provided when the service starts.

*All environment variables are not exposed by default*

```yaml{2}
environment:
  access_token:
    type: string
    pattern: "^key_"
    required: true
    help: |
      Description of how the user should produce this variable
```

Services **SHOULD** only declare environment variables it requires.

Each environment variable under `environment` may have the following information about it:

<json-table>
<p>
{
    "type": {
        "desc": "The data type for this environment variable. It must be one of `int`, `float`, `string`, `boolean`",
        "required": true
    },
    "pattern": "Validations for strings, if required.",
    "required": "Whether this variable is required or not. If not specified, this field defaults to `false`",
    "help": "Description of how the user should produce this variable"
}
</p>
</json-table>

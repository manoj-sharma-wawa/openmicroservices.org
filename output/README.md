# Output

## Standard Output (Docker Run / Exec)

The service **MAY** write data to `stdout` which is considered the result of the operation.

Data written to `stderr` **SHOULD** be stored as traceback details.

## Streaming

Stream service output to a destination listening for `HTTP POST` requests:

```yaml
streaming:
  http:
    method: post
      endpoint: $MSG_STREAM_ENDPOINT
      port: $STREAM_PORT
      uri: $STREAM_URI
      ssl: $STREAM_SSL
```

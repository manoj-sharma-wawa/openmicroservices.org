# Interfacing

Services **MUST** provide an interface in one of the following ways:

[[toc]]

## Docker Run / Exec

Docker run/exec can be used as an interface for execution **and** communication. Data is transmitted using standard output. Arguments can be used to pass values to the container.

```bash
$ docker run --rm alpine echo 'Hello World'
Hello World
```

### Output
The Service **MAY** write data to `stdout` which is considered the result of the operation.

The Service **MUST** exit with code `0` if it performed the operations successfully.

```bash
exit 0
```

### Fail and Traceback
If the Service fails to process the request it **MUST** exit with `1` or `2`.
Data written to `stdout` is ignored when the exit code is greater than `0`.
Data written to `stderr` **SHOULD** be traceback details.

#### Deterministic Failure
The Service **MAY** exit with code `1` if it failed to performed the operation.
An `exit 1` will inform the Platform *not* to process the command as the failure is deterministic.

#### Retry Failure
The Service **MAY** exit with code `2` which indicates a failure and the Platform **SHOULD** retry.

### Example Usage


```yaml
commands:
  count:
    arguments:
      word:
        type: string
```

```bash
+----------+               +------------+                                +----------------------+
|          |               |            |                                |                      |
|  Caller  |               |  Platform  |                                |  Interface via Exec  |
|          |               |            |                                |                      |
+----+-----+               +-----+------+                                +----------+-----------+
     |                           |                                                  |
     |    {"word": "foobar"}     |                                                  |
     | ------------------------> |                                                  |
     |                           |   docker exec service count '{"word":"foobar"}'  |
     |                           |  --------------------------------------------->  |
     |                           |                     6                            |
     |                           |  <---------------------------------------------  |
     |      {"length": 6}        |                                                  |
     | <------------------------ |                                                  |
     |                           |                                                  |
```



## HTTP
The Service **MAY** communicate through an HTTP server.

The Service **MUST** define how to start the HTTP server by changing the `lifecycle` startup.

```yaml
lifecycle:
  startup:
    command: ["/bin/server", "-p", "8080"]
    port: 8080
```

The `port` of where the server is binding to **MUST** be specified.
The Service **MAY** specify a `command` which will override the `entrypoint` of the service.

### Platform to Server

In this communication method the Service's http server **SHOULD** be already running and waiting for connections.
The Platform will make http requests to the server which results in a response body of data which the Platform would handle.
The connection **MUST** be closed after the request completes.

```bash
+------------+         +----------+
|            |         |          |
|  Platform  |         |  Server  |
|            |         |          |
+-----+------+         +-----+----+
      |                      |
      |  {"word": "hello"}   |
      | -------------------> |
      |                      |
      |    {"length": 5}     |
      | <------------------- |
      |                      |
```

### Location of arguments in the HTTP request

All types of HTTP requests will apply arguments based on the specified `location` of the argument.

The below example shows a `GET` request with a query and path parameter.

```yaml{6,7,8}
commands:
  foobar:
    arguments:
      isMale:
        type: boolean
        location: query
      person_id:
        type: int
        location: path
    http:
      method: get
      endpoint: /path/:person_id
```

```bash
curl -X GET http://service:8080/path/12?isMale=false
```

This next example is a `POST` where data is passed via the body.

```yaml{6,7,8}
commands:
  foobar:
    arguments:
      foo:
        type: int
        location: body
      bar:
        type: string
        location: body
    http:
      method: post
      endpoint: /path
```

```bash
curl -X POST http://service:8080/path -H "Content-Type: application/json" -d '{foo: 2, bar: "baz"}'
```

### Server to Platform

In this communication method the Service will start a new http server and provide it with an endpoint to communicate back to the Platform.
The http server will then make http requests to the Platform of new data and handle the response from the server.

```bash
+------------+                  +----------+
|            |                  |          |
|  Platform  |                  |  Server  |
|            |                  |          |
+-----+------+                  +----+-----+
      |                              |
      |     {"name": "Einstein"}     |
      | <--------------------------- |
      | ---------------------------> |
      |                              |
      |      {"name": "Tesla"}       |
      | <--------------------------- |
      | ---------------------------> |
      |                              |
```

The Service **MUST** provide the following details to start the http server.

```yaml{6,7,8,9}
commands:
  something:
    arguments:
      data:
        type: string
    startup:
      command: ["/bin/server", "--key", "{data}"]
      port: 8888
```

The http server **WILL** be started when when the command is triggered by the Platform.
The server `command` **MAY** format the data provided in `arguments`.

```bash
$ docker run -d --network $PLATFORM_NETWORK \
             -p $PLATFORM_PICKED_PORT:8888 \
             -e "MG_ENDPOINT=http://$ENDPOINT:$PORT" \
             --entrypoint /bin/server \
             IMAGE --key foobar
```
> <small>This is an example using `docker run`. The Platform may start the container in other ways.</small>

The server **MUST** make `HTTP POST` requests to the url provided in the environment variable `MG_ENDPOINT`.

```bash
$ curl -X POST -d '{"name": "Einstein"}' $MG_ENDPOINT
```

The server **MAY** receive data in the http request connection from the Platform.


## RPC

The Service **MAY** communicate via RPC.

The Service **MUST** define server and framework attributes.

```yaml
rpc:
  port: 8080
  framework:
    grpc:
      version: 2
      proto:
        path: git@github-server:project/repo.git/path/to/api.proto # Any valid URI path can be used
  client:
    endpoint: service
    port: 8080
    tls: true
```

*TLS configuration is defined separately. See the [authentication](/authentication) section for details.*

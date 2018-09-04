# Interfacing

Since the underlying execution strategy for an action can be a command, a HTTP request, or a RPC call, 
each action **MUST** provide an interface for it to be executed:

[[toc]]

## 





## HTTP
The Service **MAY** communicate through an HTTP server.

The Service **MUST** define how to start the HTTP server by changing the `lifecycle` run.

*See [lifecycle](/schema/lifecycle/#lifecycle) for additional capabilities*

```yaml
lifecycle:
  run:
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

```yaml{4,5,6,7,8,9,13}
actions:
  foobar:
    arguments:
      isMale:
        type: boolean
        location: query
      person_id:
        type: int
        location: path
    output: object
    http:
      method: get
      endpoint: /path/{{person_id}}
```
*Path parameters **MUST** be specified in the `endpoint`*

```sh
$ curl -X GET http://service:8080/path/12?isMale=false
```

This next example is a `POST` where data is passed via the body.

```yaml{4,5,6,7,8,9}
actions:
  foobar:
    arguments:
      foo:
        type: int
        location: body
      bar:
        type: string
        location: body
    output: object
    http:
      method: post
      endpoint: /path
```

```sh
$ curl -X POST http://service:8080/path -H "Content-Type: application/json" -d '{foo: 2, bar: "baz"}'
```

### Server to Platform

In this communication method the Service will start a new http server and provide it with an endpoint to communicate back to the Platform.
The http server will then make `HTTP POST` requests to the Platform of new data and handle the response from the server.

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

The Service **MUST** provide the following details to start the streaming server.

```yaml{7,8}
actions:
  something:
    arguments:
      data:
        type: string
    output: object
    run:
      command: ["/bin/server"]
```

The server **MUST** make `HTTP POST` requests to the url provided in the environment variable `OMG_ENDPOINT`.

```sh
$ curl -X POST -d '{"name": "Einstein"}' $OMG_ENDPOINT
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

::: tip 💡 Heads up!
TLS configuration is defined separately. See the [authentication](/schema/authentication) section for details.
:::

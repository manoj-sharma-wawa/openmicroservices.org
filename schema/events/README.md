# Events

<!-- TODO a nice svg illustration showing how this works -->

A service **MAY** have a command that publishes many events asynchronously.
A client would subscribe to events and the service will publish events back to the client.

> <small>Great for webhooks, pubsub, user interactions and streaming IoT data.</small>

Subscribing to an event **MAY** include `arguments` which can be used to define certain parameters concerning the subscription. For example, filtering the content before the event is published.

Events **MUST** define an `output` which is the payload of the event sent to the client.

The service **MUST** maintain a registry of subscriptions.

[[toc]]

### How it works

1. **Subscribe**. Client subscribes to an event by making an HTTP request.
```shell
# Client to Service
POST http://SERVICE/subscribe {
  "id": "9a8b0ad3-9bc0-4af5-890f-75b9acacf3ab",
  "event": "signup",
  "endpoint": "https://CLIENT/signups",
  "data": { }  # This would be a map of arguments if the event has any.
}
```

2. **Register**. The Service stores the subscription in a registry.
```python
registry = {}

def subscribe(data):
    registry[data['id']] = data
```

3. **Publish**. A new event is ready to be published by the Service.
```python
def publish(event, data):
    for subscription in registry:
        if subscription['event'] == event:
            # ... see next step below ...
```

4. **Send**. The service will HTTP POST the event to client using the [CloudEvents spec](https://github.com/cloudevents/spec).
```shell
# Service to Client
POST https://CLIENT/signups {
  "cloudEventsVersion" : "0.1",
  "eventType" : "com.user.signup",
  "source" : "/signup",
  "eventID" : "A234-1234-1234",
  "eventTime" : "2018-04-05T17:31:00Z",
  "contentType" : "text/json",
  "data" : {  # event data
    "name": "Steve",
    "email": "no-reply@microservice.guide"
  }
}
```

> <small>This allows many clients to subscribe to many events. All clients have unique destinations to publish events.</small>


### Configuration

```yaml {14,24,27}
commands:
  user:
    help: Subscribe to user events
    http:
      port: 5000
      subscribe:
        path: /subscribe
        method: post
        contentType: application/json
      unsubscribe:
        path: /unsubscribe
        method: delete
    events:
      signup:
        help: When a customer signs up
        output: &user
          type: object
          contentType: application/json
          properties:
            name:
              type: string
            email:
              type: string
      login:
        help: When a user logs in.
        output: <<*user  # yaml magic to reuse the object declared above
      logout:
        help: When a user logs out.
        output: <<*user
```

<json-table>
<p>
{
  "help": {
    "desc": "A human friendly description for this event."    
  },
  "http": {
    "desc": "",
    "$block": {
      "port": "The port to make (un)subscribe requests to.",
      "subscribe": {
        "desc": "Describing how to subscribe to the event.",
        "$block": {
          "path": "A path used in the request url.",
          "method": "HTTP method. E.g. post.",
          "contentType": "Choose how arguments are encoded when subscribing."
        }
      },
      "unsubscribe": {
        "desc": "Describing how to unsubscribe to the event.",
        "$block": {
          "path": "A path used in the request url.",
          "method": "HTTP method. E.g. post or delete",
          "contentType": "Choose how arguments are encoded when unsubscribing."
        }
      }
    }
  },
  "arguments": {
      "desc": "An event **MAY** have named arguments. Each argument, may have the following information about them",
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
      "desc": "If your event returns data, it's output **SHOULD** be described here",
      "$block": {
          "type": {
              "desc": "The type of output. It must be one of `int`, `float`, `string`, `list`, `map`, `boolean`, `object`"
          },
          "contentType": {
              "desc": "If the `type` is specified as `object`, this **MUST** indicate the Content-Type of the response"
          },
          "properties": {
              "desc": "The properties which are available to the user. For example, if this event returns `{\"units\": 100, \"currency\": \"eur\"}`, you **SHOULD** declare `units` and `currency` as two properties. Each property mentioned here, may have the following information about it:",
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


### Example Services

Below are a few services that publish events.

- [Slack Bot](https://github.com/microservice/slack/blob/master/microservice.yml)
  - Listen and hear messages in a room.
- [Twitter Hashtag Streaming](https://github.com/microservice/twitter/blob/master/microservice.yml)
  - Stream tweets filtered by a hashtag.
- [GitHub Webhooks](https://github.com/microservice/github/blob/master/microservice.yml)
  - Receives GitHub webhooks and publishes them as events.

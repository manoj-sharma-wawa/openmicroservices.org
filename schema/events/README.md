# Events

<!-- TODO a nice svg illustration showing how this works -->

A Service **MAY** have an action that publishes events asynchronously.
The Platform would subscribe to events and the Service will publish events back to the Platform.

> <small>Great for webhooks, pubsub, user interactions and streaming IoT data.</small>

Subscribing to an event **MAY** include `arguments` which can be used to define certain parameters
concerning the subscription. For example, filtering the content before the event is published.

Events **SHOULD** define an `output` when a payload is sent to the Platform.

The Service **MUST** define all of its events in the `microservice.yml` file. 

[[toc]]

### Configuration

```yaml {14,24,27}
actions:
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
        method: post
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
        "required": true,
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

### How it works

1. **Subscribe**. The Platform subscribes to an event by making a HTTP request to the Service.
```shell
# Platform to Service
POST http://SERVICE/subscribe {
  "id": "9a8b0ad3-9bc0-4af5-890f-75b9acacf3ab",
  "event": "signup",
  "endpoint": "https://CLIENT/signups",
  "data": { }  # This would be a map of arguments if the event has any.
}
```

The Service **MUST** store this subscription information. Here's a Python snippet depicting this:
```python
subscriptions = {}

def subscribe(data):
    subscriptions[data['id']] = data
```

2. **Publish**. A new event is ready to be published by the Service.

Here's a Python snippet which reads our previously declared `subscriptions` map:

```python
def publish(event, data):
    for subscription in subscriptions:
        if subscription['event'] == event:
            # Make a HTTP POST request to subscription['endpoint']
```

The Service then makes a HTTP POST request to send the event to the Platform using the [CloudEvents spec](https://github.com/cloudevents/spec).

```shell
# Service to Platform
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

> <small>This allows the Platform to subscribe to many events. 
All subscriptions will have a unique destination to publish events.</small>

### Example Services

Below are a few services that publish events.

- [Slack Bot](https://github.com/microservice/slack/blob/master/microservice.yml)
  - Listen and hear messages in a room.
- [Twitter Hashtag Streaming](https://github.com/microservice/twitter/blob/master/microservice.yml)
  - Stream tweets filtered by a hashtag.
- [GitHub Webhooks](https://github.com/microservice/github/blob/master/microservice.yml)
  - Receives GitHub webhooks and publishes them as events.

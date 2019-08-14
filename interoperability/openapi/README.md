# OpenAPI
The [`openapi2omg`](https://github.com/microservices/openapi2omg) tool aims to be able to 
convert an OpenAPI spec to an OMG spec.
To do so, it adds the following fields in the root of the generated `microservice.yaml`:
```yaml
source: openapi
hostedExternally: true
fromOpenAPIVersion: 3.0.0
``` 

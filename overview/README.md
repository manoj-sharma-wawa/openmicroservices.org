# Overview

The Microservice Guide is an open standard for reusable microservices.

## Microservice Definition
A `microservice.yml` file should be provided which outlines the command structure and operations of the container as seen below in the documentation.

## Docker
*This guide is not dependent on Docker. If you are using Docker, there are general recommendations that should be applied to your microservice.*

Follow the [Docker Docs](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) for Dockerfile best practices

A container can accept input and write output (like a traditional function) or stream output (e.g., web servers, chatbots, social media streams).

* Keep images to a bare minimum
    * Consider using a parent image from `alpine` or a base image `FROM scratch`
* Include an `EXPOSE` instruction for external access
* Include an `ENTRYPOINT`

## Keywords

- **MUST** - Required for a service to contain this functionality
- **SHOULD** - Recommended for a service to contain this functionality
- **MAY** - Optional for a service to contain this functionality

See [RFC 2119](https://tools.ietf.org/html/rfc2119) for details

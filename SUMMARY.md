# Table of contents

* [API Reference](README.md)
* [Authentication](authentication.md)
* [Rate Limits](rate-limits.md)

## Email API

* [Overview](email-api/overview.md)

## Sending

* ```yaml
  props:
    models: false
    downloadLink: false
    expandOperations: false
  type: builtin:openapi
  dependencies:
    spec:
      ref:
        kind: openapi
        spec: email-sending-transactional
  ```
* ```yaml
  props:
    models: false
    downloadLink: false
    expandOperations: false
  type: builtin:openapi
  dependencies:
    spec:
      ref:
        kind: openapi
        spec: email-sending-bulk
  ```
* ```yaml
  props:
    models: false
    downloadLink: false
    expandOperations: false
  type: builtin:openapi
  dependencies:
    spec:
      ref:
        kind: openapi
        spec: email-batch
  ```

## Management

* ```yaml
  props:
    models: false
    downloadLink: false
    expandOperations: false
  type: builtin:openapi
  dependencies:
    spec:
      ref:
        kind: openapi
        spec: email-api
  ```

## Email Sandbox

* [Overview](sandbox/overview.md)
* ```yaml
  props:
    models: false
    downloadLink: false
  type: builtin:openapi
  dependencies:
    spec:
      ref:
        kind: openapi
        spec: sandbox
  ```

## Email Marketing

* [Contacts API](contacts/overview.md)
* ```yaml
  props:
    models: false
    downloadLink: false
  type: builtin:openapi
  dependencies:
    spec:
      ref:
        kind: openapi
        spec: contacts
  ```

## Account Management

* [General API](general/overview.md)
* ```yaml
  props:
    models: false
    downloadLink: false
  type: builtin:openapi
  dependencies:
    spec:
      ref:
        kind: openapi
        spec: general
  ```

## Webhooks

* ```yaml
  props:
    models: false
    downloadLink: false
  type: builtin:openapi
  dependencies:
    spec:
      ref:
        kind: openapi
        spec: webhooks
  ```

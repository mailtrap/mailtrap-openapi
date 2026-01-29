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
* ```yaml
  props:
    models: false
    downloadLink: false
  type: builtin:openapi
  dependencies:
    spec:
      ref:
        kind: openapi
        spec: templates
  ```

## Account Management

* [Account Management API](account-management/overview.md)
* ```yaml
  props:
    models: false
    downloadLink: false
  type: builtin:openapi
  dependencies:
    spec:
      ref:
        kind: openapi
        spec: account-management
  ```

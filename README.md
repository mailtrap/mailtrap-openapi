# Mailtrap OpenAPI Specifications

This repository contains the OpenAPI specification files for various Mailtrap services. These specs can be used to generate clients, explore the API, or integrate with Mailtrap's features.

**Live API Documentation:** https://docs.mailtrap.io/developers

## Available Specifications

The specifications are located in the `specs/` directory:

| Spec                         | File                                            | Base URL                          |
| ---------------------------- | ----------------------------------------------- | --------------------------------- |
| Account Management           | `specs/account-management.openapi.yml`          | `https://mailtrap.io`             |
| Contacts                     | `specs/contacts.openapi.yml`                    | `https://mailtrap.io`             |
| Email Campaigns              | `specs/email-campaigns.openapi.yml`             | `https://mailtrap.io`             |
| Live Sending                 | `specs/email-sending.openapi.yml`               | `https://mailtrap.io`             |
| Live Sending (Bulk)          | `specs/email-sending-bulk.openapi.yml`          | `https://bulk.api.mailtrap.io`    |
| Live Sending (Transactional) | `specs/email-sending-transactional.openapi.yml` | `https://send.api.mailtrap.io`    |
| Sandbox (send & batch)       | `specs/sandbox-sending.openapi.yml`             | `https://sandbox.api.mailtrap.io` |
| Sandbox                      | `specs/sandbox.openapi.yml`                     | `https://mailtrap.io`             |
| Templates                    | `specs/templates.openapi.yml`                   | `https://mailtrap.io`             |
| Inbound                      | `specs/inbound.openapi.yml`                     | `https://mailtrap.io`             |

## Versions

[docs.mailtrap.io](https://docs.mailtrap.io/developers) renders the `main` branch. Each published state of the specs
is a [release](https://github.com/mailtrap/mailtrap-openapi/releases) tagged `vX.Y.Z`. The release marked Latest is the
newest published one, and a release marked Pre-release documents API changes that are not live yet. `dev` collects
reviewed changes for the next release, and pull requests target it.

Tags never move, so pin one for reproducible client generation. A release's major version is the API's: `v2.x.y`
documents API v2, the `info.version` inside the specs. Minor and patch versions count changes to the specs.

## Usage

You can import these files into tools like Postman, Swagger UI, or use them with OpenAPI generators to build SDKs for your preferred language.

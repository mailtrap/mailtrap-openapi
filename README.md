# Mailtrap OpenAPI Specifications

This repository contains the OpenAPI specification files for various Mailtrap services. These specs can be used to generate clients, explore the API, or integrate with Mailtrap's features.

**Live API Documentation:** https://docs.mailtrap.io/developers

## Available Specifications

The specifications are located in the `specs/` directory:

| Spec | File | Base URL |
|------|------|----------|
| Email Sending (Transactional) | `specs/email-sending-transactional.openapi.yml` | `https://send.api.mailtrap.io` |
| Email Sending (Bulk) | `specs/email-sending-bulk.openapi.yml` | `https://bulk.api.mailtrap.io` |
| Email Batch | `specs/email-batch.openapi.yml` | `https://send.api.mailtrap.io` |
| Contacts | `specs/contacts.openapi.yml` | `https://mailtrap.io` |
| Sandbox | `specs/sandbox.openapi.yml` | `https://mailtrap.io` |
| General | `specs/general.openapi.yml` | `https://mailtrap.io` |
| Webhooks | `specs/webhooks.openapi.yml` | Your endpoint |
| Email API | `specs/email-api.openapi.yml` | Varies by operation |

## Usage

You can import these files into tools like Postman, Swagger UI, or use them with OpenAPI generators to build SDKs for your preferred language.



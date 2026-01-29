# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the official **Mailtrap OpenAPI Specifications** repository. It contains OpenAPI 3.1 specification files for all Mailtrap API services. These specs are:
- Publicly accessible for client generation and API exploration
- Auto-fetched by GitBook to render interactive API documentation at https://docs.mailtrap.io/developers
- Used as the source of truth for Mailtrap API documentation

## Repository Structure

```
mailtrap-openapi/
├── specs/                    # OpenAPI specification files
│   ├── contacts.openapi.yml
│   ├── email-api.openapi.yml
│   ├── email-sending-bulk.openapi.yml
│   ├── email-sending-transactional.openapi.yml
│   ├── general.openapi.yml
│   ├── sandbox.openapi.yml
│   └── templates.openapi.yml
├── .claude/
│   └── skills/
│       └── gitbook-assistant/    # GitBook formatting skill
└── README.md
```

## OpenAPI Specifications

### Available Specs

| Spec File | Description | Base URL |
|-----------|-------------|----------|
| `email-sending-transactional.openapi.yml` | Transactional email sending | `https://send.api.mailtrap.io` |
| `email-sending-bulk.openapi.yml` | Bulk/marketing email sending | `https://bulk.api.mailtrap.io` |
| `contacts.openapi.yml` | Contact management API | `https://mailtrap.io` |
| `sandbox.openapi.yml` | Email Sandbox/testing API | `https://mailtrap.io` |
| `general.openapi.yml` | Account, users, permissions, billing | `https://mailtrap.io` |
| `templates.openapi.yml` | Email templates API | `https://mailtrap.io` |
| `email-api.openapi.yml` | Combined email API reference | Varies by operation |

### Base URL Rules

**CRITICAL: Never change base URLs in OpenAPI specs. The correct base URLs are:**

- **Transactional emails**: `https://send.api.mailtrap.io`
- **Bulk emails**: `https://bulk.api.mailtrap.io`
- **All other APIs**: `https://mailtrap.io`

## Link Formatting

### Documentation Links

**All links in OpenAPI specs MUST be absolute URLs pointing to docs.mailtrap.io**

Do NOT use:
- Relative links
- Links to help.mailtrap.io (legacy HelpScout)
- Links to app.gitbook.com internal URLs in public-facing descriptions

**Correct format:**
```yaml
description: |
  Learn more about [Sending Domain Setup](https://docs.mailtrap.io/email-api-smtp/setup/sending-domain).
```

### Link Reference Mapping

A mapping file `helpscout_to_gitbook_redirects.csv` is available locally (not committed) that maps old HelpScout URLs to new GitBook URLs. Use this when updating legacy links:

| Old URL Pattern | New URL Pattern |
|-----------------|-----------------|
| `help.mailtrap.io/article/*` | `docs.mailtrap.io/*` |

**Common documentation links:**

| Topic | URL |
|-------|-----|
| Getting Started | `https://docs.mailtrap.io/getting-started` |
| API Integration | `https://docs.mailtrap.io/email-api-smtp/setup/api-integration` |
| SMTP Integration | `https://docs.mailtrap.io/email-api-smtp/setup/smtp-integration` |
| Sending Domain Setup | `https://docs.mailtrap.io/email-api-smtp/setup/sending-domain` |
| Bulk Stream | `https://docs.mailtrap.io/email-api-smtp/setup/bulk-stream` |
| Email Templates | `https://docs.mailtrap.io/email-marketing/campaigns/email-templates` |
| Email Logs | `https://docs.mailtrap.io/email-api-smtp/analytics/logs` |
| Email Sandbox | `https://docs.mailtrap.io/getting-started/email-sandbox` |
| API Tokens | `https://docs.mailtrap.io/email-sandbox/setup/api-tokens` |
| FAQs | `https://docs.mailtrap.io/email-api-smtp/help/faqs` |

### Contact Information

Update contact URLs in spec `info` blocks:
```yaml
info:
  contact:
    name: Mailtrap Support
    url: 'https://docs.mailtrap.io'  # NOT help.mailtrap.io
    email: support@mailtrap.io
```

## GitBook Formatting in OpenAPI

OpenAPI descriptions support GitBook markdown syntax. Use the **gitbook-assistant skill** for proper formatting.

### Supported GitBook Blocks

Use these blocks in `description` fields:

```yaml
description: |
  {% hint style="info" %}
  This is an informational callout.
  {% endhint %}

  {% hint style="warning" %}
  This is a warning callout.
  {% endhint %}

  {% tabs %}
  {% tab title="Option A" %}
  Content for option A
  {% endtab %}
  {% tab title="Option B" %}
  Content for option B
  {% endtab %}
  {% endtabs %}
```

### Critical Formatting Rules

1. **Always close blocks**: `{% hint %}` → `{% endhint %}`, `{% tab %}` → `{% endtab %}`
2. **Proper nesting**: Tabs cannot be inside details blocks
3. **No orphaned tags**: Every opening tag needs a closing tag

## Code Samples (x-codeSamples)

### SDK Priority Order

Include code samples in this order:
1. cURL (shell)
2. Node.js (JavaScript)
3. PHP
4. Python
5. Ruby
6. .NET (C#)
7. Java

### Code Sample Format

```yaml
x-codeSamples:
  - lang: javascript
    label: Node.js
    source: |
      import { MailtrapClient } from "mailtrap";

      const client = new MailtrapClient({
        token: process.env.MAILTRAP_API_KEY
      });

      // SDK-specific code here
  - lang: php
    label: PHP
    source: |
      <?php
      use Mailtrap\MailtrapClient;
      // PHP SDK code here
```

### Code Sample Guidelines

- **Use official Mailtrap SDKs** for language-specific examples
- **If SDK doesn't support a method**, either let GitBook generate the example or add a comment noting SDK limitations
- **Use environment variables** for API keys (e.g., `process.env.MAILTRAP_API_KEY`)
- **Use Context7 MCP** to query SDK capabilities when unsure

### SDK Repositories

Reference SDK repos for accurate code examples:
- Node.js: `mailtrap/mailtrap-nodejs`
- PHP: `railsware/mailtrap-php`
- Python: `railsware/mailtrap-python`
- Ruby: `railsware/mailtrap-ruby`
- .NET: Future reference
- Java: Future reference

## OpenAPI Extensions

### Custom Extensions Used

| Extension | Purpose |
|-----------|---------|
| `x-page-title` | GitBook page title in navigation |
| `x-page-icon` | Font Awesome icon for the page |
| `x-page-description` | Short description for navigation |
| `x-parent` | Parent tag for nested navigation |
| `x-codeSamples` | SDK code examples |
| `x-logo` | API logo for documentation |

### Tag Structure for Navigation

```yaml
tags:
  - name: parent-tag
    x-page-title: Parent Section
    x-page-description: Description here
    description: |
      Detailed markdown description with GitBook blocks

  - name: child-tag
    x-parent: parent-tag
    x-page-title: Child Page
    description: Child tag description
```

## Product Names

Follow official product naming:
- **Email API/SMTP** (can shorten to "Email API" or "API/SMTP")
- **Email Sandbox** (can shorten to "Sandbox")
- **Email Marketing** (can shorten to "Marketing")

## Validation Workflow

When creating or editing OpenAPI specs:

1. **Validate YAML syntax** - Ensure valid YAML formatting
2. **Check base URLs** - Verify correct base URL for the API type
3. **Update contact URLs** - Use docs.mailtrap.io, not help.mailtrap.io
4. **Validate GitBook blocks** - All blocks properly opened and closed
5. **Check links** - All documentation links are absolute and valid
6. **Verify code samples** - SDK examples match current SDK versions
7. **Test with OpenAPI validator** - Ensure spec is valid OpenAPI 3.1

## Working with This Repository

### No Build System

This is a specification-only repository:
- No build, test, or lint commands
- No package managers or dependencies
- Changes are validated through GitBook's import system
- Focus on YAML syntax and OpenAPI/GitBook formatting correctness

### Making Changes

1. Edit the relevant `.openapi.yml` file in `specs/`
2. Ensure valid YAML and OpenAPI 3.1 syntax
3. Update documentation links to use docs.mailtrap.io
4. Add/update code samples as needed
5. Commit with descriptive message

### GitBook Integration

Once changes are pushed to main:
- GitBook automatically fetches updated specs
- API documentation at https://docs.mailtrap.io/developers updates
- Interactive API explorer reflects changes

## Content Guidelines

- Do not use emojis in specification content
- Do not add sections or content unless explicitly requested
- Keep descriptions concise and developer-focused
- Prioritize technical accuracy

## Files Not to Commit

The following files should remain local and not be committed:
- `helpscout_to_gitbook_redirects.csv` - URL mapping reference file

## Resources

### GitBook Assistant Skill

Use the gitbook-assistant skill in `.claude/skills/gitbook-assistant/` for:
- GitBook formatting validation
- Block syntax templates
- OpenAPI-specific formatting guidance

### External References

- [OpenAPI 3.1 Specification](https://spec.openapis.org/oas/v3.1.0)
- [GitBook Documentation](https://docs.gitbook.com/)
- [Mailtrap Documentation](https://docs.mailtrap.io/)

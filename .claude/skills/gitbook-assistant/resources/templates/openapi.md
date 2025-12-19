# OpenAPI Block Template

## Basic Syntax

```markdown
{% openapi src="url-to-openapi-spec" path="/api/endpoint" method="get" %}
url-to-openapi-spec
{% endopenapi %}
```

## With External OpenAPI Spec

```markdown
{% openapi src="https://api.example.com/openapi.json" path="/v1/users/{id}" method="get" %}
https://api.example.com/openapi.json
{% endopenapi %}
```

## Common HTTP Methods

### GET Request
```markdown
{% openapi src="./openapi.json" path="/getCompressedAccount" method="get" %}
./openapi.json
{% endopenapi %}
```

### POST Request
```markdown
{% openapi src="./openapi.json" path="/getValidityProof" method="post" %}
./openapi.json
{% endopenapi %}
```

### PUT Request
```markdown
{% openapi src="./openapi.json" path="/api/v1/resource/{id}" method="put" %}
./openapi.json
{% endopenapi %}
```

### DELETE Request
```markdown
{% openapi src="./openapi.json" path="/api/v1/resource/{id}" method="delete" %}
./openapi.json
{% endopenapi %}
```

## OpenAPI Extensions

### Custom Code Samples
```yaml
x-codeSamples:
  - lang: TypeScript
    source: |
      const account = await rpc.getCompressedAccount(hash);
  - lang: Rust
    source: |
      let account = rpc.get_compressed_account(&hash).await?;
```

### Custom Request Body Examples
```yaml
x-bodyName: "validityProofRequest"
```

### RPC Method Name
```yaml
x-rpc-method-name: "getCompressedAccount"
```

## Best Practices

- Store OpenAPI specs in a dedicated directory (e.g., `/api-specs/`)
- Use relative paths when spec is in the same repository
- Ensure OpenAPI spec is valid (use validators)
- Include comprehensive examples in the spec
- Use extensions for language-specific code samples
- Document all parameters, responses, and errors
- Version your API specs (e.g., `openapi-v1.json`, `openapi-v2.json`)

## ZK Compression RPC Example

```markdown
{% openapi src="../api-specs/zk-compression-rpc.json" path="/getCompressedAccount" method="post" %}
../api-specs/zk-compression-rpc.json
{% endopenapi %}
```

## Notes

- The URL between tags is required (mirrors the src parameter value for parsing)
- OpenAPI spec can be JSON or YAML format
- GitBook will render interactive API documentation
- Supports OpenAPI 2.0 (Swagger) and 3.0+ specifications
- Path parameters are shown with curly braces: `/users/{userId}`

# Structuring your API reference

GitBook does more than just render your OpenAPI spec. It lets you customize your API reference for better clarity, navigation, and branding.

### Split operations across multiple pages

To keep your documentation organized, GitBook can split your API operations into separate pages. Each page is generated from a tag in your OpenAPI spec. To group operations into a page, assign the same tag to each operation:

<pre class="language-yaml" data-title="openapi.yaml"><code class="lang-yaml">paths:
  /pet:
    put:
<strong>      tags:
</strong><strong>        - pet
</strong>      summary: Update an existing pet.
      description: Update an existing pet by Id.
      operationId: updatePet
</code></pre>

### Reorder pages in your table of contents

The order of pages in GitBook matches the order of tags in your OpenAPI tags array:

<pre class="language-yaml" data-title="openapi.yaml"><code class="lang-yaml">tags:
<strong>  - name: pet
</strong><strong>  - name: store
</strong><strong>  - name: user
</strong></code></pre>

### Nest pages into groups

To build multi-level navigation, use `x-parent` (or `parent`) in tags to define hierarchy:

<pre class="language-yaml" data-title="openapi.yaml"><code class="lang-yaml">tags:
  - name: everything
  - name: pet
<strong>    x-parent: everything
</strong>  - name: store
<strong>    x-parent: everything
</strong></code></pre>

The above example will create a table of contents that looks like:

```
Everything
├── Pet
└── Store
```

If a page has no description, GitBook will automatically show a card-based layout for its sub-pages.

### Customize page titles, icons, and descriptions

You can enhance pages with titles, icons, and descriptions using custom extensions in the tags section. All [Font Awesome icons](https://fontawesome.com/search) are supported via `x-page-icon`.

{% code title="openapi.yaml" %}

```yaml
tags:
  - name: pet
    # Page title displayed in table of contents and page
    -x-page-title: Pet
    # Icon shown in table of contents and next to page title
    -x-page-icon: dog
    # Description shown just above the title
    -x-page-description: Pets are amazing!
    # Content of the page
    description: Everything about your Pets
```

{% endcode %}

### Build rich descriptions with GitBook Blocks

Tag description fields support GitBook markdown, including [advanced blocks](https://gitbook.com/docs/creating-content/blocks) like tabs:

{% code title="openapi.yaml" %}

```yaml
---
tags:
  - name: pet
    description: |
      Here is the detail of pets.

      {% tabs %}
      {% tab title="Dog" %}
      Here are the dogs
      {% endtab %}

      {% tab title="Cat" %}
      Here are the cats
      {% endtab %}

      {% tab title="Rabbit" %}
      Here are the rabbits
      {% endtab %}
      {% endtabs %}
```

{% endcode %}

### Highlight schemas

You can highlight a schema in a GitBook description by using GitBook markdown. Here is an example that highlights the “Pet” schema from the “petstore” specification:

{% code title="openapi.yaml" %}

```yaml
---
tags:
  - name: pet
      description: |
          {% openapi-schemas spec="petstore" schemas="Pet" grouped="false" %}
              The Pet object
          {% endopenapi-schemas %}
```

{% endcode %}

### Document a webhook endpoint

GitBook also supports documenting webhook endpoints when using OpenAPI 3.1.

You can define your webhooks directly in your OpenAPI file using the `webhooks` field, which works similarly to `paths` for regular API endpoints:

{% code title="openapi.yaml" %}

```yaml
---
openapi: 3.1.0 # Webhooks are available starting from OpenAPI 3.1

webhooks:
  newPet:
    post:
      summary: New pet event
      description: Information about a new pet in the system
      requestBody:
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/Pet"
      responses:
        "200":
          description: Return a 200 status to indicate that the data was received successfully
```

{% endcode %}


# Extensions reference

You can enhance your OpenAPI specification using extensions—custom fields that start with the `x-` prefix. These extensions let you add extra information and tailor your API documentation to suit different needs.

GitBook allows you to adjust how your API looks and works on your published site through a range of different extensions you can add to your OpenAPI spec.&#x20;

Head to our [guides section](https://gitbook.com/docs/api-references/guides) to learn more about using OpenAPI extensions to configure your documentation.

<details>

<summary><code>x-page-title | x-displayName</code></summary>

Change the display name of a tag used in the navigation and page title.

{% code title="openapi.yaml" %}

```yaml
openapi: '3.0'
info: ...
tags:
  - name: users
    x-page-title: Users
```

{% endcode %}

</details>

<details>

<summary><code>x-page-description</code></summary>

Add a description to the page.

{% code title="openapi.yaml" %}

```yaml
openapi: '3.0'
info: ...
tags:
  - name: "users"
    x-page-title: "Users"
    x-page-description: "Manage user accounts and profiles."
```

{% endcode %}

</details>

<details>

<summary><code>x-page-icon</code></summary>

Add a Font Awesome icon to the page. See available icons [here](https://fontawesome.com/search).

{% code title="openapi.yaml" %}

```yaml
openapi: '3.0'
info: ...
tags:
  - name: "users"
    x-page-title: "Users"
    x-page-description: "Manage user accounts and profiles."
    x-page-icon: "user"
```

{% endcode %}

</details>

<details>

<summary><code>x-parent | parent</code></summary>

Add hierarchy to tags to organize your pages in GitBook.&#x20;

{% code title="openapi.yaml" %}

```yaml
openapi: '3.0'
info: ...
tags:
  - name: organization
  - name: admin
    x-parent: organization
  - name: user
    x-parent: organization
```

{% endcode %}

</details>

<details>

<summary><code>x-hideTryItPanel</code></summary>

Show or hide the “Test it” button for an OpenAPI block.

{% code title="openapi.yaml" %}

```yaml
openapi: '3.0'
info: ...
tags: [...]
paths:
  /example:
    get:
      summary: Example summary
      description: Example description
      operationId: examplePath
      responses: [...]
      parameters: [...]
      x-hideTryItPanel: true
```

{% endcode %}

</details>

<details>

<summary><code>x-codeSamples</code></summary>

Show, hide, or include custom code samples for an OpenAPI block.

#### Fields

<table><thead><tr><th width="103.625">Field Name</th><th width="88.07421875" align="center">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>lang</code></td><td align="center">string</td><td>Code sample language. Value should be one of the following <a href="https://github.com/github/linguist/blob/master/lib/linguist/popular.yml">list</a></td></tr><tr><td><code>label</code></td><td align="center">string</td><td>Code sample label, for example <code>Node</code> or <code>Python2.7</code>, <em>optional</em>, <code>lang</code> is used by default</td></tr><tr><td><code>source</code></td><td align="center">string</td><td>Code sample source code</td></tr></tbody></table>

{% code title="openapi.yaml" %}

```yaml
openapi: '3.0'
info: ...
tags: [...]
paths:
  /example:
    get:
      summary: Example summary
      description: Example description
      operationId: examplePath
      responses: [...]
      parameters: [...]
      x-codeSamples:
        - lang: 'cURL'
          label: 'CLI'
          source: |
            curl -L \
            -H 'Authorization: Bearer <token>' \
            'https://api.gitbook.com/v1/user'
```

{% endcode %}

</details>

<details>

<summary><code>x-enumDescriptions</code></summary>

Add an individual description for each of the `enum` values in your schema.

{% code title="openapi.yaml" %}

```yaml
openapi: '3.0'
info: ...
components:
  schemas:
    project_status:
      type: string
      enum:
        - LIVE
        - PENDING
        - REJECTED
      x-enumDescriptions:
        LIVE: The project is live.
        PENDING: The project is pending approval.
        REJECTED: The project was rejected.
```

{% endcode %}

</details>

<details>

<summary><code>x-internal | x-gitbook-ignore</code></summary>

Hide an endpoint from your API reference.

{% code title="openapi.yaml" %}

```yaml
openapi: '3.0'
info: ...
tags: [...]
paths:
  /example:
    get:
      summary: Example summary
      description: Example description
      operationId: examplePath
      responses: [...]
      parameters: [...]
      x-internal: true
```

{% endcode %}

</details>

<details>

<summary><code>x-stability</code></summary>

Mark endpoints that are unstable or in progress.&#x20;

Supported values: `experimental`, `alpha`, `beta`.

{% code title="openapi.yaml" %}

```yaml
openapi: '3.0'
info: ...
tags: [...]
paths:
  /example:
    get:
      summary: Example summary
      description: Example description
      operationId: examplePath
      x-stability: experimental
```

{% endcode %}

</details>

<details>

<summary><code>deprecated</code></summary>

Mark whether an endpoint is deprecated or not. Deprecated endpoints will give deprecation warnings in your published site.

{% code title="openapi.yaml" %}

```yaml
openapi: '3.0'
info: ...
tags: [...]
paths:
  /example:
    get:
      summary: Example summary
      description: Example description
      operationId: examplePath
      responses: [...]
      parameters: [...]
      deprecated: true
```

{% endcode %}

</details>

<details>

<summary><code>x-deprecated-sunset</code></summary>

Add a sunset date to a deprecated operation.&#x20;

Supported values: **ISO 8601** format (YYYY-MM-DD)

{% code title="openapi.yaml" %}

```yaml
openapi: '3.0'
info: ...
tags: [...]
paths:
  /example:
    get:
      summary: Example summary
      description: Example description
      operationId: examplePath
      responses: [...]
      parameters: [...]
      deprecated: true
      x-deprecated-sunset: 2030-12-05
```

{% endcode %}

</details>

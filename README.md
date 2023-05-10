# openapi-monorepo-demo

This is a monorepo containing a frontend project demonstrating an automated OpenAPI workflow.

Structure:

- Frontend: Consumer of the API, dependant on the mocking server and auto-generated sdk
- Mock: Scripts to run an automated API mocking server, based on [Prism](https://stoplight.io/open-source/prism), dependant on the OpenAPI doc.
- OpenAPI: OpenAPI specification for the API + OpenAPI linting based on [Spectral](https://stoplight.io/open-source/spectral) and a documentation generation based on [Elements](https://stoplight.io/open-source/elements)
- SDK: SDK for the API, generated through [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen) OpenAPI doc.

## Installation

```bash
npm ci
```

## Development

By running the following command, the system will first build the SDK, based on the `/openapi/petstore.yml` OpenAPI document, then, in parallel, start the mock server on port `4010`, the frontend on port `3000` and the OpenAPI documentation website on port `8080`.

```bash
npm run dev
```

## Documentation

Open the documentation on [http://localhost:8080](http://localhost:8080) by running,

```bash
npm run docs
```

## Linting

Lint the OpenAPI document using [Spectral](https://stoplight.io/open-source/spectral) by running the following command, to enforce our chosen OpenAPI style guide.

```bash
npm run lint
```

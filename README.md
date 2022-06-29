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

```bash
npm run dev
```
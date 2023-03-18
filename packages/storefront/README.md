#### Steps to add codegen

1. install dependencies:

```sh
pnpm i graphql
pnpm i -D @babel/core @types/node @graphql-codegen/add @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/import-types-preset
```

2. Add codegen.yml file
3. Add script to package.json

```json
"generate": "graphql-codegen --config codegen.yml"
```

4. Enable introspection in graphql server. e.g. [wordpress wp-graphql](https://www.wpgraphql.com/2021/03/16/getting-started-with-wpgraphql-and-gridsome#content)
5. run script

```sh
pnpm generate
```

#### Defining paths aliases

[see docs](https://kit.svelte.dev/docs/configuration#alias)

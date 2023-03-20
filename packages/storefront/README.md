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

### References

- https://github.dev/imranhsayed/woo-next/tree/master

## UI inspiration

- https://matruecannabis.com/
- https://en.manayerbamate.com/
- https://www.awwwards.com/websites/gsap-animation/
- https://dribbble.com/shots/17388464-Food-order-Website-Design
- https://dribbble.com/shots/17351286-Fruit-Food-Delivery-Landing-Page
- https://dribbble.com/shots/20910366-Food-delivery-Mobile-app
- https://dribbble.com/shots/20300811-Food-delivery-Mobile-app
- https://dribbble.com/shots/19355709-Sushi-Food-App
- https://dribbble.com/shots/20799328-Food-Delivery-App-UI-Animation

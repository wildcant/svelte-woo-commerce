import type { ProductsQuery } from 'src/graphql/schema'

export type Products = NonNullable<ProductsQuery['products']>['nodes']
export type Product = Products[number]
export type Option = { value: string; label: string }

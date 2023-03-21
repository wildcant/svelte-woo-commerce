import type { ProductsQuery } from 'src/graphql/schema'

export type Products = NonNullable<ProductsQuery['products']>['nodes']
export type Product = Products[number]
export type Option = { value: string; label: string }

export type MerchantResponse = {
  data: Data
  meta: Meta
}

type Data = {
  id: number
  name: string
  email: string
  contact_name: string
  phone_number: string
  active: boolean
  logo_url: null
  legal_name: string
  legal_id_type: string
  legal_id: string
  public_key: string
  accepted_currencies: string[]
  fraud_javascript_key: null
  fraud_groups: unknown[]
  accepted_payment_methods: string[]
  payment_methods: PaymentMethod[]
  presigned_acceptance: PresignedAcceptance
}

type PaymentMethod = {
  name: string
  payment_processors: PaymentProcessor[]
}

type PaymentProcessor = {
  name: string
}

export interface PresignedAcceptance {
  acceptance_token: string
  permalink: string
  type: string
}

type Meta = unknown

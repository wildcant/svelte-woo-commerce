import { writable } from 'svelte/store'
import { client } from './graphql-client'
import type { CartQuery } from './graphql/schema'

export const cartQuantity = writable(0)
export const cartIsOpen = writable(false)
export const cart = writable<CartQuery['cart']>()
export const sessionId = writable<string>()

export const refreshCart = () =>
  client
    .Cart()
    .then((response) => {
      cart.set(response.cart)
      cartQuantity.set(
        response.cart?.contents?.nodes?.map((p) => p.quantity).reduce((q, sum) => (sum ?? 0) + (q ?? 0), 0) ?? 0
      )
    })
    .catch(console.error) // TODO: Handle error.

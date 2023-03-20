<script lang="ts">
  import { client } from 'src/graphql-client'
  import type { CartQuery } from 'src/graphql/schema'
  import { refreshCart } from 'src/store'
  export let cartItem: NonNullable<NonNullable<NonNullable<CartQuery['cart']>['contents']>['nodes']>[number]

  let loading = false
  const removeFromCart = () => {
    loading = true
    client
      .RemoveItemFromCart({ input: { keys: [cartItem.key] } })
      .then(() => refreshCart().finally(() => (loading = false)))
      .catch(console.error)
  }
</script>

<li class="flex py-6">
  <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
    <img
      src={cartItem.product?.node.image?.sourceUrl}
      alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
      class="h-full w-full object-cover object-center"
    />
  </div>

  <div class="ml-4 flex flex-1 flex-col">
    <div>
      <div class="flex justify-between text-base font-medium text-gray-900">
        <h3>
          <a href="#">{cartItem.product?.node.name}</a>
        </h3>
        <p class="ml-4">{@html cartItem.total}</p>
      </div>
    </div>
    <div class="flex flex-1 items-end justify-between text-sm">
      <p class="text-gray-500">Qty {cartItem.quantity}</p>

      <div class="flex">
        <button
          type="button"
          class="font-medium text-indigo-600 hover:text-indigo-500 disabled:text-indigo-300 disabled:hover:text-indigo-300"
          class:loading
          on:click={removeFromCart}
          disabled={loading}
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</li>

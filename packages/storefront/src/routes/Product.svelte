<script lang="ts">
  import { client } from 'src/graphql-client'
  import { refreshCart } from 'src/store'
  import type { Product } from '../types'
  export let product: Product

  const uuid = crypto.randomUUID()

  let loading = false
  const addToCart = () => {
    loading = true
    client
      .AddToCart({ input: { productId: product.productId, clientMutationId: uuid } })
      .then(refreshCart)
      .catch(console.error) // TODO: Handle error.
      .finally(() => (loading = false))
  }
</script>

<div>
  <a href="#" class="group">
    <div
      class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
    >
      <img
        src={product.image?.sourceUrl}
        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
        class="h-full w-full object-cover object-center group-hover:opacity-75"
      />
    </div>
    <h3 class="mt-4 text-sm text-gray-700">{product.name}</h3>
  </a>
  <div class="flex flex-row justify-between">
    <p class="mt-1 text-lg font-medium text-gray-900">{@html product.price}</p>
    <button
      type="button"
      class="inline-block rounded bg-neutral-50 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] disabled:hover:bg-neutral-50 disabled:hover:shadow-none"
      class:loading
      on:click={addToCart}
      disabled={loading}
    >
      {loading ? 'Loading...' : 'Add to bag'}
    </button>
  </div>
</div>

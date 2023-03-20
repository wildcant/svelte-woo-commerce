<script lang="ts">
  import { refreshCart } from 'src/store'
  import { onMount } from 'svelte'
  import Products from './Products.svelte'

  export let data
  const products = data?.products?.nodes
  onMount(refreshCart)
</script>

{#if products}
  <Products {products} />
{/if}

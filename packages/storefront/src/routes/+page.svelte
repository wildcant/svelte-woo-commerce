<script lang="ts">
  import Products from './Products.svelte'

  export let data
  const products = data?.products?.nodes
</script>

{#if products}
  <Products {products} />
{/if}

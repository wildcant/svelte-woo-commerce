<script>
  import '../app.css'
  import Cart from './Cart.svelte'
  import Header from './Header.svelte'
</script>

<main>
  <Header />
  <Cart />
  <slot />
</main>

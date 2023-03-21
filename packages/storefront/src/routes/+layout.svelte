<script lang="ts">
  import { refreshCart, sessionId } from 'src/store'
  import { onMount } from 'svelte'
  import '../app.css'
  import Cart from './Cart.svelte'
  import Header from './Header.svelte'

  onMount(() => {
    refreshCart()
    window.$wompi.initialize((data, error) => {
      if (error || !data?.sessionId) return // TODO: Handle Error
      sessionId.set(data.sessionId)
    })
  })
</script>

<main>
  <Header />
  <Cart />
  <slot />
</main>

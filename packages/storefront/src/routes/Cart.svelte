<script lang="ts">
  import { cart, cartIsOpen } from 'src/store'
  import { fade } from 'svelte/transition'
  import CartItem from './CartItem.svelte'
  import { horizontalSlide } from './transitions'

  $: cartItems = $cart?.contents?.nodes
    .filter(Boolean)
    .filter((cartItem) => cartItem.product?.node !== undefined)

  const closeCart = () => cartIsOpen.set(false)
</script>

{#if $cartIsOpen && cartItems}
  <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      transition:fade={{ duration: 300 }}
    />

    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div
            class="pointer-events-auto w-screen max-w-md"
            transition:horizontalSlide={{ axis: 'x', duration: 500 }}
          >
            <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <div class="flex items-start justify-between">
                  <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                  <div class="ml-3 flex h-7 items-center">
                    <button
                      type="button"
                      class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                      on:click={closeCart}
                    >
                      <span class="sr-only">Close panel</span>
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="mt-8">
                  <div class="flow-root">
                    <ul class="-my-6 divide-y divide-gray-200">
                      {#each cartItems as cartItem (cartItem.key)}
                        <CartItem {cartItem} />
                      {/each}
                    </ul>
                  </div>
                </div>
              </div>

              <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div class="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>$262.00</p>
                </div>
                <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div class="mt-6">
                  <a
                    href="/checkout"
                    class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    on:click={closeCart}>Checkout</a
                  >
                </div>
                <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or
                    <button
                      type="button"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                      on:click={closeCart}
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

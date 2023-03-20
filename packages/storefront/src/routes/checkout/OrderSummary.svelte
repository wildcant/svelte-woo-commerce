<script lang="ts">
  import { cart } from 'src/store'

  $: cartItems = $cart?.contents?.nodes
    .filter(Boolean)
    .filter((cartItem) => cartItem.product?.node !== undefined)
</script>

<section class={$$props.class}>
  {#if cartItems}
    <div class="bg-white mt-8 py-4 rounded-lg border">
      <h3 class="px-6">Order Summary</h3>

      <ul>
        {#each cartItems as cartItem (cartItem.key)}
          <li class="border-b">
            <div class="flex p-6">
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
              </div>
            </div>
          </li>
        {/each}
      </ul>

      <ul class="px-6 pt-4">
        <li class="row">
          <span class="text-gray-600 text-sm">Subtotal</span>
          <span class="text-gray-600 text-sm">{@html $cart?.subtotal}</span>
        </li>
        <li class="row">
          <span class="text-gray-600 text-sm">Shipping</span>
          <span class="text-gray-600 text-sm">{@html $cart?.shippingTotal}</span>
        </li>
        <li class="row border-b">
          <span class="text-gray-600 text-sm">Taxes</span>
          <span class="text-gray-600 text-sm">{@html $cart?.totalTax}</span>
        </li>
        <li class="row">
          <span>Total</span>
          <span>{@html $cart?.total}</span>
        </li>
      </ul>
    </div>
  {/if}
</section>

<style lang="postcss">
  .row {
    @apply flex justify-between py-2;
  }
</style>

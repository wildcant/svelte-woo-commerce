<script>
  import { fade } from 'svelte/transition'
  import { horizontalSlide } from './transitions'
  import { cartIsOpen, cartQuantity } from 'src/store'

  let visible = false
  const openMenu = () => (visible = true)
  const closeMenu = () => (visible = false)
</script>

<div class="bg-white">
  <!-- Mobile Menu -->
  {#if visible}
    <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-black bg-opacity-25" transition:fade={{ duration: 300 }} />

      <div class="fixed inset-0 z-40 flex">
        <div
          class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
          transition:horizontalSlide={{ axis: 'x', duration: 300 }}
        >
          <div class="flex px-4 pt-5 pb-2">
            <button
              type="button"
              class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              on:click={closeMenu}
            >
              <span class="sr-only">Close menu</span>
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

          <div class="space-y-6 border-t border-gray-200 py-6 px-4">
            <div class="flow-root">
              <a href="/" class="-m-2 block p-2 font-medium text-gray-900">Company</a>
            </div>
          </div>

          <div class="space-y-6 border-t border-gray-200 py-6 px-4">
            <div class="flow-root">
              <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
            </div>
            <div class="flow-root">
              <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Create account</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}

  <header class="relative bg-white border-b">
    <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="border-gray-200">
        <div class="flex h-16 items-center">
          <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
          <button type="button" class="rounded-md bg-white p-2 text-gray-400 lg:hidden" on:click={openMenu}>
            <span class="sr-only">Open menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <!-- Logo -->
          <div class="ml-4 flex lg:ml-0">
            <a href="/">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>

          <!-- Flyout menus -->
          <div class="hidden lg:ml-8 lg:block lg:self-stretch">
            <div class="flex h-full space-x-8">
              <a href="/" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                >Products</a
              >
            </div>
          </div>

          <div class="ml-auto flex items-center">
            <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
              <span class="h-6 w-px bg-gray-200" aria-hidden="true" />
              <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</a>
            </div>

            <!-- Cart -->
            <div class="ml-4 flow-root lg:ml-6">
              <button class="group -m-2 flex items-center p-2" on:click={() => cartIsOpen.set(true)}>
                <svg
                  class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                  >{$cartQuantity}</span
                >
                <span class="sr-only">items in cart, view bag</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</div>

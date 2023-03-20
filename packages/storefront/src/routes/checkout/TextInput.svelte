<script lang="ts">
  export let id: string
  export let name = id
  export let value = ''
  export let label = ''
</script>

<div class="my-2">
  {#if label}
    <label for={id} class="block text-sm font-medium leading-6 text-gray-500">{label}</label>
  {/if}
  <div class="relative mt-1 rounded-md shadow-sm">
    <input
      {id}
      {name}
      class="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      type="text"
      bind:value
      on:input
    />
  </div>
</div>

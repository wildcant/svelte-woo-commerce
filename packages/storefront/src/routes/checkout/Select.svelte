<script lang="ts">
  import type { Option } from 'src/types'

  export let id: string
  export let name = id
  export let value = ''
  export let label = ''
  export let options: Option[]
</script>

<div class="my-2">
  {#if label}
    <label for={id} class="block text-sm font-medium leading-6 text-gray-500">{label}</label>
  {/if}
  <div class="relative mt-1 rounded-md shadow-sm">
    <select
      {id}
      {name}
      bind:value
      class="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    >
      {#each options as option}
        <option value={option.value}>
          {option.label}
        </option>
      {/each}
    </select>
  </div>
</div>

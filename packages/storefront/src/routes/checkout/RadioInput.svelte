<script lang="ts">
  import type { Option } from 'src/types'

  export let name: string
  export let options: Option[]
  export let group: string
</script>

<div class="my-2">
  {#each options as option}
    <div class="flex items-center" class:mb-4={option.value !== options[options.length - 1].value}>
      <input
        id={option.value}
        bind:group
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2"
        {name}
        type="radio"
        value={option.value}
      />
      <label for={option.value} class="ml-2 text-sm font-medium text-gray-900">{option.label}</label>
    </div>
  {/each}
</div>

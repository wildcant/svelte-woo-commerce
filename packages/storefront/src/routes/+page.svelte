<script lang="ts">
  import Button from 'src/components/Button.svelte'
  export let data
</script>

<div>Hello there</div>

{#if data}
  <pre>{JSON.stringify(data, null, 2)}</pre>
  <div>{data.posts?.nodes[0].slug}</div>
{/if}

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<Button />

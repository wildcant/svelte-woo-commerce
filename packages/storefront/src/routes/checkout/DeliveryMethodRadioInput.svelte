<script lang="ts">
  export let group: string
</script>

<ul class="grid w-full gap-6 md:grid-cols-2">
  <li>
    <input
      bind:group
      class="hidden peer"
      id="delivery-method-standard"
      name="deliveryMethod"
      type="radio"
      value="standard"
    />
    <label
      for="delivery-method-standard"
      class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
    >
      <div class="block">
        <div class="w-full text-lg font-semibold">Standard</div>
        <div class="w-full">4-10 business days</div>
      </div>
    </label>
  </li>
  <li>
    <input
      bind:group
      class="hidden peer"
      id="delivery-method-express"
      name="deliveryMethod"
      type="radio"
      value="express"
    />
    <label
      for="delivery-method-express"
      class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
    >
      <div class="block">
        <div class="w-full text-lg font-semibold">Express</div>
        <div class="w-full">2-5 business days</div>
      </div>
    </label>
  </li>
</ul>

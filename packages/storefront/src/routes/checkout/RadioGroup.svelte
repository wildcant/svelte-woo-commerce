<h3 class="mb-5 text-lg font-medium text-gray-900">How much do you expect to use each month?</h3>
<ul class="grid w-full gap-6 md:grid-cols-2">
  <li>
    <input
      type="radio"
      id="hosting-small"
      name="hosting"
      value="hosting-small"
      class="hidden peer"
      required
    />
    <label
      for="hosting-small"
      class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
    >
      <div class="block">
        <div class="w-full text-lg font-semibold">0-50 MB</div>
        <div class="w-full">Good for small websites</div>
      </div>
      <svg
        aria-hidden="true"
        class="w-6 h-6 ml-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        /></svg
      >
    </label>
  </li>
  <li>
    <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer" />
    <label
      for="hosting-big"
      class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
    >
      <div class="block">
        <div class="w-full text-lg font-semibold">500-1000 MB</div>
        <div class="w-full">Good for large websites</div>
      </div>
      <svg
        aria-hidden="true"
        class="w-6 h-6 ml-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        /></svg
      >
    </label>
  </li>
</ul>

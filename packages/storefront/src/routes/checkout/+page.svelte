<script lang="ts">
  import { client } from 'src/graphql-client'
  import { CountriesEnum, type CustomerAddressInput } from 'src/graphql/schema'
  import type { Option } from 'src/types'
  import DeliveryMethodRadioInput from './DeliveryMethodRadioInput.svelte'
  import OrderSummary from './OrderSummary.svelte'
  import RadioInput from './RadioInput.svelte'
  import Select from './Select.svelte'
  import TextInput from './TextInput.svelte'

  const countries: Option[] = Object.keys(CountriesEnum).map((key) => ({
    value: CountriesEnum[key as keyof typeof CountriesEnum],
    label: key,
  }))

  let paymentOptions: Option[] = [
    { value: 'credit-card', label: 'Credit Card' },
    { value: 'nequi', label: 'Nequi' },
    { value: 'wompi', label: 'Wompi' },
  ]

  let email = 'joe@mail.com'
  let firstName = 'joe'
  let lastName = 'dow'
  let company = 'joe studios'
  let address1 = '1234 Main'
  let address2 = ''
  let city = 'Santa Marta'
  let country = CountriesEnum.Co
  let state = 'Magdalena'
  let postcode = '470006'
  let phone = '5730083667'
  let deliveryMethod = 'standard'
  let paymentMethod = 'wompi'

  const uuid = crypto.randomUUID()

  const checkout = () => {
    const customerAddressInput: CustomerAddressInput = {
      firstName,
      lastName,
      address1,
      address2,
      city,
      country,
      state,
      postcode,
      email,
      phone,
      company,
    }

    client
      .Checkout({
        input: {
          clientMutationId: uuid,
          shipping: customerAddressInput,
          billing: customerAddressInput,
          shipToDifferentAddress: false,
          paymentMethod,
          isPaid: false,
        },
      })
      .then(console.log)
      .catch(console.error)
  }
</script>

<div class="bg-slate-50">
  <div class="mx-auto max-w-2xl py-6 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-2">
    <form on:submit|preventDefault={checkout} class="flex flex-col md:flex-row">
      <div class="md:flex-1 md:pr-10">
        <div class="checkout-section">
          <h3>Contact Information</h3>
          <TextInput id="email" label="Email Address" bind:value={email} />
        </div>

        <div class="checkout-section">
          <h3>Shipping Information</h3>
          <TextInput id="firstName" label="First Name" bind:value={firstName} />
          <TextInput id="lastName" label="Last Name" bind:value={lastName} />
          <TextInput id="company" label="Company" bind:value={company} />
          <TextInput id="address1" label="Address" bind:value={address1} />
          <TextInput id="address2" label="Apartment, suite, etc." bind:value={address2} />
          <TextInput id="city" label="City" bind:value={city} />
          <Select id="country" label="Country" bind:value={country} options={countries} />
          <TextInput id="state" label="State / Province" bind:value={state} />
          <TextInput id="postcode" label="Postal Code" bind:value={postcode} />
          <TextInput id="phone" label="Phone" bind:value={phone} />
        </div>

        <div class="checkout-section">
          <h3>Delivery Method</h3>
          <DeliveryMethodRadioInput bind:group={deliveryMethod} />
        </div>

        <div class="mt-6 pb-5">
          <h3>Payment</h3>
          <RadioInput name="paymentMethod" bind:group={paymentMethod} options={paymentOptions} />
        </div>
      </div>

      <div class="md:w-[40%]">
        <OrderSummary />

        <div class="mt-4 w-full flex justify-center">
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full md:w-auto"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </form>
  </div>
</div>

<style lang="postcss">
  .checkout-section {
    @apply border-b mt-6 pb-5;
  }
</style>

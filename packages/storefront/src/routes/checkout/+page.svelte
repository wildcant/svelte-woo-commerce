<script lang="ts">
  import { PUBLIC_WOMPI_API_KEY, PUBLIC_WOMPI_API_URL } from '$env/static/public'
  import { client } from 'src/graphql-client'
  import { CountriesEnum, type CustomerAddressInput } from 'src/graphql/schema'
  import { cart, sessionId } from 'src/store'
  import type { MerchantResponse, Option } from 'src/types'
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

  /** Extracts and returns float value from a string. */
  export const getFloatVal = (str?: string | null) => {
    if (!str) return null
    let floatValue = str.match(/[+-]?\d+(\.\d+)?/g)?.[0]
    // TODO: Check woocommerce API and fix decimal numbers.
    return floatValue ? parseFloat(floatValue.replace('.', '')) : null
  }

  /** The wompi acceptance_token is required in order to make a transaction. */
  const fetchAcceptanceToken = async () =>
    fetch(`${PUBLIC_WOMPI_API_URL}/merchants/${PUBLIC_WOMPI_API_KEY}`)
      .then((res) => res.json())
      .then((merchantResponse: MerchantResponse) => merchantResponse.data.presigned_acceptance.acceptance_token)
      .catch(console.error) // TODO: Handle error.

  /** Format data to create a new wompi transaction. */
  const buildTransaction = async (amount: number, reference: string) => ({
    sessionId: $sessionId,
    acceptance_token: await fetchAcceptanceToken(),
    amount_in_cents: amount * 100,
    currency: 'COP',
    customer_email: email,
    reference,
    // TODO: Wire with payment method input.
    payment_method: {
      type: 'NEQUI',
      phone_number: '3991111111',
    },
  })

  const buildCustomerAddress = (): CustomerAddressInput => ({
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
  })

  const checkout = async () => {
    const amount = getFloatVal($cart?.total)
    if (!amount) return // TODO: Handle error.

    const customerAddressInput = buildCustomerAddress()
    let reference
    try {
      const response = await client.Checkout({
        input: {
          clientMutationId: uuid,
          shipping: customerAddressInput,
          billing: customerAddressInput,
          shipToDifferentAddress: false,
          paymentMethod,
          isPaid: false,
        },
      })
      reference = response.checkout?.order?.orderNumber
      if (!reference) {
        throw new Error('Missing order number from checkout.')
      }
    } catch (error) {
      console.error(error) // TODO: Handle Error
      return
    }

    let transaction
    try {
      transaction = await buildTransaction(amount, reference)
    } catch (error) {
      console.error(error)
      // TODO: Handle error.
      return
    }

    try {
      const requestResponse = await fetch(`${PUBLIC_WOMPI_API_URL}/transactions`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${PUBLIC_WOMPI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
      })
      const transactionResponse = requestResponse.json()
    } catch (error) {
      console.error(error)
      // TODO: Handle error.
      return
    }
  }

  // TODO: update woocommerce status based on wompi transaction status (we might need to poll wompi endpoint, see docs https://docs.wompi.co/en/docs/colombia/metodos-de-pago)
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

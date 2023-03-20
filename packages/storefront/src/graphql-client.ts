import { GraphQLClient } from 'graphql-request'
import { browser } from '$app/environment'
import { PUBLIC_API_URL } from '$env/static/public'
import { getSdk } from './graphql/sdk'

let graphqlClient: GraphQLClient | undefined = undefined

const HEADER_SESSION_KEY = 'woocommerce-session'

if (!graphqlClient) {
  graphqlClient = new GraphQLClient(PUBLIC_API_URL, {
    // Handle WooCommerce Session JWT. It allows WooCommerce keep track of the current user session.
    responseMiddleware: (response) => {
      // Check we are on the client.
      if (!browser) return
      // Check response is not an error.
      if (response instanceof Error) return
      // Check for session header and update session in local storage accordingly.
      const session = response.headers.get(HEADER_SESSION_KEY)
      if (!session) return
      // Remove session data if session destroyed.
      if (session === 'false') {
        localStorage.removeItem(HEADER_SESSION_KEY)
        return
      }
      // If the session changed in the server, the update local storage.
      if (localStorage.getItem(HEADER_SESSION_KEY) !== session) {
        localStorage.setItem(HEADER_SESSION_KEY, session)
      }
    },
    requestMiddleware: (request) => {
      if (!browser) return request
      // If session data exist in local storage, set its value as session header.
      const session = localStorage.getItem(HEADER_SESSION_KEY)
      if (session) request.headers = { ...request.headers, [HEADER_SESSION_KEY]: `Session ${session}` }
      return request
    },
  })
}

export const client = getSdk(graphqlClient)

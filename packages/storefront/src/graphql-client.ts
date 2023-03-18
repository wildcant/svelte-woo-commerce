import {GraphQLClient} from 'graphql-request'
import {PUBLIC_API_URL} from '$env/static/public'
import {getSdk} from './graphql/sdk'

let graphqlClient: GraphQLClient | undefined = undefined

if (!graphqlClient) {
  graphqlClient = new GraphQLClient(PUBLIC_API_URL, {headers: {}})
}

export const client = getSdk(graphqlClient)

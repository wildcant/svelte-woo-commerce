import {client} from 'src/graphql-client'

export const load = () => client.Posts()

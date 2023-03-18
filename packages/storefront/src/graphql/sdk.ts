/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* eslint-disable */

import type * as Types from './schema';

import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/src/types.dom';
import gql from 'graphql-tag';

export const PostsDocument = gql`
    query Posts {
  posts {
    nodes {
      author {
        node {
          id
          firstName
          email
        }
      }
      date
      id
      excerpt
      slug
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Posts(variables?: Types.PostsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.PostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.PostsQuery>(PostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Posts', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
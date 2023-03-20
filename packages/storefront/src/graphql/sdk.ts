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
export const ProductFragmentFragmentDoc = gql`
    fragment ProductFragment on Product {
  __typename
  id
  productId: databaseId
  title
  name
  image {
    sourceUrl
  }
}
    `;
export const AddToCartDocument = gql`
    mutation AddToCart($input: AddToCartInput!) {
  addToCart(input: $input) {
    cartItem {
      key
      product {
        node {
          id
          productId: databaseId
          name
          description
          type
          onSale
          slug
          averageRating
          reviewCount
          image {
            id
            sourceUrl
            altText
          }
          galleryImages {
            nodes {
              id
              sourceUrl
              altText
            }
          }
        }
      }
      variation {
        node {
          id
          variationId: databaseId
          name
          description
          type
          onSale
          price
          regularPrice
          salePrice
          image {
            id
            sourceUrl
            altText
          }
        }
        attributes {
          id
          attributeId
          name
          value
        }
      }
      quantity
      total
      subtotal
      subtotalTax
    }
  }
}
    `;
export const CheckoutDocument = gql`
    mutation Checkout($input: CheckoutInput!) {
  checkout(input: $input) {
    clientMutationId
    order {
      id
      orderKey
      orderNumber
      status
      refunds {
        nodes {
          amount
        }
      }
    }
    result
    redirect
  }
}
    `;
export const RemoveItemFromCartDocument = gql`
    mutation RemoveItemFromCart($input: RemoveItemsFromCartInput!) {
  removeItemsFromCart(input: $input) {
    cartItems {
      quantity
    }
  }
}
    `;
export const CartDocument = gql`
    query Cart {
  cart {
    contents {
      nodes {
        key
        product {
          node {
            id
            productId: databaseId
            name
            description
            type
            onSale
            slug
            averageRating
            reviewCount
            image {
              id
              sourceUrl
              srcSet
              altText
              title
            }
            galleryImages {
              nodes {
                id
                sourceUrl
                srcSet
                altText
                title
              }
            }
          }
        }
        variation {
          node {
            id
            variationId: databaseId
            name
            description
            type
            onSale
            price
            regularPrice
            salePrice
            image {
              id
              sourceUrl
              srcSet
              altText
              title
            }
          }
          attributes {
            id
            name
            value
          }
        }
        quantity
        total
        subtotal
        subtotalTax
      }
    }
    appliedCoupons {
      code
      discountAmount
      discountTax
    }
    subtotal
    subtotalTax
    shippingTax
    shippingTotal
    total
    totalTax
    feeTax
    feeTotal
    discountTax
    discountTotal
  }
}
    `;
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
export const ProductsDocument = gql`
    query Products {
  products {
    nodes {
      ... on SimpleProduct {
        price
        ...ProductFragment
      }
      ... on ExternalProduct {
        price
        ...ProductFragment
      }
      ... on GroupProduct {
        price
        ...ProductFragment
      }
      ... on VariableProduct {
        price
        ...ProductFragment
      }
    }
  }
}
    ${ProductFragmentFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AddToCart(variables: Types.AddToCartMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.AddToCartMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.AddToCartMutation>(AddToCartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddToCart', 'mutation');
    },
    Checkout(variables: Types.CheckoutMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.CheckoutMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CheckoutMutation>(CheckoutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Checkout', 'mutation');
    },
    RemoveItemFromCart(variables: Types.RemoveItemFromCartMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.RemoveItemFromCartMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.RemoveItemFromCartMutation>(RemoveItemFromCartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RemoveItemFromCart', 'mutation');
    },
    Cart(variables?: Types.CartQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.CartQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CartQuery>(CartDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Cart', 'query');
    },
    Posts(variables?: Types.PostsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.PostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.PostsQuery>(PostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Posts', 'query');
    },
    Products(variables?: Types.ProductsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Types.ProductsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.ProductsQuery>(ProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Products', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
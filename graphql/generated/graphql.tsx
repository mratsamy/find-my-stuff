import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: any;
};

export type Container = {
  __typename?: 'Container';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  shelves?: Maybe<Array<Maybe<Shelf>>>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ContainerResponse = {
  __typename?: 'ContainerResponse';
  container?: Maybe<Container>;
  query?: Maybe<Query>;
};

export type ContainersResponse = {
  __typename?: 'ContainersResponse';
  containers: Array<Maybe<Container>>;
  query?: Maybe<Query>;
};

export type Item = {
  __typename?: 'Item';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  expiry: Scalars['DateTime'];
  id: Scalars['ID'];
  quantity: Scalars['NonNegativeInt'];
  shelf?: Maybe<Shelf>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ItemResponse = {
  __typename?: 'ItemResponse';
  item?: Maybe<Item>;
  query?: Maybe<Query>;
};

export type ItemsResponse = {
  __typename?: 'ItemsResponse';
  items: Array<Maybe<Item>>;
  query?: Maybe<Query>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addContainer?: Maybe<ContainerResponse>;
  addItem?: Maybe<ItemResponse>;
  addShelf?: Maybe<ShelfResponse>;
  updateContainer?: Maybe<ContainerResponse>;
  updateItem?: Maybe<ItemResponse>;
  updateShelf?: Maybe<ShelfResponse>;
};


export type MutationAddContainerArgs = {
  input?: InputMaybe<NewContainerInput>;
};


export type MutationAddItemArgs = {
  input: NewItemInput;
};


export type MutationAddShelfArgs = {
  input?: InputMaybe<NewShelfInput>;
};


export type MutationUpdateContainerArgs = {
  input?: InputMaybe<UpdateContainerInput>;
};


export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};


export type MutationUpdateShelfArgs = {
  input?: InputMaybe<UpdateShelfInput>;
};

export type NewContainerInput = {
  description?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type NewItemInput = {
  description?: InputMaybe<Scalars['String']>;
  expiry: Scalars['DateTime'];
  quantity: Scalars['NonNegativeInt'];
  shelfId?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type NewShelfInput = {
  containerId?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  containers?: Maybe<ContainersResponse>;
  getContainer?: Maybe<ContainerResponse>;
  getItem?: Maybe<ItemResponse>;
  getShelf?: Maybe<ShelfResponse>;
  items?: Maybe<ItemsResponse>;
  shelves?: Maybe<ShelvesResponse>;
};


export type QueryGetContainerArgs = {
  id: Scalars['ID'];
};


export type QueryGetItemArgs = {
  id: Scalars['ID'];
};


export type QueryGetShelfArgs = {
  id: Scalars['ID'];
};

export type Shelf = {
  __typename?: 'Shelf';
  container?: Maybe<Container>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  items: Array<Maybe<Item>>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ShelfResponse = {
  __typename?: 'ShelfResponse';
  query?: Maybe<Query>;
  shelf?: Maybe<Shelf>;
};

export type ShelvesResponse = {
  __typename?: 'ShelvesResponse';
  query?: Maybe<Query>;
  shelves: Array<Maybe<Shelf>>;
};

export type UpdateContainerInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateItemInput = {
  description?: InputMaybe<Scalars['String']>;
  expiry?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  quantity?: InputMaybe<Scalars['NonNegativeInt']>;
  shelfId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateShelfInput = {
  containerId?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};

export type GetAllContainersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllContainersQuery = { __typename?: 'Query', containers?: { __typename?: 'ContainersResponse', containers: Array<{ __typename?: 'Container', id: string, title: string, description?: string | null | undefined, shelves?: Array<{ __typename?: 'Shelf', id: string } | null | undefined> | null | undefined } | null | undefined> } | null | undefined };

export type GetAllItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllItemsQuery = { __typename?: 'Query', items?: { __typename?: 'ItemsResponse', items: Array<{ __typename?: 'Item', id: string, title: string, description?: string | null | undefined, quantity: any, expiry: any } | null | undefined> } | null | undefined };

export type GetItemByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetItemByIdQuery = { __typename?: 'Query', getItem?: { __typename?: 'ItemResponse', item?: { __typename?: 'Item', id: string, title: string, description?: string | null | undefined, quantity: any, expiry: any } | null | undefined } | null | undefined };


export const GetAllContainersDocument = gql`
    query getAllContainers {
  containers {
    containers {
      id
      title
      description
      shelves {
        id
      }
    }
  }
}
    `;

/**
 * __useGetAllContainersQuery__
 *
 * To run a query within a React component, call `useGetAllContainersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllContainersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllContainersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllContainersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllContainersQuery, GetAllContainersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllContainersQuery, GetAllContainersQueryVariables>(GetAllContainersDocument, options);
      }
export function useGetAllContainersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllContainersQuery, GetAllContainersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllContainersQuery, GetAllContainersQueryVariables>(GetAllContainersDocument, options);
        }
export type GetAllContainersQueryHookResult = ReturnType<typeof useGetAllContainersQuery>;
export type GetAllContainersLazyQueryHookResult = ReturnType<typeof useGetAllContainersLazyQuery>;
export type GetAllContainersQueryResult = Apollo.QueryResult<GetAllContainersQuery, GetAllContainersQueryVariables>;
export const GetAllItemsDocument = gql`
    query getAllItems {
  items {
    items {
      id
      title
      description
      quantity
      expiry
    }
  }
}
    `;

/**
 * __useGetAllItemsQuery__
 *
 * To run a query within a React component, call `useGetAllItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllItemsQuery, GetAllItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllItemsQuery, GetAllItemsQueryVariables>(GetAllItemsDocument, options);
      }
export function useGetAllItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllItemsQuery, GetAllItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllItemsQuery, GetAllItemsQueryVariables>(GetAllItemsDocument, options);
        }
export type GetAllItemsQueryHookResult = ReturnType<typeof useGetAllItemsQuery>;
export type GetAllItemsLazyQueryHookResult = ReturnType<typeof useGetAllItemsLazyQuery>;
export type GetAllItemsQueryResult = Apollo.QueryResult<GetAllItemsQuery, GetAllItemsQueryVariables>;
export const GetItemByIdDocument = gql`
    query getItemById($id: ID!) {
  getItem(id: $id) {
    item {
      id
      title
      description
      quantity
      expiry
    }
  }
}
    `;

/**
 * __useGetItemByIdQuery__
 *
 * To run a query within a React component, call `useGetItemByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetItemByIdQuery(baseOptions: Apollo.QueryHookOptions<GetItemByIdQuery, GetItemByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetItemByIdQuery, GetItemByIdQueryVariables>(GetItemByIdDocument, options);
      }
export function useGetItemByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItemByIdQuery, GetItemByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetItemByIdQuery, GetItemByIdQueryVariables>(GetItemByIdDocument, options);
        }
export type GetItemByIdQueryHookResult = ReturnType<typeof useGetItemByIdQuery>;
export type GetItemByIdLazyQueryHookResult = ReturnType<typeof useGetItemByIdLazyQuery>;
export type GetItemByIdQueryResult = Apollo.QueryResult<GetItemByIdQuery, GetItemByIdQueryVariables>;
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
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
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
  shelves: Array<Maybe<Shelf>>;
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
  expiry: Scalars['Date'];
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
  deleteContainer?: Maybe<ContainerResponse>;
  deleteItem?: Maybe<ItemResponse>;
  deleteShelf?: Maybe<ShelfResponse>;
  updateContainer?: Maybe<ContainerResponse>;
  updateItem?: Maybe<ItemResponse>;
  updateShelf?: Maybe<ShelfResponse>;
};


export type MutationAddContainerArgs = {
  input: NewContainerInput;
};


export type MutationAddItemArgs = {
  input: NewItemInput;
};


export type MutationAddShelfArgs = {
  input: NewShelfInput;
};


export type MutationDeleteContainerArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteShelfArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateContainerArgs = {
  input: UpdateContainerInput;
};


export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};


export type MutationUpdateShelfArgs = {
  input: UpdateShelfInput;
};

export type NewContainerInput = {
  description?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type NewItemInput = {
  description?: InputMaybe<Scalars['String']>;
  expiry: Scalars['Date'];
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
  expiry?: InputMaybe<Scalars['Date']>;
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

export type AddContainerMutationVariables = Exact<{
  input: NewContainerInput;
}>;


export type AddContainerMutation = { __typename?: 'Mutation', addContainer?: { __typename?: 'ContainerResponse', container?: { __typename?: 'Container', id: string, title: string, shelves: Array<{ __typename?: 'Shelf', id: string } | null | undefined> } | null | undefined } | null | undefined };

export type DeleteContainerMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteContainerMutation = { __typename?: 'Mutation', deleteContainer?: { __typename?: 'ContainerResponse', container?: { __typename?: 'Container', id: string, title: string } | null | undefined } | null | undefined };

export type GetAllContainersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllContainersQuery = { __typename?: 'Query', containers?: { __typename?: 'ContainersResponse', containers: Array<{ __typename?: 'Container', id: string, title: string, shelves: Array<{ __typename?: 'Shelf', id: string } | null | undefined> } | null | undefined> } | null | undefined };

export type GetContainerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetContainerQuery = { __typename?: 'Query', getContainer?: { __typename?: 'ContainerResponse', container?: { __typename?: 'Container', id: string, title: string, description?: string | null | undefined, createdAt: any, updatedAt: any, shelves: Array<{ __typename?: 'Shelf', id: string, title: string } | null | undefined> } | null | undefined } | null | undefined };

export type GetContainerEditableQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetContainerEditableQuery = { __typename?: 'Query', getContainer?: { __typename?: 'ContainerResponse', container?: { __typename?: 'Container', id: string, title: string, description?: string | null | undefined } | null | undefined } | null | undefined };

export type UpdateContainerMutationVariables = Exact<{
  input: UpdateContainerInput;
}>;


export type UpdateContainerMutation = { __typename?: 'Mutation', updateContainer?: { __typename?: 'ContainerResponse', container?: { __typename?: 'Container', id: string, title: string } | null | undefined } | null | undefined };

export type AddItemMutationVariables = Exact<{
  input: NewItemInput;
}>;


export type AddItemMutation = { __typename?: 'Mutation', addItem?: { __typename?: 'ItemResponse', item?: { __typename?: 'Item', id: string, title: string } | null | undefined } | null | undefined };

export type DeleteItemMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteItemMutation = { __typename?: 'Mutation', deleteItem?: { __typename?: 'ItemResponse', item?: { __typename?: 'Item', id: string, title: string } | null | undefined } | null | undefined };

export type GetAllItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllItemsQuery = { __typename?: 'Query', items?: { __typename?: 'ItemsResponse', items: Array<{ __typename?: 'Item', id: string, title: string, quantity: any, expiry: any, shelf?: { __typename?: 'Shelf', id: string, title: string, container?: { __typename?: 'Container', id: string, title: string } | null | undefined } | null | undefined } | null | undefined> } | null | undefined };

export type GetItemQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetItemQuery = { __typename?: 'Query', getItem?: { __typename?: 'ItemResponse', item?: { __typename?: 'Item', id: string, title: string, description?: string | null | undefined, quantity: any, expiry: any, createdAt: any, updatedAt: any } | null | undefined } | null | undefined };

export type GetItemEditableQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetItemEditableQuery = { __typename?: 'Query', getItem?: { __typename?: 'ItemResponse', item?: { __typename?: 'Item', id: string, title: string, description?: string | null | undefined, quantity: any, expiry: any } | null | undefined } | null | undefined };

export type UpdateItemMutationVariables = Exact<{
  input: UpdateItemInput;
}>;


export type UpdateItemMutation = { __typename?: 'Mutation', updateItem?: { __typename?: 'ItemResponse', item?: { __typename?: 'Item', id: string, title: string } | null | undefined } | null | undefined };

export type AddShelfMutationVariables = Exact<{
  input: NewShelfInput;
}>;


export type AddShelfMutation = { __typename?: 'Mutation', addShelf?: { __typename?: 'ShelfResponse', shelf?: { __typename?: 'Shelf', id: string, title: string } | null | undefined } | null | undefined };

export type DeleteShelfMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteShelfMutation = { __typename?: 'Mutation', deleteShelf?: { __typename?: 'ShelfResponse', shelf?: { __typename?: 'Shelf', id: string, title: string } | null | undefined } | null | undefined };

export type GetAllShelvesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllShelvesQuery = { __typename?: 'Query', shelves?: { __typename?: 'ShelvesResponse', shelves: Array<{ __typename?: 'Shelf', id: string, title: string, container?: { __typename?: 'Container', id: string, title: string } | null | undefined, items: Array<{ __typename?: 'Item', id: string } | null | undefined> } | null | undefined> } | null | undefined };

export type GetShelfQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetShelfQuery = { __typename?: 'Query', getShelf?: { __typename?: 'ShelfResponse', shelf?: { __typename?: 'Shelf', id: string, title: string, description?: string | null | undefined, createdAt: any, updatedAt: any, items: Array<{ __typename?: 'Item', id: string, title: string } | null | undefined> } | null | undefined } | null | undefined };

export type GetShelfEditableQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetShelfEditableQuery = { __typename?: 'Query', getShelf?: { __typename?: 'ShelfResponse', shelf?: { __typename?: 'Shelf', id: string, title: string, description?: string | null | undefined } | null | undefined } | null | undefined };

export type UpdateShelfMutationVariables = Exact<{
  input: UpdateShelfInput;
}>;


export type UpdateShelfMutation = { __typename?: 'Mutation', updateShelf?: { __typename?: 'ShelfResponse', shelf?: { __typename?: 'Shelf', id: string, title: string } | null | undefined } | null | undefined };


export const AddContainerDocument = gql`
    mutation addContainer($input: NewContainerInput!) {
  addContainer(input: $input) {
    container {
      id
      title
      shelves {
        id
      }
    }
  }
}
    `;
export type AddContainerMutationFn = Apollo.MutationFunction<AddContainerMutation, AddContainerMutationVariables>;

/**
 * __useAddContainerMutation__
 *
 * To run a mutation, you first call `useAddContainerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddContainerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addContainerMutation, { data, loading, error }] = useAddContainerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddContainerMutation(baseOptions?: Apollo.MutationHookOptions<AddContainerMutation, AddContainerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddContainerMutation, AddContainerMutationVariables>(AddContainerDocument, options);
      }
export type AddContainerMutationHookResult = ReturnType<typeof useAddContainerMutation>;
export type AddContainerMutationResult = Apollo.MutationResult<AddContainerMutation>;
export type AddContainerMutationOptions = Apollo.BaseMutationOptions<AddContainerMutation, AddContainerMutationVariables>;
export const DeleteContainerDocument = gql`
    mutation deleteContainer($id: ID!) {
  deleteContainer(id: $id) {
    container {
      id
      title
    }
  }
}
    `;
export type DeleteContainerMutationFn = Apollo.MutationFunction<DeleteContainerMutation, DeleteContainerMutationVariables>;

/**
 * __useDeleteContainerMutation__
 *
 * To run a mutation, you first call `useDeleteContainerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteContainerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteContainerMutation, { data, loading, error }] = useDeleteContainerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteContainerMutation(baseOptions?: Apollo.MutationHookOptions<DeleteContainerMutation, DeleteContainerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteContainerMutation, DeleteContainerMutationVariables>(DeleteContainerDocument, options);
      }
export type DeleteContainerMutationHookResult = ReturnType<typeof useDeleteContainerMutation>;
export type DeleteContainerMutationResult = Apollo.MutationResult<DeleteContainerMutation>;
export type DeleteContainerMutationOptions = Apollo.BaseMutationOptions<DeleteContainerMutation, DeleteContainerMutationVariables>;
export const GetAllContainersDocument = gql`
    query getAllContainers {
  containers {
    containers {
      id
      title
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
export const GetContainerDocument = gql`
    query getContainer($id: ID!) {
  getContainer(id: $id) {
    container {
      id
      title
      description
      shelves {
        id
        title
      }
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useGetContainerQuery__
 *
 * To run a query within a React component, call `useGetContainerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContainerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContainerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetContainerQuery(baseOptions: Apollo.QueryHookOptions<GetContainerQuery, GetContainerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContainerQuery, GetContainerQueryVariables>(GetContainerDocument, options);
      }
export function useGetContainerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContainerQuery, GetContainerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContainerQuery, GetContainerQueryVariables>(GetContainerDocument, options);
        }
export type GetContainerQueryHookResult = ReturnType<typeof useGetContainerQuery>;
export type GetContainerLazyQueryHookResult = ReturnType<typeof useGetContainerLazyQuery>;
export type GetContainerQueryResult = Apollo.QueryResult<GetContainerQuery, GetContainerQueryVariables>;
export const GetContainerEditableDocument = gql`
    query getContainerEditable($id: ID!) {
  getContainer(id: $id) {
    container {
      id
      title
      description
    }
  }
}
    `;

/**
 * __useGetContainerEditableQuery__
 *
 * To run a query within a React component, call `useGetContainerEditableQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContainerEditableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContainerEditableQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetContainerEditableQuery(baseOptions: Apollo.QueryHookOptions<GetContainerEditableQuery, GetContainerEditableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContainerEditableQuery, GetContainerEditableQueryVariables>(GetContainerEditableDocument, options);
      }
export function useGetContainerEditableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContainerEditableQuery, GetContainerEditableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContainerEditableQuery, GetContainerEditableQueryVariables>(GetContainerEditableDocument, options);
        }
export type GetContainerEditableQueryHookResult = ReturnType<typeof useGetContainerEditableQuery>;
export type GetContainerEditableLazyQueryHookResult = ReturnType<typeof useGetContainerEditableLazyQuery>;
export type GetContainerEditableQueryResult = Apollo.QueryResult<GetContainerEditableQuery, GetContainerEditableQueryVariables>;
export const UpdateContainerDocument = gql`
    mutation updateContainer($input: UpdateContainerInput!) {
  updateContainer(input: $input) {
    container {
      id
      title
    }
  }
}
    `;
export type UpdateContainerMutationFn = Apollo.MutationFunction<UpdateContainerMutation, UpdateContainerMutationVariables>;

/**
 * __useUpdateContainerMutation__
 *
 * To run a mutation, you first call `useUpdateContainerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateContainerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateContainerMutation, { data, loading, error }] = useUpdateContainerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateContainerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateContainerMutation, UpdateContainerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateContainerMutation, UpdateContainerMutationVariables>(UpdateContainerDocument, options);
      }
export type UpdateContainerMutationHookResult = ReturnType<typeof useUpdateContainerMutation>;
export type UpdateContainerMutationResult = Apollo.MutationResult<UpdateContainerMutation>;
export type UpdateContainerMutationOptions = Apollo.BaseMutationOptions<UpdateContainerMutation, UpdateContainerMutationVariables>;
export const AddItemDocument = gql`
    mutation addItem($input: NewItemInput!) {
  addItem(input: $input) {
    item {
      id
      title
    }
  }
}
    `;
export type AddItemMutationFn = Apollo.MutationFunction<AddItemMutation, AddItemMutationVariables>;

/**
 * __useAddItemMutation__
 *
 * To run a mutation, you first call `useAddItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addItemMutation, { data, loading, error }] = useAddItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddItemMutation(baseOptions?: Apollo.MutationHookOptions<AddItemMutation, AddItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddItemMutation, AddItemMutationVariables>(AddItemDocument, options);
      }
export type AddItemMutationHookResult = ReturnType<typeof useAddItemMutation>;
export type AddItemMutationResult = Apollo.MutationResult<AddItemMutation>;
export type AddItemMutationOptions = Apollo.BaseMutationOptions<AddItemMutation, AddItemMutationVariables>;
export const DeleteItemDocument = gql`
    mutation deleteItem($id: ID!) {
  deleteItem(id: $id) {
    item {
      id
      title
    }
  }
}
    `;
export type DeleteItemMutationFn = Apollo.MutationFunction<DeleteItemMutation, DeleteItemMutationVariables>;

/**
 * __useDeleteItemMutation__
 *
 * To run a mutation, you first call `useDeleteItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteItemMutation, { data, loading, error }] = useDeleteItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteItemMutation, DeleteItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteItemMutation, DeleteItemMutationVariables>(DeleteItemDocument, options);
      }
export type DeleteItemMutationHookResult = ReturnType<typeof useDeleteItemMutation>;
export type DeleteItemMutationResult = Apollo.MutationResult<DeleteItemMutation>;
export type DeleteItemMutationOptions = Apollo.BaseMutationOptions<DeleteItemMutation, DeleteItemMutationVariables>;
export const GetAllItemsDocument = gql`
    query getAllItems {
  items {
    items {
      id
      title
      quantity
      expiry
      shelf {
        id
        title
        container {
          id
          title
        }
      }
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
export const GetItemDocument = gql`
    query getItem($id: ID!) {
  getItem(id: $id) {
    item {
      id
      title
      description
      quantity
      expiry
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useGetItemQuery__
 *
 * To run a query within a React component, call `useGetItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetItemQuery(baseOptions: Apollo.QueryHookOptions<GetItemQuery, GetItemQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetItemQuery, GetItemQueryVariables>(GetItemDocument, options);
      }
export function useGetItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItemQuery, GetItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetItemQuery, GetItemQueryVariables>(GetItemDocument, options);
        }
export type GetItemQueryHookResult = ReturnType<typeof useGetItemQuery>;
export type GetItemLazyQueryHookResult = ReturnType<typeof useGetItemLazyQuery>;
export type GetItemQueryResult = Apollo.QueryResult<GetItemQuery, GetItemQueryVariables>;
export const GetItemEditableDocument = gql`
    query getItemEditable($id: ID!) {
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
 * __useGetItemEditableQuery__
 *
 * To run a query within a React component, call `useGetItemEditableQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemEditableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemEditableQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetItemEditableQuery(baseOptions: Apollo.QueryHookOptions<GetItemEditableQuery, GetItemEditableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetItemEditableQuery, GetItemEditableQueryVariables>(GetItemEditableDocument, options);
      }
export function useGetItemEditableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItemEditableQuery, GetItemEditableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetItemEditableQuery, GetItemEditableQueryVariables>(GetItemEditableDocument, options);
        }
export type GetItemEditableQueryHookResult = ReturnType<typeof useGetItemEditableQuery>;
export type GetItemEditableLazyQueryHookResult = ReturnType<typeof useGetItemEditableLazyQuery>;
export type GetItemEditableQueryResult = Apollo.QueryResult<GetItemEditableQuery, GetItemEditableQueryVariables>;
export const UpdateItemDocument = gql`
    mutation updateItem($input: UpdateItemInput!) {
  updateItem(input: $input) {
    item {
      id
      title
    }
  }
}
    `;
export type UpdateItemMutationFn = Apollo.MutationFunction<UpdateItemMutation, UpdateItemMutationVariables>;

/**
 * __useUpdateItemMutation__
 *
 * To run a mutation, you first call `useUpdateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateItemMutation, { data, loading, error }] = useUpdateItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateItemMutation, UpdateItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateItemMutation, UpdateItemMutationVariables>(UpdateItemDocument, options);
      }
export type UpdateItemMutationHookResult = ReturnType<typeof useUpdateItemMutation>;
export type UpdateItemMutationResult = Apollo.MutationResult<UpdateItemMutation>;
export type UpdateItemMutationOptions = Apollo.BaseMutationOptions<UpdateItemMutation, UpdateItemMutationVariables>;
export const AddShelfDocument = gql`
    mutation addShelf($input: NewShelfInput!) {
  addShelf(input: $input) {
    shelf {
      id
      title
    }
  }
}
    `;
export type AddShelfMutationFn = Apollo.MutationFunction<AddShelfMutation, AddShelfMutationVariables>;

/**
 * __useAddShelfMutation__
 *
 * To run a mutation, you first call `useAddShelfMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddShelfMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addShelfMutation, { data, loading, error }] = useAddShelfMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddShelfMutation(baseOptions?: Apollo.MutationHookOptions<AddShelfMutation, AddShelfMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddShelfMutation, AddShelfMutationVariables>(AddShelfDocument, options);
      }
export type AddShelfMutationHookResult = ReturnType<typeof useAddShelfMutation>;
export type AddShelfMutationResult = Apollo.MutationResult<AddShelfMutation>;
export type AddShelfMutationOptions = Apollo.BaseMutationOptions<AddShelfMutation, AddShelfMutationVariables>;
export const DeleteShelfDocument = gql`
    mutation deleteShelf($id: ID!) {
  deleteShelf(id: $id) {
    shelf {
      id
      title
    }
  }
}
    `;
export type DeleteShelfMutationFn = Apollo.MutationFunction<DeleteShelfMutation, DeleteShelfMutationVariables>;

/**
 * __useDeleteShelfMutation__
 *
 * To run a mutation, you first call `useDeleteShelfMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteShelfMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteShelfMutation, { data, loading, error }] = useDeleteShelfMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteShelfMutation(baseOptions?: Apollo.MutationHookOptions<DeleteShelfMutation, DeleteShelfMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteShelfMutation, DeleteShelfMutationVariables>(DeleteShelfDocument, options);
      }
export type DeleteShelfMutationHookResult = ReturnType<typeof useDeleteShelfMutation>;
export type DeleteShelfMutationResult = Apollo.MutationResult<DeleteShelfMutation>;
export type DeleteShelfMutationOptions = Apollo.BaseMutationOptions<DeleteShelfMutation, DeleteShelfMutationVariables>;
export const GetAllShelvesDocument = gql`
    query getAllShelves {
  shelves {
    shelves {
      id
      title
      container {
        id
        title
      }
      items {
        id
      }
    }
  }
}
    `;

/**
 * __useGetAllShelvesQuery__
 *
 * To run a query within a React component, call `useGetAllShelvesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllShelvesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllShelvesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllShelvesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllShelvesQuery, GetAllShelvesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllShelvesQuery, GetAllShelvesQueryVariables>(GetAllShelvesDocument, options);
      }
export function useGetAllShelvesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllShelvesQuery, GetAllShelvesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllShelvesQuery, GetAllShelvesQueryVariables>(GetAllShelvesDocument, options);
        }
export type GetAllShelvesQueryHookResult = ReturnType<typeof useGetAllShelvesQuery>;
export type GetAllShelvesLazyQueryHookResult = ReturnType<typeof useGetAllShelvesLazyQuery>;
export type GetAllShelvesQueryResult = Apollo.QueryResult<GetAllShelvesQuery, GetAllShelvesQueryVariables>;
export const GetShelfDocument = gql`
    query getShelf($id: ID!) {
  getShelf(id: $id) {
    shelf {
      id
      title
      description
      items {
        id
        title
      }
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useGetShelfQuery__
 *
 * To run a query within a React component, call `useGetShelfQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShelfQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShelfQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetShelfQuery(baseOptions: Apollo.QueryHookOptions<GetShelfQuery, GetShelfQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetShelfQuery, GetShelfQueryVariables>(GetShelfDocument, options);
      }
export function useGetShelfLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShelfQuery, GetShelfQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetShelfQuery, GetShelfQueryVariables>(GetShelfDocument, options);
        }
export type GetShelfQueryHookResult = ReturnType<typeof useGetShelfQuery>;
export type GetShelfLazyQueryHookResult = ReturnType<typeof useGetShelfLazyQuery>;
export type GetShelfQueryResult = Apollo.QueryResult<GetShelfQuery, GetShelfQueryVariables>;
export const GetShelfEditableDocument = gql`
    query getShelfEditable($id: ID!) {
  getShelf(id: $id) {
    shelf {
      id
      title
      description
    }
  }
}
    `;

/**
 * __useGetShelfEditableQuery__
 *
 * To run a query within a React component, call `useGetShelfEditableQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShelfEditableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShelfEditableQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetShelfEditableQuery(baseOptions: Apollo.QueryHookOptions<GetShelfEditableQuery, GetShelfEditableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetShelfEditableQuery, GetShelfEditableQueryVariables>(GetShelfEditableDocument, options);
      }
export function useGetShelfEditableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShelfEditableQuery, GetShelfEditableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetShelfEditableQuery, GetShelfEditableQueryVariables>(GetShelfEditableDocument, options);
        }
export type GetShelfEditableQueryHookResult = ReturnType<typeof useGetShelfEditableQuery>;
export type GetShelfEditableLazyQueryHookResult = ReturnType<typeof useGetShelfEditableLazyQuery>;
export type GetShelfEditableQueryResult = Apollo.QueryResult<GetShelfEditableQuery, GetShelfEditableQueryVariables>;
export const UpdateShelfDocument = gql`
    mutation updateShelf($input: UpdateShelfInput!) {
  updateShelf(input: $input) {
    shelf {
      id
      title
    }
  }
}
    `;
export type UpdateShelfMutationFn = Apollo.MutationFunction<UpdateShelfMutation, UpdateShelfMutationVariables>;

/**
 * __useUpdateShelfMutation__
 *
 * To run a mutation, you first call `useUpdateShelfMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateShelfMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateShelfMutation, { data, loading, error }] = useUpdateShelfMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateShelfMutation(baseOptions?: Apollo.MutationHookOptions<UpdateShelfMutation, UpdateShelfMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateShelfMutation, UpdateShelfMutationVariables>(UpdateShelfDocument, options);
      }
export type UpdateShelfMutationHookResult = ReturnType<typeof useUpdateShelfMutation>;
export type UpdateShelfMutationResult = Apollo.MutationResult<UpdateShelfMutation>;
export type UpdateShelfMutationOptions = Apollo.BaseMutationOptions<UpdateShelfMutation, UpdateShelfMutationVariables>;
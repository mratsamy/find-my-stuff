import { gql } from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
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
  __typename?: "Container";
  createdAt: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  shelves?: Maybe<Array<Maybe<Shelf>>>;
  title: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type ContainerResponse = {
  __typename?: "ContainerResponse";
  container?: Maybe<Container>;
  query?: Maybe<Query>;
};

export type ContainersResponse = {
  __typename?: "ContainersResponse";
  containers: Array<Maybe<Container>>;
  query?: Maybe<Query>;
};

export type Item = {
  __typename?: "Item";
  createdAt: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  expiry: Scalars["DateTime"];
  id: Scalars["ID"];
  quantity: Scalars["NonNegativeInt"];
  shelf?: Maybe<Shelf>;
  title: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type ItemResponse = {
  __typename?: "ItemResponse";
  item?: Maybe<Item>;
  query?: Maybe<Query>;
};

export type ItemsResponse = {
  __typename?: "ItemsResponse";
  items: Array<Maybe<Item>>;
  query?: Maybe<Query>;
};

export type Mutation = {
  __typename?: "Mutation";
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
  description?: InputMaybe<Scalars["String"]>;
  title: Scalars["String"];
};

export type NewItemInput = {
  description?: InputMaybe<Scalars["String"]>;
  expiry: Scalars["DateTime"];
  quantity: Scalars["NonNegativeInt"];
  shelfId?: InputMaybe<Scalars["String"]>;
  title: Scalars["String"];
};

export type NewShelfInput = {
  containerId?: InputMaybe<Scalars["ID"]>;
  description?: InputMaybe<Scalars["String"]>;
  title: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  containers?: Maybe<ContainersResponse>;
  getContainer?: Maybe<ContainerResponse>;
  getItem?: Maybe<ItemResponse>;
  getShelf?: Maybe<ShelfResponse>;
  items?: Maybe<ItemsResponse>;
  shelves?: Maybe<ShelvesResponse>;
};

export type QueryGetContainerArgs = {
  id: Scalars["ID"];
};

export type QueryGetItemArgs = {
  id: Scalars["ID"];
};

export type QueryGetShelfArgs = {
  id: Scalars["ID"];
};

export type Shelf = {
  __typename?: "Shelf";
  container?: Maybe<Container>;
  createdAt: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  items: Array<Maybe<Item>>;
  title: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type ShelfResponse = {
  __typename?: "ShelfResponse";
  query?: Maybe<Query>;
  shelf?: Maybe<Shelf>;
};

export type ShelvesResponse = {
  __typename?: "ShelvesResponse";
  query?: Maybe<Query>;
  shelves: Array<Maybe<Shelf>>;
};

export type UpdateContainerInput = {
  description?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  title?: InputMaybe<Scalars["String"]>;
};

export type UpdateItemInput = {
  description?: InputMaybe<Scalars["String"]>;
  expiry?: InputMaybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  quantity?: InputMaybe<Scalars["NonNegativeInt"]>;
  shelfId?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type UpdateShelfInput = {
  containerId?: InputMaybe<Scalars["ID"]>;
  description?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  title?: InputMaybe<Scalars["String"]>;
};

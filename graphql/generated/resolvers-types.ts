import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from 'graphql/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Container: ResolverTypeWrapper<Container>;
  ContainerResponse: ResolverTypeWrapper<ContainerResponse>;
  ContainersResponse: ResolverTypeWrapper<ContainersResponse>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Item: ResolverTypeWrapper<Item>;
  ItemResponse: ResolverTypeWrapper<ItemResponse>;
  ItemsResponse: ResolverTypeWrapper<ItemsResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  NewContainerInput: NewContainerInput;
  NewItemInput: NewItemInput;
  NewShelfInput: NewShelfInput;
  NonNegativeInt: ResolverTypeWrapper<Scalars['NonNegativeInt']>;
  Query: ResolverTypeWrapper<{}>;
  Shelf: ResolverTypeWrapper<Shelf>;
  ShelfResponse: ResolverTypeWrapper<ShelfResponse>;
  ShelvesResponse: ResolverTypeWrapper<ShelvesResponse>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateContainerInput: UpdateContainerInput;
  UpdateItemInput: UpdateItemInput;
  UpdateShelfInput: UpdateShelfInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Container: Container;
  ContainerResponse: ContainerResponse;
  ContainersResponse: ContainersResponse;
  DateTime: Scalars['DateTime'];
  ID: Scalars['ID'];
  Item: Item;
  ItemResponse: ItemResponse;
  ItemsResponse: ItemsResponse;
  Mutation: {};
  NewContainerInput: NewContainerInput;
  NewItemInput: NewItemInput;
  NewShelfInput: NewShelfInput;
  NonNegativeInt: Scalars['NonNegativeInt'];
  Query: {};
  Shelf: Shelf;
  ShelfResponse: ShelfResponse;
  ShelvesResponse: ShelvesResponse;
  String: Scalars['String'];
  UpdateContainerInput: UpdateContainerInput;
  UpdateItemInput: UpdateItemInput;
  UpdateShelfInput: UpdateShelfInput;
}>;

export type ContainerResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Container'] = ResolversParentTypes['Container']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shelves?: Resolver<Array<Maybe<ResolversTypes['Shelf']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContainerResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ContainerResponse'] = ResolversParentTypes['ContainerResponse']> = ResolversObject<{
  container?: Resolver<Maybe<ResolversTypes['Container']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContainersResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ContainersResponse'] = ResolversParentTypes['ContainersResponse']> = ResolversObject<{
  containers?: Resolver<Array<Maybe<ResolversTypes['Container']>>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type ItemResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiry?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
  shelf?: Resolver<Maybe<ResolversTypes['Shelf']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ItemResponse'] = ResolversParentTypes['ItemResponse']> = ResolversObject<{
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemsResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ItemsResponse'] = ResolversParentTypes['ItemsResponse']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['Item']>>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addContainer?: Resolver<Maybe<ResolversTypes['ContainerResponse']>, ParentType, ContextType, RequireFields<MutationAddContainerArgs, 'input'>>;
  addItem?: Resolver<Maybe<ResolversTypes['ItemResponse']>, ParentType, ContextType, RequireFields<MutationAddItemArgs, 'input'>>;
  addShelf?: Resolver<Maybe<ResolversTypes['ShelfResponse']>, ParentType, ContextType, RequireFields<MutationAddShelfArgs, 'input'>>;
  deleteContainer?: Resolver<Maybe<ResolversTypes['ContainerResponse']>, ParentType, ContextType, RequireFields<MutationDeleteContainerArgs, 'id'>>;
  deleteItem?: Resolver<Maybe<ResolversTypes['ItemResponse']>, ParentType, ContextType, RequireFields<MutationDeleteItemArgs, 'id'>>;
  deleteShelf?: Resolver<Maybe<ResolversTypes['ShelfResponse']>, ParentType, ContextType, RequireFields<MutationDeleteShelfArgs, 'id'>>;
  updateContainer?: Resolver<Maybe<ResolversTypes['ContainerResponse']>, ParentType, ContextType, RequireFields<MutationUpdateContainerArgs, 'input'>>;
  updateItem?: Resolver<Maybe<ResolversTypes['ItemResponse']>, ParentType, ContextType, RequireFields<MutationUpdateItemArgs, 'input'>>;
  updateShelf?: Resolver<Maybe<ResolversTypes['ShelfResponse']>, ParentType, ContextType, RequireFields<MutationUpdateShelfArgs, 'input'>>;
}>;

export interface NonNegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeInt'], any> {
  name: 'NonNegativeInt';
}

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  containers?: Resolver<Maybe<ResolversTypes['ContainersResponse']>, ParentType, ContextType>;
  getContainer?: Resolver<Maybe<ResolversTypes['ContainerResponse']>, ParentType, ContextType, RequireFields<QueryGetContainerArgs, 'id'>>;
  getItem?: Resolver<Maybe<ResolversTypes['ItemResponse']>, ParentType, ContextType, RequireFields<QueryGetItemArgs, 'id'>>;
  getShelf?: Resolver<Maybe<ResolversTypes['ShelfResponse']>, ParentType, ContextType, RequireFields<QueryGetShelfArgs, 'id'>>;
  items?: Resolver<Maybe<ResolversTypes['ItemsResponse']>, ParentType, ContextType>;
  shelves?: Resolver<Maybe<ResolversTypes['ShelvesResponse']>, ParentType, ContextType>;
}>;

export type ShelfResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Shelf'] = ResolversParentTypes['Shelf']> = ResolversObject<{
  container?: Resolver<Maybe<ResolversTypes['Container']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['Item']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShelfResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ShelfResponse'] = ResolversParentTypes['ShelfResponse']> = ResolversObject<{
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  shelf?: Resolver<Maybe<ResolversTypes['Shelf']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShelvesResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ShelvesResponse'] = ResolversParentTypes['ShelvesResponse']> = ResolversObject<{
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  shelves?: Resolver<Array<Maybe<ResolversTypes['Shelf']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Container?: ContainerResolvers<ContextType>;
  ContainerResponse?: ContainerResponseResolvers<ContextType>;
  ContainersResponse?: ContainersResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Item?: ItemResolvers<ContextType>;
  ItemResponse?: ItemResponseResolvers<ContextType>;
  ItemsResponse?: ItemsResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NonNegativeInt?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  Shelf?: ShelfResolvers<ContextType>;
  ShelfResponse?: ShelfResponseResolvers<ContextType>;
  ShelvesResponse?: ShelvesResponseResolvers<ContextType>;
}>;


import type { Context } from "@graphql/context";

/// <reference path="graphql/resolvers/**.ts" />
declare namespace Graphql {
  export type Context = Context;
}

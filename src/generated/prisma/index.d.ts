
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Webinar
 * 
 */
export type Webinar = $Result.DefaultSelection<Prisma.$WebinarPayload>
/**
 * Model Attendee
 * 
 */
export type Attendee = $Result.DefaultSelection<Prisma.$AttendeePayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AttendedTypeEnum: {
  REGISTERED: 'REGISTERED',
  ATTENDED: 'ATTENDED',
  ADDED_TO_CART: 'ADDED_TO_CART',
  FOLLOW_UP: 'FOLLOW_UP',
  BREAKOUT_ROOM: 'BREAKOUT_ROOM',
  CONVERTED: 'CONVERTED'
};

export type AttendedTypeEnum = (typeof AttendedTypeEnum)[keyof typeof AttendedTypeEnum]


export const CtaTypeEnum: {
  BUY_NOW: 'BUY_NOW',
  BOOK_A_CALL: 'BOOK_A_CALL'
};

export type CtaTypeEnum = (typeof CtaTypeEnum)[keyof typeof CtaTypeEnum]


export const WebinarStatusEnum: {
  SCHEDULED: 'SCHEDULED',
  WAITING_ROOM: 'WAITING_ROOM',
  LIVE: 'LIVE',
  ENDED: 'ENDED',
  CANCELLED: 'CANCELLED'
};

export type WebinarStatusEnum = (typeof WebinarStatusEnum)[keyof typeof WebinarStatusEnum]


export const CallStatusEnum: {
  PENDING: 'PENDING',
  InProgress: 'InProgress',
  COMPLETED: 'COMPLETED'
};

export type CallStatusEnum = (typeof CallStatusEnum)[keyof typeof CallStatusEnum]

}

export type AttendedTypeEnum = $Enums.AttendedTypeEnum

export const AttendedTypeEnum: typeof $Enums.AttendedTypeEnum

export type CtaTypeEnum = $Enums.CtaTypeEnum

export const CtaTypeEnum: typeof $Enums.CtaTypeEnum

export type WebinarStatusEnum = $Enums.WebinarStatusEnum

export const WebinarStatusEnum: typeof $Enums.WebinarStatusEnum

export type CallStatusEnum = $Enums.CallStatusEnum

export const CallStatusEnum: typeof $Enums.CallStatusEnum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webinar`: Exposes CRUD operations for the **Webinar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Webinars
    * const webinars = await prisma.webinar.findMany()
    * ```
    */
  get webinar(): Prisma.WebinarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendee`: Exposes CRUD operations for the **Attendee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendees
    * const attendees = await prisma.attendee.findMany()
    * ```
    */
  get attendee(): Prisma.AttendeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Webinar: 'Webinar',
    Attendee: 'Attendee',
    Attendance: 'Attendance'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "webinar" | "attendee" | "attendance"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Webinar: {
        payload: Prisma.$WebinarPayload<ExtArgs>
        fields: Prisma.WebinarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebinarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebinarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>
          }
          findFirst: {
            args: Prisma.WebinarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebinarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>
          }
          findMany: {
            args: Prisma.WebinarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>[]
          }
          create: {
            args: Prisma.WebinarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>
          }
          createMany: {
            args: Prisma.WebinarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebinarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>[]
          }
          delete: {
            args: Prisma.WebinarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>
          }
          update: {
            args: Prisma.WebinarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>
          }
          deleteMany: {
            args: Prisma.WebinarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebinarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebinarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>[]
          }
          upsert: {
            args: Prisma.WebinarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>
          }
          aggregate: {
            args: Prisma.WebinarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebinar>
          }
          groupBy: {
            args: Prisma.WebinarGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebinarGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebinarCountArgs<ExtArgs>
            result: $Utils.Optional<WebinarCountAggregateOutputType> | number
          }
        }
      }
      Attendee: {
        payload: Prisma.$AttendeePayload<ExtArgs>
        fields: Prisma.AttendeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          findFirst: {
            args: Prisma.AttendeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          findMany: {
            args: Prisma.AttendeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>[]
          }
          create: {
            args: Prisma.AttendeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          createMany: {
            args: Prisma.AttendeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>[]
          }
          delete: {
            args: Prisma.AttendeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          update: {
            args: Prisma.AttendeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          deleteMany: {
            args: Prisma.AttendeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>[]
          }
          upsert: {
            args: Prisma.AttendeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          aggregate: {
            args: Prisma.AttendeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendee>
          }
          groupBy: {
            args: Prisma.AttendeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendeeCountArgs<ExtArgs>
            result: $Utils.Optional<AttendeeCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    webinar?: WebinarOmit
    attendee?: AttendeeOmit
    attendance?: AttendanceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    webinars: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    webinars?: boolean | UserCountOutputTypeCountWebinarsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWebinarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebinarWhereInput
  }


  /**
   * Count Type WebinarCountOutputType
   */

  export type WebinarCountOutputType = {
    attendances: number
  }

  export type WebinarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | WebinarCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes
  /**
   * WebinarCountOutputType without action
   */
  export type WebinarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebinarCountOutputType
     */
    select?: WebinarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WebinarCountOutputType without action
   */
  export type WebinarCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Count Type AttendeeCountOutputType
   */

  export type AttendeeCountOutputType = {
    Attendance: number
    Webinar: number
  }

  export type AttendeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Attendance?: boolean | AttendeeCountOutputTypeCountAttendanceArgs
    Webinar?: boolean | AttendeeCountOutputTypeCountWebinarArgs
  }

  // Custom InputTypes
  /**
   * AttendeeCountOutputType without action
   */
  export type AttendeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendeeCountOutputType
     */
    select?: AttendeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttendeeCountOutputType without action
   */
  export type AttendeeCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * AttendeeCountOutputType without action
   */
  export type AttendeeCountOutputTypeCountWebinarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebinarWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    clerkId: string | null
    email: string | null
    profileImage: string | null
    stripeConnectId: string | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    subscription: boolean | null
    stripeCustomerId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    clerkId: string | null
    email: string | null
    profileImage: string | null
    stripeConnectId: string | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    subscription: boolean | null
    stripeCustomerId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    clerkId: number
    email: number
    profileImage: number
    stripeConnectId: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    subscription: number
    stripeCustomerId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    clerkId?: true
    email?: true
    profileImage?: true
    stripeConnectId?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    subscription?: true
    stripeCustomerId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    clerkId?: true
    email?: true
    profileImage?: true
    stripeConnectId?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    subscription?: true
    stripeCustomerId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    clerkId?: true
    email?: true
    profileImage?: true
    stripeConnectId?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    subscription?: true
    stripeCustomerId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    clerkId: string
    email: string
    profileImage: string
    stripeConnectId: string | null
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    subscription: boolean
    stripeCustomerId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    clerkId?: boolean
    email?: boolean
    profileImage?: boolean
    stripeConnectId?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    subscription?: boolean
    stripeCustomerId?: boolean
    webinars?: boolean | User$webinarsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    clerkId?: boolean
    email?: boolean
    profileImage?: boolean
    stripeConnectId?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    subscription?: boolean
    stripeCustomerId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    clerkId?: boolean
    email?: boolean
    profileImage?: boolean
    stripeConnectId?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    subscription?: boolean
    stripeCustomerId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    clerkId?: boolean
    email?: boolean
    profileImage?: boolean
    stripeConnectId?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    subscription?: boolean
    stripeCustomerId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "clerkId" | "email" | "profileImage" | "stripeConnectId" | "lastLoginAt" | "createdAt" | "updatedAt" | "deletedAt" | "subscription" | "stripeCustomerId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    webinars?: boolean | User$webinarsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      webinars: Prisma.$WebinarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      clerkId: string
      email: string
      profileImage: string
      stripeConnectId: string | null
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      subscription: boolean
      stripeCustomerId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    webinars<T extends User$webinarsArgs<ExtArgs> = {}>(args?: Subset<T, User$webinarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly stripeConnectId: FieldRef<"User", 'String'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly subscription: FieldRef<"User", 'Boolean'>
    readonly stripeCustomerId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.webinars
   */
  export type User$webinarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    where?: WebinarWhereInput
    orderBy?: WebinarOrderByWithRelationInput | WebinarOrderByWithRelationInput[]
    cursor?: WebinarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebinarScalarFieldEnum | WebinarScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Webinar
   */

  export type AggregateWebinar = {
    _count: WebinarCountAggregateOutputType | null
    _avg: WebinarAvgAggregateOutputType | null
    _sum: WebinarSumAggregateOutputType | null
    _min: WebinarMinAggregateOutputType | null
    _max: WebinarMaxAggregateOutputType | null
  }

  export type WebinarAvgAggregateOutputType = {
    duration: number | null
  }

  export type WebinarSumAggregateOutputType = {
    duration: number | null
  }

  export type WebinarMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    webinarStatus: $Enums.WebinarStatusEnum | null
    presenterId: string | null
    ctaLabel: string | null
    ctaType: $Enums.CtaTypeEnum | null
    ctaUrl: string | null
    couponCode: string | null
    couponEnabled: boolean | null
    couponExpiry: Date | null
    lockChat: boolean | null
    stripeProductId: string | null
    aiAgentId: string | null
    priceId: string | null
    recordingUrl: string | null
    thumbnail: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    attendeeId: string | null
  }

  export type WebinarMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    webinarStatus: $Enums.WebinarStatusEnum | null
    presenterId: string | null
    ctaLabel: string | null
    ctaType: $Enums.CtaTypeEnum | null
    ctaUrl: string | null
    couponCode: string | null
    couponEnabled: boolean | null
    couponExpiry: Date | null
    lockChat: boolean | null
    stripeProductId: string | null
    aiAgentId: string | null
    priceId: string | null
    recordingUrl: string | null
    thumbnail: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    attendeeId: string | null
  }

  export type WebinarCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startTime: number
    endTime: number
    duration: number
    webinarStatus: number
    presenterId: number
    tags: number
    ctaLabel: number
    ctaType: number
    ctaUrl: number
    couponCode: number
    couponEnabled: number
    couponExpiry: number
    lockChat: number
    stripeProductId: number
    aiAgentId: number
    priceId: number
    recordingUrl: number
    thumbnail: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    attendeeId: number
    _all: number
  }


  export type WebinarAvgAggregateInputType = {
    duration?: true
  }

  export type WebinarSumAggregateInputType = {
    duration?: true
  }

  export type WebinarMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    duration?: true
    webinarStatus?: true
    presenterId?: true
    ctaLabel?: true
    ctaType?: true
    ctaUrl?: true
    couponCode?: true
    couponEnabled?: true
    couponExpiry?: true
    lockChat?: true
    stripeProductId?: true
    aiAgentId?: true
    priceId?: true
    recordingUrl?: true
    thumbnail?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    attendeeId?: true
  }

  export type WebinarMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    duration?: true
    webinarStatus?: true
    presenterId?: true
    ctaLabel?: true
    ctaType?: true
    ctaUrl?: true
    couponCode?: true
    couponEnabled?: true
    couponExpiry?: true
    lockChat?: true
    stripeProductId?: true
    aiAgentId?: true
    priceId?: true
    recordingUrl?: true
    thumbnail?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    attendeeId?: true
  }

  export type WebinarCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    duration?: true
    webinarStatus?: true
    presenterId?: true
    tags?: true
    ctaLabel?: true
    ctaType?: true
    ctaUrl?: true
    couponCode?: true
    couponEnabled?: true
    couponExpiry?: true
    lockChat?: true
    stripeProductId?: true
    aiAgentId?: true
    priceId?: true
    recordingUrl?: true
    thumbnail?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    attendeeId?: true
    _all?: true
  }

  export type WebinarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Webinar to aggregate.
     */
    where?: WebinarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Webinars to fetch.
     */
    orderBy?: WebinarOrderByWithRelationInput | WebinarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebinarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Webinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Webinars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Webinars
    **/
    _count?: true | WebinarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebinarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebinarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebinarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebinarMaxAggregateInputType
  }

  export type GetWebinarAggregateType<T extends WebinarAggregateArgs> = {
        [P in keyof T & keyof AggregateWebinar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebinar[P]>
      : GetScalarType<T[P], AggregateWebinar[P]>
  }




  export type WebinarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebinarWhereInput
    orderBy?: WebinarOrderByWithAggregationInput | WebinarOrderByWithAggregationInput[]
    by: WebinarScalarFieldEnum[] | WebinarScalarFieldEnum
    having?: WebinarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebinarCountAggregateInputType | true
    _avg?: WebinarAvgAggregateInputType
    _sum?: WebinarSumAggregateInputType
    _min?: WebinarMinAggregateInputType
    _max?: WebinarMaxAggregateInputType
  }

  export type WebinarGroupByOutputType = {
    id: string
    title: string
    description: string | null
    startTime: Date
    endTime: Date | null
    duration: number
    webinarStatus: $Enums.WebinarStatusEnum
    presenterId: string
    tags: string[]
    ctaLabel: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl: string | null
    couponCode: string | null
    couponEnabled: boolean
    couponExpiry: Date | null
    lockChat: boolean
    stripeProductId: string | null
    aiAgentId: string | null
    priceId: string | null
    recordingUrl: string | null
    thumbnail: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    attendeeId: string | null
    _count: WebinarCountAggregateOutputType | null
    _avg: WebinarAvgAggregateOutputType | null
    _sum: WebinarSumAggregateOutputType | null
    _min: WebinarMinAggregateOutputType | null
    _max: WebinarMaxAggregateOutputType | null
  }

  type GetWebinarGroupByPayload<T extends WebinarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebinarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebinarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebinarGroupByOutputType[P]>
            : GetScalarType<T[P], WebinarGroupByOutputType[P]>
        }
      >
    >


  export type WebinarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    webinarStatus?: boolean
    presenterId?: boolean
    tags?: boolean
    ctaLabel?: boolean
    ctaType?: boolean
    ctaUrl?: boolean
    couponCode?: boolean
    couponEnabled?: boolean
    couponExpiry?: boolean
    lockChat?: boolean
    stripeProductId?: boolean
    aiAgentId?: boolean
    priceId?: boolean
    recordingUrl?: boolean
    thumbnail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    attendeeId?: boolean
    presenter?: boolean | UserDefaultArgs<ExtArgs>
    attendances?: boolean | Webinar$attendancesArgs<ExtArgs>
    Attendee?: boolean | Webinar$AttendeeArgs<ExtArgs>
    _count?: boolean | WebinarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webinar"]>

  export type WebinarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    webinarStatus?: boolean
    presenterId?: boolean
    tags?: boolean
    ctaLabel?: boolean
    ctaType?: boolean
    ctaUrl?: boolean
    couponCode?: boolean
    couponEnabled?: boolean
    couponExpiry?: boolean
    lockChat?: boolean
    stripeProductId?: boolean
    aiAgentId?: boolean
    priceId?: boolean
    recordingUrl?: boolean
    thumbnail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    attendeeId?: boolean
    presenter?: boolean | UserDefaultArgs<ExtArgs>
    Attendee?: boolean | Webinar$AttendeeArgs<ExtArgs>
  }, ExtArgs["result"]["webinar"]>

  export type WebinarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    webinarStatus?: boolean
    presenterId?: boolean
    tags?: boolean
    ctaLabel?: boolean
    ctaType?: boolean
    ctaUrl?: boolean
    couponCode?: boolean
    couponEnabled?: boolean
    couponExpiry?: boolean
    lockChat?: boolean
    stripeProductId?: boolean
    aiAgentId?: boolean
    priceId?: boolean
    recordingUrl?: boolean
    thumbnail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    attendeeId?: boolean
    presenter?: boolean | UserDefaultArgs<ExtArgs>
    Attendee?: boolean | Webinar$AttendeeArgs<ExtArgs>
  }, ExtArgs["result"]["webinar"]>

  export type WebinarSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    webinarStatus?: boolean
    presenterId?: boolean
    tags?: boolean
    ctaLabel?: boolean
    ctaType?: boolean
    ctaUrl?: boolean
    couponCode?: boolean
    couponEnabled?: boolean
    couponExpiry?: boolean
    lockChat?: boolean
    stripeProductId?: boolean
    aiAgentId?: boolean
    priceId?: boolean
    recordingUrl?: boolean
    thumbnail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    attendeeId?: boolean
  }

  export type WebinarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "startTime" | "endTime" | "duration" | "webinarStatus" | "presenterId" | "tags" | "ctaLabel" | "ctaType" | "ctaUrl" | "couponCode" | "couponEnabled" | "couponExpiry" | "lockChat" | "stripeProductId" | "aiAgentId" | "priceId" | "recordingUrl" | "thumbnail" | "createdAt" | "updatedAt" | "deletedAt" | "attendeeId", ExtArgs["result"]["webinar"]>
  export type WebinarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    presenter?: boolean | UserDefaultArgs<ExtArgs>
    attendances?: boolean | Webinar$attendancesArgs<ExtArgs>
    Attendee?: boolean | Webinar$AttendeeArgs<ExtArgs>
    _count?: boolean | WebinarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WebinarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    presenter?: boolean | UserDefaultArgs<ExtArgs>
    Attendee?: boolean | Webinar$AttendeeArgs<ExtArgs>
  }
  export type WebinarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    presenter?: boolean | UserDefaultArgs<ExtArgs>
    Attendee?: boolean | Webinar$AttendeeArgs<ExtArgs>
  }

  export type $WebinarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Webinar"
    objects: {
      presenter: Prisma.$UserPayload<ExtArgs>
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      Attendee: Prisma.$AttendeePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      startTime: Date
      endTime: Date | null
      duration: number
      webinarStatus: $Enums.WebinarStatusEnum
      presenterId: string
      tags: string[]
      ctaLabel: string | null
      ctaType: $Enums.CtaTypeEnum
      ctaUrl: string | null
      couponCode: string | null
      couponEnabled: boolean
      couponExpiry: Date | null
      lockChat: boolean
      stripeProductId: string | null
      aiAgentId: string | null
      priceId: string | null
      recordingUrl: string | null
      thumbnail: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      attendeeId: string | null
    }, ExtArgs["result"]["webinar"]>
    composites: {}
  }

  type WebinarGetPayload<S extends boolean | null | undefined | WebinarDefaultArgs> = $Result.GetResult<Prisma.$WebinarPayload, S>

  type WebinarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebinarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebinarCountAggregateInputType | true
    }

  export interface WebinarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Webinar'], meta: { name: 'Webinar' } }
    /**
     * Find zero or one Webinar that matches the filter.
     * @param {WebinarFindUniqueArgs} args - Arguments to find a Webinar
     * @example
     * // Get one Webinar
     * const webinar = await prisma.webinar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebinarFindUniqueArgs>(args: SelectSubset<T, WebinarFindUniqueArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Webinar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebinarFindUniqueOrThrowArgs} args - Arguments to find a Webinar
     * @example
     * // Get one Webinar
     * const webinar = await prisma.webinar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebinarFindUniqueOrThrowArgs>(args: SelectSubset<T, WebinarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Webinar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarFindFirstArgs} args - Arguments to find a Webinar
     * @example
     * // Get one Webinar
     * const webinar = await prisma.webinar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebinarFindFirstArgs>(args?: SelectSubset<T, WebinarFindFirstArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Webinar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarFindFirstOrThrowArgs} args - Arguments to find a Webinar
     * @example
     * // Get one Webinar
     * const webinar = await prisma.webinar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebinarFindFirstOrThrowArgs>(args?: SelectSubset<T, WebinarFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Webinars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Webinars
     * const webinars = await prisma.webinar.findMany()
     * 
     * // Get first 10 Webinars
     * const webinars = await prisma.webinar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webinarWithIdOnly = await prisma.webinar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebinarFindManyArgs>(args?: SelectSubset<T, WebinarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Webinar.
     * @param {WebinarCreateArgs} args - Arguments to create a Webinar.
     * @example
     * // Create one Webinar
     * const Webinar = await prisma.webinar.create({
     *   data: {
     *     // ... data to create a Webinar
     *   }
     * })
     * 
     */
    create<T extends WebinarCreateArgs>(args: SelectSubset<T, WebinarCreateArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Webinars.
     * @param {WebinarCreateManyArgs} args - Arguments to create many Webinars.
     * @example
     * // Create many Webinars
     * const webinar = await prisma.webinar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebinarCreateManyArgs>(args?: SelectSubset<T, WebinarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Webinars and returns the data saved in the database.
     * @param {WebinarCreateManyAndReturnArgs} args - Arguments to create many Webinars.
     * @example
     * // Create many Webinars
     * const webinar = await prisma.webinar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Webinars and only return the `id`
     * const webinarWithIdOnly = await prisma.webinar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebinarCreateManyAndReturnArgs>(args?: SelectSubset<T, WebinarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Webinar.
     * @param {WebinarDeleteArgs} args - Arguments to delete one Webinar.
     * @example
     * // Delete one Webinar
     * const Webinar = await prisma.webinar.delete({
     *   where: {
     *     // ... filter to delete one Webinar
     *   }
     * })
     * 
     */
    delete<T extends WebinarDeleteArgs>(args: SelectSubset<T, WebinarDeleteArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Webinar.
     * @param {WebinarUpdateArgs} args - Arguments to update one Webinar.
     * @example
     * // Update one Webinar
     * const webinar = await prisma.webinar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebinarUpdateArgs>(args: SelectSubset<T, WebinarUpdateArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Webinars.
     * @param {WebinarDeleteManyArgs} args - Arguments to filter Webinars to delete.
     * @example
     * // Delete a few Webinars
     * const { count } = await prisma.webinar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebinarDeleteManyArgs>(args?: SelectSubset<T, WebinarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webinars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Webinars
     * const webinar = await prisma.webinar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebinarUpdateManyArgs>(args: SelectSubset<T, WebinarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webinars and returns the data updated in the database.
     * @param {WebinarUpdateManyAndReturnArgs} args - Arguments to update many Webinars.
     * @example
     * // Update many Webinars
     * const webinar = await prisma.webinar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Webinars and only return the `id`
     * const webinarWithIdOnly = await prisma.webinar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebinarUpdateManyAndReturnArgs>(args: SelectSubset<T, WebinarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Webinar.
     * @param {WebinarUpsertArgs} args - Arguments to update or create a Webinar.
     * @example
     * // Update or create a Webinar
     * const webinar = await prisma.webinar.upsert({
     *   create: {
     *     // ... data to create a Webinar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Webinar we want to update
     *   }
     * })
     */
    upsert<T extends WebinarUpsertArgs>(args: SelectSubset<T, WebinarUpsertArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Webinars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarCountArgs} args - Arguments to filter Webinars to count.
     * @example
     * // Count the number of Webinars
     * const count = await prisma.webinar.count({
     *   where: {
     *     // ... the filter for the Webinars we want to count
     *   }
     * })
    **/
    count<T extends WebinarCountArgs>(
      args?: Subset<T, WebinarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebinarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Webinar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebinarAggregateArgs>(args: Subset<T, WebinarAggregateArgs>): Prisma.PrismaPromise<GetWebinarAggregateType<T>>

    /**
     * Group by Webinar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebinarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebinarGroupByArgs['orderBy'] }
        : { orderBy?: WebinarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebinarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebinarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Webinar model
   */
  readonly fields: WebinarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Webinar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebinarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    presenter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendances<T extends Webinar$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Webinar$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Attendee<T extends Webinar$AttendeeArgs<ExtArgs> = {}>(args?: Subset<T, Webinar$AttendeeArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Webinar model
   */
  interface WebinarFieldRefs {
    readonly id: FieldRef<"Webinar", 'String'>
    readonly title: FieldRef<"Webinar", 'String'>
    readonly description: FieldRef<"Webinar", 'String'>
    readonly startTime: FieldRef<"Webinar", 'DateTime'>
    readonly endTime: FieldRef<"Webinar", 'DateTime'>
    readonly duration: FieldRef<"Webinar", 'Int'>
    readonly webinarStatus: FieldRef<"Webinar", 'WebinarStatusEnum'>
    readonly presenterId: FieldRef<"Webinar", 'String'>
    readonly tags: FieldRef<"Webinar", 'String[]'>
    readonly ctaLabel: FieldRef<"Webinar", 'String'>
    readonly ctaType: FieldRef<"Webinar", 'CtaTypeEnum'>
    readonly ctaUrl: FieldRef<"Webinar", 'String'>
    readonly couponCode: FieldRef<"Webinar", 'String'>
    readonly couponEnabled: FieldRef<"Webinar", 'Boolean'>
    readonly couponExpiry: FieldRef<"Webinar", 'DateTime'>
    readonly lockChat: FieldRef<"Webinar", 'Boolean'>
    readonly stripeProductId: FieldRef<"Webinar", 'String'>
    readonly aiAgentId: FieldRef<"Webinar", 'String'>
    readonly priceId: FieldRef<"Webinar", 'String'>
    readonly recordingUrl: FieldRef<"Webinar", 'String'>
    readonly thumbnail: FieldRef<"Webinar", 'String'>
    readonly createdAt: FieldRef<"Webinar", 'DateTime'>
    readonly updatedAt: FieldRef<"Webinar", 'DateTime'>
    readonly deletedAt: FieldRef<"Webinar", 'DateTime'>
    readonly attendeeId: FieldRef<"Webinar", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Webinar findUnique
   */
  export type WebinarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * Filter, which Webinar to fetch.
     */
    where: WebinarWhereUniqueInput
  }

  /**
   * Webinar findUniqueOrThrow
   */
  export type WebinarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * Filter, which Webinar to fetch.
     */
    where: WebinarWhereUniqueInput
  }

  /**
   * Webinar findFirst
   */
  export type WebinarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * Filter, which Webinar to fetch.
     */
    where?: WebinarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Webinars to fetch.
     */
    orderBy?: WebinarOrderByWithRelationInput | WebinarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Webinars.
     */
    cursor?: WebinarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Webinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Webinars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Webinars.
     */
    distinct?: WebinarScalarFieldEnum | WebinarScalarFieldEnum[]
  }

  /**
   * Webinar findFirstOrThrow
   */
  export type WebinarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * Filter, which Webinar to fetch.
     */
    where?: WebinarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Webinars to fetch.
     */
    orderBy?: WebinarOrderByWithRelationInput | WebinarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Webinars.
     */
    cursor?: WebinarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Webinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Webinars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Webinars.
     */
    distinct?: WebinarScalarFieldEnum | WebinarScalarFieldEnum[]
  }

  /**
   * Webinar findMany
   */
  export type WebinarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * Filter, which Webinars to fetch.
     */
    where?: WebinarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Webinars to fetch.
     */
    orderBy?: WebinarOrderByWithRelationInput | WebinarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Webinars.
     */
    cursor?: WebinarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Webinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Webinars.
     */
    skip?: number
    distinct?: WebinarScalarFieldEnum | WebinarScalarFieldEnum[]
  }

  /**
   * Webinar create
   */
  export type WebinarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * The data needed to create a Webinar.
     */
    data: XOR<WebinarCreateInput, WebinarUncheckedCreateInput>
  }

  /**
   * Webinar createMany
   */
  export type WebinarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Webinars.
     */
    data: WebinarCreateManyInput | WebinarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Webinar createManyAndReturn
   */
  export type WebinarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * The data used to create many Webinars.
     */
    data: WebinarCreateManyInput | WebinarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Webinar update
   */
  export type WebinarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * The data needed to update a Webinar.
     */
    data: XOR<WebinarUpdateInput, WebinarUncheckedUpdateInput>
    /**
     * Choose, which Webinar to update.
     */
    where: WebinarWhereUniqueInput
  }

  /**
   * Webinar updateMany
   */
  export type WebinarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Webinars.
     */
    data: XOR<WebinarUpdateManyMutationInput, WebinarUncheckedUpdateManyInput>
    /**
     * Filter which Webinars to update
     */
    where?: WebinarWhereInput
    /**
     * Limit how many Webinars to update.
     */
    limit?: number
  }

  /**
   * Webinar updateManyAndReturn
   */
  export type WebinarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * The data used to update Webinars.
     */
    data: XOR<WebinarUpdateManyMutationInput, WebinarUncheckedUpdateManyInput>
    /**
     * Filter which Webinars to update
     */
    where?: WebinarWhereInput
    /**
     * Limit how many Webinars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Webinar upsert
   */
  export type WebinarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * The filter to search for the Webinar to update in case it exists.
     */
    where: WebinarWhereUniqueInput
    /**
     * In case the Webinar found by the `where` argument doesn't exist, create a new Webinar with this data.
     */
    create: XOR<WebinarCreateInput, WebinarUncheckedCreateInput>
    /**
     * In case the Webinar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebinarUpdateInput, WebinarUncheckedUpdateInput>
  }

  /**
   * Webinar delete
   */
  export type WebinarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * Filter which Webinar to delete.
     */
    where: WebinarWhereUniqueInput
  }

  /**
   * Webinar deleteMany
   */
  export type WebinarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Webinars to delete
     */
    where?: WebinarWhereInput
    /**
     * Limit how many Webinars to delete.
     */
    limit?: number
  }

  /**
   * Webinar.attendances
   */
  export type Webinar$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Webinar.Attendee
   */
  export type Webinar$AttendeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    where?: AttendeeWhereInput
  }

  /**
   * Webinar without action
   */
  export type WebinarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
  }


  /**
   * Model Attendee
   */

  export type AggregateAttendee = {
    _count: AttendeeCountAggregateOutputType | null
    _min: AttendeeMinAggregateOutputType | null
    _max: AttendeeMaxAggregateOutputType | null
  }

  export type AttendeeMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    callStatus: $Enums.CallStatusEnum | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendeeMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    callStatus: $Enums.CallStatusEnum | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendeeCountAggregateOutputType = {
    id: number
    email: number
    name: number
    callStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttendeeMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    callStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendeeMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    callStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendeeCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    callStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttendeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendee to aggregate.
     */
    where?: AttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendees
    **/
    _count?: true | AttendeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendeeMaxAggregateInputType
  }

  export type GetAttendeeAggregateType<T extends AttendeeAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendee[P]>
      : GetScalarType<T[P], AggregateAttendee[P]>
  }




  export type AttendeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendeeWhereInput
    orderBy?: AttendeeOrderByWithAggregationInput | AttendeeOrderByWithAggregationInput[]
    by: AttendeeScalarFieldEnum[] | AttendeeScalarFieldEnum
    having?: AttendeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendeeCountAggregateInputType | true
    _min?: AttendeeMinAggregateInputType
    _max?: AttendeeMaxAggregateInputType
  }

  export type AttendeeGroupByOutputType = {
    id: string
    email: string
    name: string
    callStatus: $Enums.CallStatusEnum
    createdAt: Date
    updatedAt: Date
    _count: AttendeeCountAggregateOutputType | null
    _min: AttendeeMinAggregateOutputType | null
    _max: AttendeeMaxAggregateOutputType | null
  }

  type GetAttendeeGroupByPayload<T extends AttendeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendeeGroupByOutputType[P]>
            : GetScalarType<T[P], AttendeeGroupByOutputType[P]>
        }
      >
    >


  export type AttendeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    callStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Attendance?: boolean | Attendee$AttendanceArgs<ExtArgs>
    Webinar?: boolean | Attendee$WebinarArgs<ExtArgs>
    _count?: boolean | AttendeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendee"]>

  export type AttendeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    callStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attendee"]>

  export type AttendeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    callStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attendee"]>

  export type AttendeeSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    callStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttendeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "callStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["attendee"]>
  export type AttendeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Attendance?: boolean | Attendee$AttendanceArgs<ExtArgs>
    Webinar?: boolean | Attendee$WebinarArgs<ExtArgs>
    _count?: boolean | AttendeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttendeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AttendeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AttendeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendee"
    objects: {
      Attendance: Prisma.$AttendancePayload<ExtArgs>[]
      Webinar: Prisma.$WebinarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      callStatus: $Enums.CallStatusEnum
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attendee"]>
    composites: {}
  }

  type AttendeeGetPayload<S extends boolean | null | undefined | AttendeeDefaultArgs> = $Result.GetResult<Prisma.$AttendeePayload, S>

  type AttendeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendeeCountAggregateInputType | true
    }

  export interface AttendeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendee'], meta: { name: 'Attendee' } }
    /**
     * Find zero or one Attendee that matches the filter.
     * @param {AttendeeFindUniqueArgs} args - Arguments to find a Attendee
     * @example
     * // Get one Attendee
     * const attendee = await prisma.attendee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendeeFindUniqueArgs>(args: SelectSubset<T, AttendeeFindUniqueArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendeeFindUniqueOrThrowArgs} args - Arguments to find a Attendee
     * @example
     * // Get one Attendee
     * const attendee = await prisma.attendee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendeeFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeFindFirstArgs} args - Arguments to find a Attendee
     * @example
     * // Get one Attendee
     * const attendee = await prisma.attendee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendeeFindFirstArgs>(args?: SelectSubset<T, AttendeeFindFirstArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeFindFirstOrThrowArgs} args - Arguments to find a Attendee
     * @example
     * // Get one Attendee
     * const attendee = await prisma.attendee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendeeFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendees
     * const attendees = await prisma.attendee.findMany()
     * 
     * // Get first 10 Attendees
     * const attendees = await prisma.attendee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendeeWithIdOnly = await prisma.attendee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendeeFindManyArgs>(args?: SelectSubset<T, AttendeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendee.
     * @param {AttendeeCreateArgs} args - Arguments to create a Attendee.
     * @example
     * // Create one Attendee
     * const Attendee = await prisma.attendee.create({
     *   data: {
     *     // ... data to create a Attendee
     *   }
     * })
     * 
     */
    create<T extends AttendeeCreateArgs>(args: SelectSubset<T, AttendeeCreateArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendees.
     * @param {AttendeeCreateManyArgs} args - Arguments to create many Attendees.
     * @example
     * // Create many Attendees
     * const attendee = await prisma.attendee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendeeCreateManyArgs>(args?: SelectSubset<T, AttendeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendees and returns the data saved in the database.
     * @param {AttendeeCreateManyAndReturnArgs} args - Arguments to create many Attendees.
     * @example
     * // Create many Attendees
     * const attendee = await prisma.attendee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendees and only return the `id`
     * const attendeeWithIdOnly = await prisma.attendee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendeeCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendee.
     * @param {AttendeeDeleteArgs} args - Arguments to delete one Attendee.
     * @example
     * // Delete one Attendee
     * const Attendee = await prisma.attendee.delete({
     *   where: {
     *     // ... filter to delete one Attendee
     *   }
     * })
     * 
     */
    delete<T extends AttendeeDeleteArgs>(args: SelectSubset<T, AttendeeDeleteArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendee.
     * @param {AttendeeUpdateArgs} args - Arguments to update one Attendee.
     * @example
     * // Update one Attendee
     * const attendee = await prisma.attendee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendeeUpdateArgs>(args: SelectSubset<T, AttendeeUpdateArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendees.
     * @param {AttendeeDeleteManyArgs} args - Arguments to filter Attendees to delete.
     * @example
     * // Delete a few Attendees
     * const { count } = await prisma.attendee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendeeDeleteManyArgs>(args?: SelectSubset<T, AttendeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendees
     * const attendee = await prisma.attendee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendeeUpdateManyArgs>(args: SelectSubset<T, AttendeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendees and returns the data updated in the database.
     * @param {AttendeeUpdateManyAndReturnArgs} args - Arguments to update many Attendees.
     * @example
     * // Update many Attendees
     * const attendee = await prisma.attendee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendees and only return the `id`
     * const attendeeWithIdOnly = await prisma.attendee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendeeUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendee.
     * @param {AttendeeUpsertArgs} args - Arguments to update or create a Attendee.
     * @example
     * // Update or create a Attendee
     * const attendee = await prisma.attendee.upsert({
     *   create: {
     *     // ... data to create a Attendee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendee we want to update
     *   }
     * })
     */
    upsert<T extends AttendeeUpsertArgs>(args: SelectSubset<T, AttendeeUpsertArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeCountArgs} args - Arguments to filter Attendees to count.
     * @example
     * // Count the number of Attendees
     * const count = await prisma.attendee.count({
     *   where: {
     *     // ... the filter for the Attendees we want to count
     *   }
     * })
    **/
    count<T extends AttendeeCountArgs>(
      args?: Subset<T, AttendeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendeeAggregateArgs>(args: Subset<T, AttendeeAggregateArgs>): Prisma.PrismaPromise<GetAttendeeAggregateType<T>>

    /**
     * Group by Attendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendeeGroupByArgs['orderBy'] }
        : { orderBy?: AttendeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendee model
   */
  readonly fields: AttendeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Attendance<T extends Attendee$AttendanceArgs<ExtArgs> = {}>(args?: Subset<T, Attendee$AttendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Webinar<T extends Attendee$WebinarArgs<ExtArgs> = {}>(args?: Subset<T, Attendee$WebinarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attendee model
   */
  interface AttendeeFieldRefs {
    readonly id: FieldRef<"Attendee", 'String'>
    readonly email: FieldRef<"Attendee", 'String'>
    readonly name: FieldRef<"Attendee", 'String'>
    readonly callStatus: FieldRef<"Attendee", 'CallStatusEnum'>
    readonly createdAt: FieldRef<"Attendee", 'DateTime'>
    readonly updatedAt: FieldRef<"Attendee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendee findUnique
   */
  export type AttendeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendee to fetch.
     */
    where: AttendeeWhereUniqueInput
  }

  /**
   * Attendee findUniqueOrThrow
   */
  export type AttendeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendee to fetch.
     */
    where: AttendeeWhereUniqueInput
  }

  /**
   * Attendee findFirst
   */
  export type AttendeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendee to fetch.
     */
    where?: AttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendees.
     */
    cursor?: AttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendees.
     */
    distinct?: AttendeeScalarFieldEnum | AttendeeScalarFieldEnum[]
  }

  /**
   * Attendee findFirstOrThrow
   */
  export type AttendeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendee to fetch.
     */
    where?: AttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendees.
     */
    cursor?: AttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendees.
     */
    distinct?: AttendeeScalarFieldEnum | AttendeeScalarFieldEnum[]
  }

  /**
   * Attendee findMany
   */
  export type AttendeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendees to fetch.
     */
    where?: AttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendees.
     */
    cursor?: AttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    distinct?: AttendeeScalarFieldEnum | AttendeeScalarFieldEnum[]
  }

  /**
   * Attendee create
   */
  export type AttendeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendee.
     */
    data: XOR<AttendeeCreateInput, AttendeeUncheckedCreateInput>
  }

  /**
   * Attendee createMany
   */
  export type AttendeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendees.
     */
    data: AttendeeCreateManyInput | AttendeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendee createManyAndReturn
   */
  export type AttendeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * The data used to create many Attendees.
     */
    data: AttendeeCreateManyInput | AttendeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendee update
   */
  export type AttendeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendee.
     */
    data: XOR<AttendeeUpdateInput, AttendeeUncheckedUpdateInput>
    /**
     * Choose, which Attendee to update.
     */
    where: AttendeeWhereUniqueInput
  }

  /**
   * Attendee updateMany
   */
  export type AttendeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendees.
     */
    data: XOR<AttendeeUpdateManyMutationInput, AttendeeUncheckedUpdateManyInput>
    /**
     * Filter which Attendees to update
     */
    where?: AttendeeWhereInput
    /**
     * Limit how many Attendees to update.
     */
    limit?: number
  }

  /**
   * Attendee updateManyAndReturn
   */
  export type AttendeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * The data used to update Attendees.
     */
    data: XOR<AttendeeUpdateManyMutationInput, AttendeeUncheckedUpdateManyInput>
    /**
     * Filter which Attendees to update
     */
    where?: AttendeeWhereInput
    /**
     * Limit how many Attendees to update.
     */
    limit?: number
  }

  /**
   * Attendee upsert
   */
  export type AttendeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendee to update in case it exists.
     */
    where: AttendeeWhereUniqueInput
    /**
     * In case the Attendee found by the `where` argument doesn't exist, create a new Attendee with this data.
     */
    create: XOR<AttendeeCreateInput, AttendeeUncheckedCreateInput>
    /**
     * In case the Attendee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendeeUpdateInput, AttendeeUncheckedUpdateInput>
  }

  /**
   * Attendee delete
   */
  export type AttendeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter which Attendee to delete.
     */
    where: AttendeeWhereUniqueInput
  }

  /**
   * Attendee deleteMany
   */
  export type AttendeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendees to delete
     */
    where?: AttendeeWhereInput
    /**
     * Limit how many Attendees to delete.
     */
    limit?: number
  }

  /**
   * Attendee.Attendance
   */
  export type Attendee$AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendee.Webinar
   */
  export type Attendee$WebinarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    where?: WebinarWhereInput
    orderBy?: WebinarOrderByWithRelationInput | WebinarOrderByWithRelationInput[]
    cursor?: WebinarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebinarScalarFieldEnum | WebinarScalarFieldEnum[]
  }

  /**
   * Attendee without action
   */
  export type AttendeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    webinarId: string | null
    joinedAt: Date | null
    leftAt: Date | null
    attendedType: $Enums.AttendedTypeEnum | null
    createdAt: Date | null
    updatedAt: Date | null
    attendeeId: string | null
    userId: string | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    webinarId: string | null
    joinedAt: Date | null
    leftAt: Date | null
    attendedType: $Enums.AttendedTypeEnum | null
    createdAt: Date | null
    updatedAt: Date | null
    attendeeId: string | null
    userId: string | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    webinarId: number
    joinedAt: number
    leftAt: number
    attendedType: number
    createdAt: number
    updatedAt: number
    attendeeId: number
    userId: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    webinarId?: true
    joinedAt?: true
    leftAt?: true
    attendedType?: true
    createdAt?: true
    updatedAt?: true
    attendeeId?: true
    userId?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    webinarId?: true
    joinedAt?: true
    leftAt?: true
    attendedType?: true
    createdAt?: true
    updatedAt?: true
    attendeeId?: true
    userId?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    webinarId?: true
    joinedAt?: true
    leftAt?: true
    attendedType?: true
    createdAt?: true
    updatedAt?: true
    attendeeId?: true
    userId?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    webinarId: string
    joinedAt: Date
    leftAt: Date | null
    attendedType: $Enums.AttendedTypeEnum
    createdAt: Date
    updatedAt: Date
    attendeeId: string
    userId: string | null
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webinarId?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    attendedType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendeeId?: boolean
    userId?: boolean
    user?: boolean | AttendeeDefaultArgs<ExtArgs>
    webinar?: boolean | WebinarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webinarId?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    attendedType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendeeId?: boolean
    userId?: boolean
    user?: boolean | AttendeeDefaultArgs<ExtArgs>
    webinar?: boolean | WebinarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webinarId?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    attendedType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendeeId?: boolean
    userId?: boolean
    user?: boolean | AttendeeDefaultArgs<ExtArgs>
    webinar?: boolean | WebinarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    webinarId?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    attendedType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendeeId?: boolean
    userId?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "webinarId" | "joinedAt" | "leftAt" | "attendedType" | "createdAt" | "updatedAt" | "attendeeId" | "userId", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AttendeeDefaultArgs<ExtArgs>
    webinar?: boolean | WebinarDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AttendeeDefaultArgs<ExtArgs>
    webinar?: boolean | WebinarDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AttendeeDefaultArgs<ExtArgs>
    webinar?: boolean | WebinarDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      user: Prisma.$AttendeePayload<ExtArgs>
      webinar: Prisma.$WebinarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      webinarId: string
      joinedAt: Date
      leftAt: Date | null
      attendedType: $Enums.AttendedTypeEnum
      createdAt: Date
      updatedAt: Date
      attendeeId: string
      userId: string | null
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AttendeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttendeeDefaultArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    webinar<T extends WebinarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WebinarDefaultArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly webinarId: FieldRef<"Attendance", 'String'>
    readonly joinedAt: FieldRef<"Attendance", 'DateTime'>
    readonly leftAt: FieldRef<"Attendance", 'DateTime'>
    readonly attendedType: FieldRef<"Attendance", 'AttendedTypeEnum'>
    readonly createdAt: FieldRef<"Attendance", 'DateTime'>
    readonly updatedAt: FieldRef<"Attendance", 'DateTime'>
    readonly attendeeId: FieldRef<"Attendance", 'String'>
    readonly userId: FieldRef<"Attendance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    clerkId: 'clerkId',
    email: 'email',
    profileImage: 'profileImage',
    stripeConnectId: 'stripeConnectId',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    subscription: 'subscription',
    stripeCustomerId: 'stripeCustomerId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WebinarScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startTime: 'startTime',
    endTime: 'endTime',
    duration: 'duration',
    webinarStatus: 'webinarStatus',
    presenterId: 'presenterId',
    tags: 'tags',
    ctaLabel: 'ctaLabel',
    ctaType: 'ctaType',
    ctaUrl: 'ctaUrl',
    couponCode: 'couponCode',
    couponEnabled: 'couponEnabled',
    couponExpiry: 'couponExpiry',
    lockChat: 'lockChat',
    stripeProductId: 'stripeProductId',
    aiAgentId: 'aiAgentId',
    priceId: 'priceId',
    recordingUrl: 'recordingUrl',
    thumbnail: 'thumbnail',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    attendeeId: 'attendeeId'
  };

  export type WebinarScalarFieldEnum = (typeof WebinarScalarFieldEnum)[keyof typeof WebinarScalarFieldEnum]


  export const AttendeeScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    callStatus: 'callStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttendeeScalarFieldEnum = (typeof AttendeeScalarFieldEnum)[keyof typeof AttendeeScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    webinarId: 'webinarId',
    joinedAt: 'joinedAt',
    leftAt: 'leftAt',
    attendedType: 'attendedType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    attendeeId: 'attendeeId',
    userId: 'userId'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'WebinarStatusEnum'
   */
  export type EnumWebinarStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebinarStatusEnum'>
    


  /**
   * Reference to a field of type 'WebinarStatusEnum[]'
   */
  export type ListEnumWebinarStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebinarStatusEnum[]'>
    


  /**
   * Reference to a field of type 'CtaTypeEnum'
   */
  export type EnumCtaTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CtaTypeEnum'>
    


  /**
   * Reference to a field of type 'CtaTypeEnum[]'
   */
  export type ListEnumCtaTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CtaTypeEnum[]'>
    


  /**
   * Reference to a field of type 'CallStatusEnum'
   */
  export type EnumCallStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CallStatusEnum'>
    


  /**
   * Reference to a field of type 'CallStatusEnum[]'
   */
  export type ListEnumCallStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CallStatusEnum[]'>
    


  /**
   * Reference to a field of type 'AttendedTypeEnum'
   */
  export type EnumAttendedTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendedTypeEnum'>
    


  /**
   * Reference to a field of type 'AttendedTypeEnum[]'
   */
  export type ListEnumAttendedTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendedTypeEnum[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    profileImage?: StringFilter<"User"> | string
    stripeConnectId?: StringNullableFilter<"User"> | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    subscription?: BoolFilter<"User"> | boolean
    stripeCustomerId?: StringNullableFilter<"User"> | string | null
    webinars?: WebinarListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    stripeConnectId?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    subscription?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    webinars?: WebinarOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    profileImage?: StringFilter<"User"> | string
    stripeConnectId?: StringNullableFilter<"User"> | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    subscription?: BoolFilter<"User"> | boolean
    stripeCustomerId?: StringNullableFilter<"User"> | string | null
    webinars?: WebinarListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    stripeConnectId?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    subscription?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    profileImage?: StringWithAggregatesFilter<"User"> | string
    stripeConnectId?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    subscription?: BoolWithAggregatesFilter<"User"> | boolean
    stripeCustomerId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type WebinarWhereInput = {
    AND?: WebinarWhereInput | WebinarWhereInput[]
    OR?: WebinarWhereInput[]
    NOT?: WebinarWhereInput | WebinarWhereInput[]
    id?: UuidFilter<"Webinar"> | string
    title?: StringFilter<"Webinar"> | string
    description?: StringNullableFilter<"Webinar"> | string | null
    startTime?: DateTimeFilter<"Webinar"> | Date | string
    endTime?: DateTimeNullableFilter<"Webinar"> | Date | string | null
    duration?: IntFilter<"Webinar"> | number
    webinarStatus?: EnumWebinarStatusEnumFilter<"Webinar"> | $Enums.WebinarStatusEnum
    presenterId?: UuidFilter<"Webinar"> | string
    tags?: StringNullableListFilter<"Webinar">
    ctaLabel?: StringNullableFilter<"Webinar"> | string | null
    ctaType?: EnumCtaTypeEnumFilter<"Webinar"> | $Enums.CtaTypeEnum
    ctaUrl?: StringNullableFilter<"Webinar"> | string | null
    couponCode?: StringNullableFilter<"Webinar"> | string | null
    couponEnabled?: BoolFilter<"Webinar"> | boolean
    couponExpiry?: DateTimeNullableFilter<"Webinar"> | Date | string | null
    lockChat?: BoolFilter<"Webinar"> | boolean
    stripeProductId?: StringNullableFilter<"Webinar"> | string | null
    aiAgentId?: UuidNullableFilter<"Webinar"> | string | null
    priceId?: StringNullableFilter<"Webinar"> | string | null
    recordingUrl?: StringNullableFilter<"Webinar"> | string | null
    thumbnail?: StringNullableFilter<"Webinar"> | string | null
    createdAt?: DateTimeFilter<"Webinar"> | Date | string
    updatedAt?: DateTimeFilter<"Webinar"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Webinar"> | Date | string | null
    attendeeId?: UuidNullableFilter<"Webinar"> | string | null
    presenter?: XOR<UserScalarRelationFilter, UserWhereInput>
    attendances?: AttendanceListRelationFilter
    Attendee?: XOR<AttendeeNullableScalarRelationFilter, AttendeeWhereInput> | null
  }

  export type WebinarOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrder
    webinarStatus?: SortOrder
    presenterId?: SortOrder
    tags?: SortOrder
    ctaLabel?: SortOrderInput | SortOrder
    ctaType?: SortOrder
    ctaUrl?: SortOrderInput | SortOrder
    couponCode?: SortOrderInput | SortOrder
    couponEnabled?: SortOrder
    couponExpiry?: SortOrderInput | SortOrder
    lockChat?: SortOrder
    stripeProductId?: SortOrderInput | SortOrder
    aiAgentId?: SortOrderInput | SortOrder
    priceId?: SortOrderInput | SortOrder
    recordingUrl?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    attendeeId?: SortOrderInput | SortOrder
    presenter?: UserOrderByWithRelationInput
    attendances?: AttendanceOrderByRelationAggregateInput
    Attendee?: AttendeeOrderByWithRelationInput
  }

  export type WebinarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebinarWhereInput | WebinarWhereInput[]
    OR?: WebinarWhereInput[]
    NOT?: WebinarWhereInput | WebinarWhereInput[]
    title?: StringFilter<"Webinar"> | string
    description?: StringNullableFilter<"Webinar"> | string | null
    startTime?: DateTimeFilter<"Webinar"> | Date | string
    endTime?: DateTimeNullableFilter<"Webinar"> | Date | string | null
    duration?: IntFilter<"Webinar"> | number
    webinarStatus?: EnumWebinarStatusEnumFilter<"Webinar"> | $Enums.WebinarStatusEnum
    presenterId?: UuidFilter<"Webinar"> | string
    tags?: StringNullableListFilter<"Webinar">
    ctaLabel?: StringNullableFilter<"Webinar"> | string | null
    ctaType?: EnumCtaTypeEnumFilter<"Webinar"> | $Enums.CtaTypeEnum
    ctaUrl?: StringNullableFilter<"Webinar"> | string | null
    couponCode?: StringNullableFilter<"Webinar"> | string | null
    couponEnabled?: BoolFilter<"Webinar"> | boolean
    couponExpiry?: DateTimeNullableFilter<"Webinar"> | Date | string | null
    lockChat?: BoolFilter<"Webinar"> | boolean
    stripeProductId?: StringNullableFilter<"Webinar"> | string | null
    aiAgentId?: UuidNullableFilter<"Webinar"> | string | null
    priceId?: StringNullableFilter<"Webinar"> | string | null
    recordingUrl?: StringNullableFilter<"Webinar"> | string | null
    thumbnail?: StringNullableFilter<"Webinar"> | string | null
    createdAt?: DateTimeFilter<"Webinar"> | Date | string
    updatedAt?: DateTimeFilter<"Webinar"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Webinar"> | Date | string | null
    attendeeId?: UuidNullableFilter<"Webinar"> | string | null
    presenter?: XOR<UserScalarRelationFilter, UserWhereInput>
    attendances?: AttendanceListRelationFilter
    Attendee?: XOR<AttendeeNullableScalarRelationFilter, AttendeeWhereInput> | null
  }, "id">

  export type WebinarOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrder
    webinarStatus?: SortOrder
    presenterId?: SortOrder
    tags?: SortOrder
    ctaLabel?: SortOrderInput | SortOrder
    ctaType?: SortOrder
    ctaUrl?: SortOrderInput | SortOrder
    couponCode?: SortOrderInput | SortOrder
    couponEnabled?: SortOrder
    couponExpiry?: SortOrderInput | SortOrder
    lockChat?: SortOrder
    stripeProductId?: SortOrderInput | SortOrder
    aiAgentId?: SortOrderInput | SortOrder
    priceId?: SortOrderInput | SortOrder
    recordingUrl?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    attendeeId?: SortOrderInput | SortOrder
    _count?: WebinarCountOrderByAggregateInput
    _avg?: WebinarAvgOrderByAggregateInput
    _max?: WebinarMaxOrderByAggregateInput
    _min?: WebinarMinOrderByAggregateInput
    _sum?: WebinarSumOrderByAggregateInput
  }

  export type WebinarScalarWhereWithAggregatesInput = {
    AND?: WebinarScalarWhereWithAggregatesInput | WebinarScalarWhereWithAggregatesInput[]
    OR?: WebinarScalarWhereWithAggregatesInput[]
    NOT?: WebinarScalarWhereWithAggregatesInput | WebinarScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Webinar"> | string
    title?: StringWithAggregatesFilter<"Webinar"> | string
    description?: StringNullableWithAggregatesFilter<"Webinar"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"Webinar"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"Webinar"> | Date | string | null
    duration?: IntWithAggregatesFilter<"Webinar"> | number
    webinarStatus?: EnumWebinarStatusEnumWithAggregatesFilter<"Webinar"> | $Enums.WebinarStatusEnum
    presenterId?: UuidWithAggregatesFilter<"Webinar"> | string
    tags?: StringNullableListFilter<"Webinar">
    ctaLabel?: StringNullableWithAggregatesFilter<"Webinar"> | string | null
    ctaType?: EnumCtaTypeEnumWithAggregatesFilter<"Webinar"> | $Enums.CtaTypeEnum
    ctaUrl?: StringNullableWithAggregatesFilter<"Webinar"> | string | null
    couponCode?: StringNullableWithAggregatesFilter<"Webinar"> | string | null
    couponEnabled?: BoolWithAggregatesFilter<"Webinar"> | boolean
    couponExpiry?: DateTimeNullableWithAggregatesFilter<"Webinar"> | Date | string | null
    lockChat?: BoolWithAggregatesFilter<"Webinar"> | boolean
    stripeProductId?: StringNullableWithAggregatesFilter<"Webinar"> | string | null
    aiAgentId?: UuidNullableWithAggregatesFilter<"Webinar"> | string | null
    priceId?: StringNullableWithAggregatesFilter<"Webinar"> | string | null
    recordingUrl?: StringNullableWithAggregatesFilter<"Webinar"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"Webinar"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Webinar"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Webinar"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Webinar"> | Date | string | null
    attendeeId?: UuidNullableWithAggregatesFilter<"Webinar"> | string | null
  }

  export type AttendeeWhereInput = {
    AND?: AttendeeWhereInput | AttendeeWhereInput[]
    OR?: AttendeeWhereInput[]
    NOT?: AttendeeWhereInput | AttendeeWhereInput[]
    id?: UuidFilter<"Attendee"> | string
    email?: StringFilter<"Attendee"> | string
    name?: StringFilter<"Attendee"> | string
    callStatus?: EnumCallStatusEnumFilter<"Attendee"> | $Enums.CallStatusEnum
    createdAt?: DateTimeFilter<"Attendee"> | Date | string
    updatedAt?: DateTimeFilter<"Attendee"> | Date | string
    Attendance?: AttendanceListRelationFilter
    Webinar?: WebinarListRelationFilter
  }

  export type AttendeeOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    callStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Attendance?: AttendanceOrderByRelationAggregateInput
    Webinar?: WebinarOrderByRelationAggregateInput
  }

  export type AttendeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AttendeeWhereInput | AttendeeWhereInput[]
    OR?: AttendeeWhereInput[]
    NOT?: AttendeeWhereInput | AttendeeWhereInput[]
    name?: StringFilter<"Attendee"> | string
    callStatus?: EnumCallStatusEnumFilter<"Attendee"> | $Enums.CallStatusEnum
    createdAt?: DateTimeFilter<"Attendee"> | Date | string
    updatedAt?: DateTimeFilter<"Attendee"> | Date | string
    Attendance?: AttendanceListRelationFilter
    Webinar?: WebinarListRelationFilter
  }, "id" | "email">

  export type AttendeeOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    callStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttendeeCountOrderByAggregateInput
    _max?: AttendeeMaxOrderByAggregateInput
    _min?: AttendeeMinOrderByAggregateInput
  }

  export type AttendeeScalarWhereWithAggregatesInput = {
    AND?: AttendeeScalarWhereWithAggregatesInput | AttendeeScalarWhereWithAggregatesInput[]
    OR?: AttendeeScalarWhereWithAggregatesInput[]
    NOT?: AttendeeScalarWhereWithAggregatesInput | AttendeeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Attendee"> | string
    email?: StringWithAggregatesFilter<"Attendee"> | string
    name?: StringWithAggregatesFilter<"Attendee"> | string
    callStatus?: EnumCallStatusEnumWithAggregatesFilter<"Attendee"> | $Enums.CallStatusEnum
    createdAt?: DateTimeWithAggregatesFilter<"Attendee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attendee"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: UuidFilter<"Attendance"> | string
    webinarId?: UuidFilter<"Attendance"> | string
    joinedAt?: DateTimeFilter<"Attendance"> | Date | string
    leftAt?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    attendedType?: EnumAttendedTypeEnumFilter<"Attendance"> | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    attendeeId?: UuidFilter<"Attendance"> | string
    userId?: UuidNullableFilter<"Attendance"> | string | null
    user?: XOR<AttendeeScalarRelationFilter, AttendeeWhereInput>
    webinar?: XOR<WebinarScalarRelationFilter, WebinarWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    webinarId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    attendedType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendeeId?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: AttendeeOrderByWithRelationInput
    webinar?: WebinarOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    attendeeId_webinarId?: AttendanceAttendeeIdWebinarIdCompoundUniqueInput
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    webinarId?: UuidFilter<"Attendance"> | string
    joinedAt?: DateTimeFilter<"Attendance"> | Date | string
    leftAt?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    attendedType?: EnumAttendedTypeEnumFilter<"Attendance"> | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    attendeeId?: UuidFilter<"Attendance"> | string
    userId?: UuidNullableFilter<"Attendance"> | string | null
    user?: XOR<AttendeeScalarRelationFilter, AttendeeWhereInput>
    webinar?: XOR<WebinarScalarRelationFilter, WebinarWhereInput>
  }, "id" | "attendeeId_webinarId">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    webinarId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    attendedType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendeeId?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Attendance"> | string
    webinarId?: UuidWithAggregatesFilter<"Attendance"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    leftAt?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    attendedType?: EnumAttendedTypeEnumWithAggregatesFilter<"Attendance"> | $Enums.AttendedTypeEnum
    createdAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    attendeeId?: UuidWithAggregatesFilter<"Attendance"> | string
    userId?: UuidNullableWithAggregatesFilter<"Attendance"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    clerkId: string
    email: string
    profileImage: string
    stripeConnectId?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscription?: boolean
    stripeCustomerId?: string | null
    webinars?: WebinarCreateNestedManyWithoutPresenterInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    clerkId: string
    email: string
    profileImage: string
    stripeConnectId?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscription?: boolean
    stripeCustomerId?: string | null
    webinars?: WebinarUncheckedCreateNestedManyWithoutPresenterInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    stripeConnectId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: BoolFieldUpdateOperationsInput | boolean
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    webinars?: WebinarUpdateManyWithoutPresenterNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    stripeConnectId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: BoolFieldUpdateOperationsInput | boolean
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    webinars?: WebinarUncheckedUpdateManyWithoutPresenterNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    clerkId: string
    email: string
    profileImage: string
    stripeConnectId?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscription?: boolean
    stripeCustomerId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    stripeConnectId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: BoolFieldUpdateOperationsInput | boolean
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    stripeConnectId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: BoolFieldUpdateOperationsInput | boolean
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WebinarCreateInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    presenter: UserCreateNestedOneWithoutWebinarsInput
    attendances?: AttendanceCreateNestedManyWithoutWebinarInput
    Attendee?: AttendeeCreateNestedOneWithoutWebinarInput
  }

  export type WebinarUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    presenterId: string
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    attendeeId?: string | null
    attendances?: AttendanceUncheckedCreateNestedManyWithoutWebinarInput
  }

  export type WebinarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    presenter?: UserUpdateOneRequiredWithoutWebinarsNestedInput
    attendances?: AttendanceUpdateManyWithoutWebinarNestedInput
    Attendee?: AttendeeUpdateOneWithoutWebinarNestedInput
  }

  export type WebinarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    presenterId?: StringFieldUpdateOperationsInput | string
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendeeId?: NullableStringFieldUpdateOperationsInput | string | null
    attendances?: AttendanceUncheckedUpdateManyWithoutWebinarNestedInput
  }

  export type WebinarCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    presenterId: string
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    attendeeId?: string | null
  }

  export type WebinarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WebinarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    presenterId?: StringFieldUpdateOperationsInput | string
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendeeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendeeCreateInput = {
    id?: string
    email: string
    name: string
    callStatus?: $Enums.CallStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    Attendance?: AttendanceCreateNestedManyWithoutUserInput
    Webinar?: WebinarCreateNestedManyWithoutAttendeeInput
  }

  export type AttendeeUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    callStatus?: $Enums.CallStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    Webinar?: WebinarUncheckedCreateNestedManyWithoutAttendeeInput
  }

  export type AttendeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    callStatus?: EnumCallStatusEnumFieldUpdateOperationsInput | $Enums.CallStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Attendance?: AttendanceUpdateManyWithoutUserNestedInput
    Webinar?: WebinarUpdateManyWithoutAttendeeNestedInput
  }

  export type AttendeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    callStatus?: EnumCallStatusEnumFieldUpdateOperationsInput | $Enums.CallStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Attendance?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    Webinar?: WebinarUncheckedUpdateManyWithoutAttendeeNestedInput
  }

  export type AttendeeCreateManyInput = {
    id?: string
    email: string
    name: string
    callStatus?: $Enums.CallStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    callStatus?: EnumCallStatusEnumFieldUpdateOperationsInput | $Enums.CallStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    callStatus?: EnumCallStatusEnumFieldUpdateOperationsInput | $Enums.CallStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    id?: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    attendedType: $Enums.AttendedTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    user: AttendeeCreateNestedOneWithoutAttendanceInput
    webinar: WebinarCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    webinarId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    attendedType: $Enums.AttendedTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    attendeeId: string
    userId?: string | null
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedType?: EnumAttendedTypeEnumFieldUpdateOperationsInput | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: AttendeeUpdateOneRequiredWithoutAttendanceNestedInput
    webinar?: WebinarUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    webinarId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedType?: EnumAttendedTypeEnumFieldUpdateOperationsInput | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendeeId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceCreateManyInput = {
    id?: string
    webinarId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    attendedType: $Enums.AttendedTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    attendeeId: string
    userId?: string | null
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedType?: EnumAttendedTypeEnumFieldUpdateOperationsInput | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    webinarId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedType?: EnumAttendedTypeEnumFieldUpdateOperationsInput | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendeeId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WebinarListRelationFilter = {
    every?: WebinarWhereInput
    some?: WebinarWhereInput
    none?: WebinarWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WebinarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    stripeConnectId?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    subscription?: SortOrder
    stripeCustomerId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    stripeConnectId?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    subscription?: SortOrder
    stripeCustomerId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    stripeConnectId?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    subscription?: SortOrder
    stripeCustomerId?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumWebinarStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.WebinarStatusEnum | EnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.WebinarStatusEnum[] | ListEnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebinarStatusEnum[] | ListEnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumWebinarStatusEnumFilter<$PrismaModel> | $Enums.WebinarStatusEnum
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumCtaTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.CtaTypeEnum | EnumCtaTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CtaTypeEnum[] | ListEnumCtaTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CtaTypeEnum[] | ListEnumCtaTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCtaTypeEnumFilter<$PrismaModel> | $Enums.CtaTypeEnum
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type AttendeeNullableScalarRelationFilter = {
    is?: AttendeeWhereInput | null
    isNot?: AttendeeWhereInput | null
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebinarCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    webinarStatus?: SortOrder
    presenterId?: SortOrder
    tags?: SortOrder
    ctaLabel?: SortOrder
    ctaType?: SortOrder
    ctaUrl?: SortOrder
    couponCode?: SortOrder
    couponEnabled?: SortOrder
    couponExpiry?: SortOrder
    lockChat?: SortOrder
    stripeProductId?: SortOrder
    aiAgentId?: SortOrder
    priceId?: SortOrder
    recordingUrl?: SortOrder
    thumbnail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    attendeeId?: SortOrder
  }

  export type WebinarAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type WebinarMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    webinarStatus?: SortOrder
    presenterId?: SortOrder
    ctaLabel?: SortOrder
    ctaType?: SortOrder
    ctaUrl?: SortOrder
    couponCode?: SortOrder
    couponEnabled?: SortOrder
    couponExpiry?: SortOrder
    lockChat?: SortOrder
    stripeProductId?: SortOrder
    aiAgentId?: SortOrder
    priceId?: SortOrder
    recordingUrl?: SortOrder
    thumbnail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    attendeeId?: SortOrder
  }

  export type WebinarMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    webinarStatus?: SortOrder
    presenterId?: SortOrder
    ctaLabel?: SortOrder
    ctaType?: SortOrder
    ctaUrl?: SortOrder
    couponCode?: SortOrder
    couponEnabled?: SortOrder
    couponExpiry?: SortOrder
    lockChat?: SortOrder
    stripeProductId?: SortOrder
    aiAgentId?: SortOrder
    priceId?: SortOrder
    recordingUrl?: SortOrder
    thumbnail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    attendeeId?: SortOrder
  }

  export type WebinarSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumWebinarStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebinarStatusEnum | EnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.WebinarStatusEnum[] | ListEnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebinarStatusEnum[] | ListEnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumWebinarStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.WebinarStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebinarStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumWebinarStatusEnumFilter<$PrismaModel>
  }

  export type EnumCtaTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CtaTypeEnum | EnumCtaTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CtaTypeEnum[] | ListEnumCtaTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CtaTypeEnum[] | ListEnumCtaTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCtaTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.CtaTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCtaTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumCtaTypeEnumFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumCallStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatusEnum | EnumCallStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatusEnum[] | ListEnumCallStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatusEnum[] | ListEnumCallStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusEnumFilter<$PrismaModel> | $Enums.CallStatusEnum
  }

  export type AttendeeCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    callStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendeeMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    callStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendeeMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    callStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCallStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatusEnum | EnumCallStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatusEnum[] | ListEnumCallStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatusEnum[] | ListEnumCallStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.CallStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCallStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumCallStatusEnumFilter<$PrismaModel>
  }

  export type EnumAttendedTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendedTypeEnum | EnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.AttendedTypeEnum[] | ListEnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendedTypeEnum[] | ListEnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendedTypeEnumFilter<$PrismaModel> | $Enums.AttendedTypeEnum
  }

  export type AttendeeScalarRelationFilter = {
    is?: AttendeeWhereInput
    isNot?: AttendeeWhereInput
  }

  export type WebinarScalarRelationFilter = {
    is?: WebinarWhereInput
    isNot?: WebinarWhereInput
  }

  export type AttendanceAttendeeIdWebinarIdCompoundUniqueInput = {
    attendeeId: string
    webinarId: string
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    webinarId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
    attendedType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendeeId?: SortOrder
    userId?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    webinarId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
    attendedType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendeeId?: SortOrder
    userId?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    webinarId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
    attendedType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendeeId?: SortOrder
    userId?: SortOrder
  }

  export type EnumAttendedTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendedTypeEnum | EnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.AttendedTypeEnum[] | ListEnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendedTypeEnum[] | ListEnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendedTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.AttendedTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendedTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumAttendedTypeEnumFilter<$PrismaModel>
  }

  export type WebinarCreateNestedManyWithoutPresenterInput = {
    create?: XOR<WebinarCreateWithoutPresenterInput, WebinarUncheckedCreateWithoutPresenterInput> | WebinarCreateWithoutPresenterInput[] | WebinarUncheckedCreateWithoutPresenterInput[]
    connectOrCreate?: WebinarCreateOrConnectWithoutPresenterInput | WebinarCreateOrConnectWithoutPresenterInput[]
    createMany?: WebinarCreateManyPresenterInputEnvelope
    connect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
  }

  export type WebinarUncheckedCreateNestedManyWithoutPresenterInput = {
    create?: XOR<WebinarCreateWithoutPresenterInput, WebinarUncheckedCreateWithoutPresenterInput> | WebinarCreateWithoutPresenterInput[] | WebinarUncheckedCreateWithoutPresenterInput[]
    connectOrCreate?: WebinarCreateOrConnectWithoutPresenterInput | WebinarCreateOrConnectWithoutPresenterInput[]
    createMany?: WebinarCreateManyPresenterInputEnvelope
    connect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WebinarUpdateManyWithoutPresenterNestedInput = {
    create?: XOR<WebinarCreateWithoutPresenterInput, WebinarUncheckedCreateWithoutPresenterInput> | WebinarCreateWithoutPresenterInput[] | WebinarUncheckedCreateWithoutPresenterInput[]
    connectOrCreate?: WebinarCreateOrConnectWithoutPresenterInput | WebinarCreateOrConnectWithoutPresenterInput[]
    upsert?: WebinarUpsertWithWhereUniqueWithoutPresenterInput | WebinarUpsertWithWhereUniqueWithoutPresenterInput[]
    createMany?: WebinarCreateManyPresenterInputEnvelope
    set?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    disconnect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    delete?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    connect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    update?: WebinarUpdateWithWhereUniqueWithoutPresenterInput | WebinarUpdateWithWhereUniqueWithoutPresenterInput[]
    updateMany?: WebinarUpdateManyWithWhereWithoutPresenterInput | WebinarUpdateManyWithWhereWithoutPresenterInput[]
    deleteMany?: WebinarScalarWhereInput | WebinarScalarWhereInput[]
  }

  export type WebinarUncheckedUpdateManyWithoutPresenterNestedInput = {
    create?: XOR<WebinarCreateWithoutPresenterInput, WebinarUncheckedCreateWithoutPresenterInput> | WebinarCreateWithoutPresenterInput[] | WebinarUncheckedCreateWithoutPresenterInput[]
    connectOrCreate?: WebinarCreateOrConnectWithoutPresenterInput | WebinarCreateOrConnectWithoutPresenterInput[]
    upsert?: WebinarUpsertWithWhereUniqueWithoutPresenterInput | WebinarUpsertWithWhereUniqueWithoutPresenterInput[]
    createMany?: WebinarCreateManyPresenterInputEnvelope
    set?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    disconnect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    delete?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    connect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    update?: WebinarUpdateWithWhereUniqueWithoutPresenterInput | WebinarUpdateWithWhereUniqueWithoutPresenterInput[]
    updateMany?: WebinarUpdateManyWithWhereWithoutPresenterInput | WebinarUpdateManyWithWhereWithoutPresenterInput[]
    deleteMany?: WebinarScalarWhereInput | WebinarScalarWhereInput[]
  }

  export type WebinarCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutWebinarsInput = {
    create?: XOR<UserCreateWithoutWebinarsInput, UserUncheckedCreateWithoutWebinarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWebinarsInput
    connect?: UserWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutWebinarInput = {
    create?: XOR<AttendanceCreateWithoutWebinarInput, AttendanceUncheckedCreateWithoutWebinarInput> | AttendanceCreateWithoutWebinarInput[] | AttendanceUncheckedCreateWithoutWebinarInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutWebinarInput | AttendanceCreateOrConnectWithoutWebinarInput[]
    createMany?: AttendanceCreateManyWebinarInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AttendeeCreateNestedOneWithoutWebinarInput = {
    create?: XOR<AttendeeCreateWithoutWebinarInput, AttendeeUncheckedCreateWithoutWebinarInput>
    connectOrCreate?: AttendeeCreateOrConnectWithoutWebinarInput
    connect?: AttendeeWhereUniqueInput
  }

  export type AttendanceUncheckedCreateNestedManyWithoutWebinarInput = {
    create?: XOR<AttendanceCreateWithoutWebinarInput, AttendanceUncheckedCreateWithoutWebinarInput> | AttendanceCreateWithoutWebinarInput[] | AttendanceUncheckedCreateWithoutWebinarInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutWebinarInput | AttendanceCreateOrConnectWithoutWebinarInput[]
    createMany?: AttendanceCreateManyWebinarInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumWebinarStatusEnumFieldUpdateOperationsInput = {
    set?: $Enums.WebinarStatusEnum
  }

  export type WebinarUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumCtaTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.CtaTypeEnum
  }

  export type UserUpdateOneRequiredWithoutWebinarsNestedInput = {
    create?: XOR<UserCreateWithoutWebinarsInput, UserUncheckedCreateWithoutWebinarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWebinarsInput
    upsert?: UserUpsertWithoutWebinarsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWebinarsInput, UserUpdateWithoutWebinarsInput>, UserUncheckedUpdateWithoutWebinarsInput>
  }

  export type AttendanceUpdateManyWithoutWebinarNestedInput = {
    create?: XOR<AttendanceCreateWithoutWebinarInput, AttendanceUncheckedCreateWithoutWebinarInput> | AttendanceCreateWithoutWebinarInput[] | AttendanceUncheckedCreateWithoutWebinarInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutWebinarInput | AttendanceCreateOrConnectWithoutWebinarInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutWebinarInput | AttendanceUpsertWithWhereUniqueWithoutWebinarInput[]
    createMany?: AttendanceCreateManyWebinarInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutWebinarInput | AttendanceUpdateWithWhereUniqueWithoutWebinarInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutWebinarInput | AttendanceUpdateManyWithWhereWithoutWebinarInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AttendeeUpdateOneWithoutWebinarNestedInput = {
    create?: XOR<AttendeeCreateWithoutWebinarInput, AttendeeUncheckedCreateWithoutWebinarInput>
    connectOrCreate?: AttendeeCreateOrConnectWithoutWebinarInput
    upsert?: AttendeeUpsertWithoutWebinarInput
    disconnect?: AttendeeWhereInput | boolean
    delete?: AttendeeWhereInput | boolean
    connect?: AttendeeWhereUniqueInput
    update?: XOR<XOR<AttendeeUpdateToOneWithWhereWithoutWebinarInput, AttendeeUpdateWithoutWebinarInput>, AttendeeUncheckedUpdateWithoutWebinarInput>
  }

  export type AttendanceUncheckedUpdateManyWithoutWebinarNestedInput = {
    create?: XOR<AttendanceCreateWithoutWebinarInput, AttendanceUncheckedCreateWithoutWebinarInput> | AttendanceCreateWithoutWebinarInput[] | AttendanceUncheckedCreateWithoutWebinarInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutWebinarInput | AttendanceCreateOrConnectWithoutWebinarInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutWebinarInput | AttendanceUpsertWithWhereUniqueWithoutWebinarInput[]
    createMany?: AttendanceCreateManyWebinarInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutWebinarInput | AttendanceUpdateWithWhereUniqueWithoutWebinarInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutWebinarInput | AttendanceUpdateManyWithWhereWithoutWebinarInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AttendanceCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type WebinarCreateNestedManyWithoutAttendeeInput = {
    create?: XOR<WebinarCreateWithoutAttendeeInput, WebinarUncheckedCreateWithoutAttendeeInput> | WebinarCreateWithoutAttendeeInput[] | WebinarUncheckedCreateWithoutAttendeeInput[]
    connectOrCreate?: WebinarCreateOrConnectWithoutAttendeeInput | WebinarCreateOrConnectWithoutAttendeeInput[]
    createMany?: WebinarCreateManyAttendeeInputEnvelope
    connect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type WebinarUncheckedCreateNestedManyWithoutAttendeeInput = {
    create?: XOR<WebinarCreateWithoutAttendeeInput, WebinarUncheckedCreateWithoutAttendeeInput> | WebinarCreateWithoutAttendeeInput[] | WebinarUncheckedCreateWithoutAttendeeInput[]
    connectOrCreate?: WebinarCreateOrConnectWithoutAttendeeInput | WebinarCreateOrConnectWithoutAttendeeInput[]
    createMany?: WebinarCreateManyAttendeeInputEnvelope
    connect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
  }

  export type EnumCallStatusEnumFieldUpdateOperationsInput = {
    set?: $Enums.CallStatusEnum
  }

  export type AttendanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutUserInput | AttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutUserInput | AttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutUserInput | AttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type WebinarUpdateManyWithoutAttendeeNestedInput = {
    create?: XOR<WebinarCreateWithoutAttendeeInput, WebinarUncheckedCreateWithoutAttendeeInput> | WebinarCreateWithoutAttendeeInput[] | WebinarUncheckedCreateWithoutAttendeeInput[]
    connectOrCreate?: WebinarCreateOrConnectWithoutAttendeeInput | WebinarCreateOrConnectWithoutAttendeeInput[]
    upsert?: WebinarUpsertWithWhereUniqueWithoutAttendeeInput | WebinarUpsertWithWhereUniqueWithoutAttendeeInput[]
    createMany?: WebinarCreateManyAttendeeInputEnvelope
    set?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    disconnect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    delete?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    connect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    update?: WebinarUpdateWithWhereUniqueWithoutAttendeeInput | WebinarUpdateWithWhereUniqueWithoutAttendeeInput[]
    updateMany?: WebinarUpdateManyWithWhereWithoutAttendeeInput | WebinarUpdateManyWithWhereWithoutAttendeeInput[]
    deleteMany?: WebinarScalarWhereInput | WebinarScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutUserInput | AttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutUserInput | AttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutUserInput | AttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type WebinarUncheckedUpdateManyWithoutAttendeeNestedInput = {
    create?: XOR<WebinarCreateWithoutAttendeeInput, WebinarUncheckedCreateWithoutAttendeeInput> | WebinarCreateWithoutAttendeeInput[] | WebinarUncheckedCreateWithoutAttendeeInput[]
    connectOrCreate?: WebinarCreateOrConnectWithoutAttendeeInput | WebinarCreateOrConnectWithoutAttendeeInput[]
    upsert?: WebinarUpsertWithWhereUniqueWithoutAttendeeInput | WebinarUpsertWithWhereUniqueWithoutAttendeeInput[]
    createMany?: WebinarCreateManyAttendeeInputEnvelope
    set?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    disconnect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    delete?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    connect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    update?: WebinarUpdateWithWhereUniqueWithoutAttendeeInput | WebinarUpdateWithWhereUniqueWithoutAttendeeInput[]
    updateMany?: WebinarUpdateManyWithWhereWithoutAttendeeInput | WebinarUpdateManyWithWhereWithoutAttendeeInput[]
    deleteMany?: WebinarScalarWhereInput | WebinarScalarWhereInput[]
  }

  export type AttendeeCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<AttendeeCreateWithoutAttendanceInput, AttendeeUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: AttendeeCreateOrConnectWithoutAttendanceInput
    connect?: AttendeeWhereUniqueInput
  }

  export type WebinarCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<WebinarCreateWithoutAttendancesInput, WebinarUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: WebinarCreateOrConnectWithoutAttendancesInput
    connect?: WebinarWhereUniqueInput
  }

  export type EnumAttendedTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.AttendedTypeEnum
  }

  export type AttendeeUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<AttendeeCreateWithoutAttendanceInput, AttendeeUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: AttendeeCreateOrConnectWithoutAttendanceInput
    upsert?: AttendeeUpsertWithoutAttendanceInput
    connect?: AttendeeWhereUniqueInput
    update?: XOR<XOR<AttendeeUpdateToOneWithWhereWithoutAttendanceInput, AttendeeUpdateWithoutAttendanceInput>, AttendeeUncheckedUpdateWithoutAttendanceInput>
  }

  export type WebinarUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<WebinarCreateWithoutAttendancesInput, WebinarUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: WebinarCreateOrConnectWithoutAttendancesInput
    upsert?: WebinarUpsertWithoutAttendancesInput
    connect?: WebinarWhereUniqueInput
    update?: XOR<XOR<WebinarUpdateToOneWithWhereWithoutAttendancesInput, WebinarUpdateWithoutAttendancesInput>, WebinarUncheckedUpdateWithoutAttendancesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumWebinarStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.WebinarStatusEnum | EnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.WebinarStatusEnum[] | ListEnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebinarStatusEnum[] | ListEnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumWebinarStatusEnumFilter<$PrismaModel> | $Enums.WebinarStatusEnum
  }

  export type NestedEnumCtaTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.CtaTypeEnum | EnumCtaTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CtaTypeEnum[] | ListEnumCtaTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CtaTypeEnum[] | ListEnumCtaTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCtaTypeEnumFilter<$PrismaModel> | $Enums.CtaTypeEnum
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumWebinarStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebinarStatusEnum | EnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.WebinarStatusEnum[] | ListEnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebinarStatusEnum[] | ListEnumWebinarStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumWebinarStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.WebinarStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebinarStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumWebinarStatusEnumFilter<$PrismaModel>
  }

  export type NestedEnumCtaTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CtaTypeEnum | EnumCtaTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CtaTypeEnum[] | ListEnumCtaTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CtaTypeEnum[] | ListEnumCtaTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCtaTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.CtaTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCtaTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumCtaTypeEnumFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumCallStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatusEnum | EnumCallStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatusEnum[] | ListEnumCallStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatusEnum[] | ListEnumCallStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusEnumFilter<$PrismaModel> | $Enums.CallStatusEnum
  }

  export type NestedEnumCallStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatusEnum | EnumCallStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatusEnum[] | ListEnumCallStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatusEnum[] | ListEnumCallStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.CallStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCallStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumCallStatusEnumFilter<$PrismaModel>
  }

  export type NestedEnumAttendedTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendedTypeEnum | EnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.AttendedTypeEnum[] | ListEnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendedTypeEnum[] | ListEnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendedTypeEnumFilter<$PrismaModel> | $Enums.AttendedTypeEnum
  }

  export type NestedEnumAttendedTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendedTypeEnum | EnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.AttendedTypeEnum[] | ListEnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendedTypeEnum[] | ListEnumAttendedTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendedTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.AttendedTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendedTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumAttendedTypeEnumFilter<$PrismaModel>
  }

  export type WebinarCreateWithoutPresenterInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    attendances?: AttendanceCreateNestedManyWithoutWebinarInput
    Attendee?: AttendeeCreateNestedOneWithoutWebinarInput
  }

  export type WebinarUncheckedCreateWithoutPresenterInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    attendeeId?: string | null
    attendances?: AttendanceUncheckedCreateNestedManyWithoutWebinarInput
  }

  export type WebinarCreateOrConnectWithoutPresenterInput = {
    where: WebinarWhereUniqueInput
    create: XOR<WebinarCreateWithoutPresenterInput, WebinarUncheckedCreateWithoutPresenterInput>
  }

  export type WebinarCreateManyPresenterInputEnvelope = {
    data: WebinarCreateManyPresenterInput | WebinarCreateManyPresenterInput[]
    skipDuplicates?: boolean
  }

  export type WebinarUpsertWithWhereUniqueWithoutPresenterInput = {
    where: WebinarWhereUniqueInput
    update: XOR<WebinarUpdateWithoutPresenterInput, WebinarUncheckedUpdateWithoutPresenterInput>
    create: XOR<WebinarCreateWithoutPresenterInput, WebinarUncheckedCreateWithoutPresenterInput>
  }

  export type WebinarUpdateWithWhereUniqueWithoutPresenterInput = {
    where: WebinarWhereUniqueInput
    data: XOR<WebinarUpdateWithoutPresenterInput, WebinarUncheckedUpdateWithoutPresenterInput>
  }

  export type WebinarUpdateManyWithWhereWithoutPresenterInput = {
    where: WebinarScalarWhereInput
    data: XOR<WebinarUpdateManyMutationInput, WebinarUncheckedUpdateManyWithoutPresenterInput>
  }

  export type WebinarScalarWhereInput = {
    AND?: WebinarScalarWhereInput | WebinarScalarWhereInput[]
    OR?: WebinarScalarWhereInput[]
    NOT?: WebinarScalarWhereInput | WebinarScalarWhereInput[]
    id?: UuidFilter<"Webinar"> | string
    title?: StringFilter<"Webinar"> | string
    description?: StringNullableFilter<"Webinar"> | string | null
    startTime?: DateTimeFilter<"Webinar"> | Date | string
    endTime?: DateTimeNullableFilter<"Webinar"> | Date | string | null
    duration?: IntFilter<"Webinar"> | number
    webinarStatus?: EnumWebinarStatusEnumFilter<"Webinar"> | $Enums.WebinarStatusEnum
    presenterId?: UuidFilter<"Webinar"> | string
    tags?: StringNullableListFilter<"Webinar">
    ctaLabel?: StringNullableFilter<"Webinar"> | string | null
    ctaType?: EnumCtaTypeEnumFilter<"Webinar"> | $Enums.CtaTypeEnum
    ctaUrl?: StringNullableFilter<"Webinar"> | string | null
    couponCode?: StringNullableFilter<"Webinar"> | string | null
    couponEnabled?: BoolFilter<"Webinar"> | boolean
    couponExpiry?: DateTimeNullableFilter<"Webinar"> | Date | string | null
    lockChat?: BoolFilter<"Webinar"> | boolean
    stripeProductId?: StringNullableFilter<"Webinar"> | string | null
    aiAgentId?: UuidNullableFilter<"Webinar"> | string | null
    priceId?: StringNullableFilter<"Webinar"> | string | null
    recordingUrl?: StringNullableFilter<"Webinar"> | string | null
    thumbnail?: StringNullableFilter<"Webinar"> | string | null
    createdAt?: DateTimeFilter<"Webinar"> | Date | string
    updatedAt?: DateTimeFilter<"Webinar"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Webinar"> | Date | string | null
    attendeeId?: UuidNullableFilter<"Webinar"> | string | null
  }

  export type UserCreateWithoutWebinarsInput = {
    id?: string
    name: string
    clerkId: string
    email: string
    profileImage: string
    stripeConnectId?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscription?: boolean
    stripeCustomerId?: string | null
  }

  export type UserUncheckedCreateWithoutWebinarsInput = {
    id?: string
    name: string
    clerkId: string
    email: string
    profileImage: string
    stripeConnectId?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscription?: boolean
    stripeCustomerId?: string | null
  }

  export type UserCreateOrConnectWithoutWebinarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWebinarsInput, UserUncheckedCreateWithoutWebinarsInput>
  }

  export type AttendanceCreateWithoutWebinarInput = {
    id?: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    attendedType: $Enums.AttendedTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    user: AttendeeCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutWebinarInput = {
    id?: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    attendedType: $Enums.AttendedTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    attendeeId: string
    userId?: string | null
  }

  export type AttendanceCreateOrConnectWithoutWebinarInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutWebinarInput, AttendanceUncheckedCreateWithoutWebinarInput>
  }

  export type AttendanceCreateManyWebinarInputEnvelope = {
    data: AttendanceCreateManyWebinarInput | AttendanceCreateManyWebinarInput[]
    skipDuplicates?: boolean
  }

  export type AttendeeCreateWithoutWebinarInput = {
    id?: string
    email: string
    name: string
    callStatus?: $Enums.CallStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    Attendance?: AttendanceCreateNestedManyWithoutUserInput
  }

  export type AttendeeUncheckedCreateWithoutWebinarInput = {
    id?: string
    email: string
    name: string
    callStatus?: $Enums.CallStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type AttendeeCreateOrConnectWithoutWebinarInput = {
    where: AttendeeWhereUniqueInput
    create: XOR<AttendeeCreateWithoutWebinarInput, AttendeeUncheckedCreateWithoutWebinarInput>
  }

  export type UserUpsertWithoutWebinarsInput = {
    update: XOR<UserUpdateWithoutWebinarsInput, UserUncheckedUpdateWithoutWebinarsInput>
    create: XOR<UserCreateWithoutWebinarsInput, UserUncheckedCreateWithoutWebinarsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWebinarsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWebinarsInput, UserUncheckedUpdateWithoutWebinarsInput>
  }

  export type UserUpdateWithoutWebinarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    stripeConnectId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: BoolFieldUpdateOperationsInput | boolean
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutWebinarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    stripeConnectId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: BoolFieldUpdateOperationsInput | boolean
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceUpsertWithWhereUniqueWithoutWebinarInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutWebinarInput, AttendanceUncheckedUpdateWithoutWebinarInput>
    create: XOR<AttendanceCreateWithoutWebinarInput, AttendanceUncheckedCreateWithoutWebinarInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutWebinarInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutWebinarInput, AttendanceUncheckedUpdateWithoutWebinarInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutWebinarInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutWebinarInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: UuidFilter<"Attendance"> | string
    webinarId?: UuidFilter<"Attendance"> | string
    joinedAt?: DateTimeFilter<"Attendance"> | Date | string
    leftAt?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    attendedType?: EnumAttendedTypeEnumFilter<"Attendance"> | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    attendeeId?: UuidFilter<"Attendance"> | string
    userId?: UuidNullableFilter<"Attendance"> | string | null
  }

  export type AttendeeUpsertWithoutWebinarInput = {
    update: XOR<AttendeeUpdateWithoutWebinarInput, AttendeeUncheckedUpdateWithoutWebinarInput>
    create: XOR<AttendeeCreateWithoutWebinarInput, AttendeeUncheckedCreateWithoutWebinarInput>
    where?: AttendeeWhereInput
  }

  export type AttendeeUpdateToOneWithWhereWithoutWebinarInput = {
    where?: AttendeeWhereInput
    data: XOR<AttendeeUpdateWithoutWebinarInput, AttendeeUncheckedUpdateWithoutWebinarInput>
  }

  export type AttendeeUpdateWithoutWebinarInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    callStatus?: EnumCallStatusEnumFieldUpdateOperationsInput | $Enums.CallStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Attendance?: AttendanceUpdateManyWithoutUserNestedInput
  }

  export type AttendeeUncheckedUpdateWithoutWebinarInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    callStatus?: EnumCallStatusEnumFieldUpdateOperationsInput | $Enums.CallStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Attendance?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AttendanceCreateWithoutUserInput = {
    id?: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    attendedType: $Enums.AttendedTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    webinar: WebinarCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutUserInput = {
    id?: string
    webinarId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    attendedType: $Enums.AttendedTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type AttendanceCreateOrConnectWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput>
  }

  export type AttendanceCreateManyUserInputEnvelope = {
    data: AttendanceCreateManyUserInput | AttendanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WebinarCreateWithoutAttendeeInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    presenter: UserCreateNestedOneWithoutWebinarsInput
    attendances?: AttendanceCreateNestedManyWithoutWebinarInput
  }

  export type WebinarUncheckedCreateWithoutAttendeeInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    presenterId: string
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    attendances?: AttendanceUncheckedCreateNestedManyWithoutWebinarInput
  }

  export type WebinarCreateOrConnectWithoutAttendeeInput = {
    where: WebinarWhereUniqueInput
    create: XOR<WebinarCreateWithoutAttendeeInput, WebinarUncheckedCreateWithoutAttendeeInput>
  }

  export type WebinarCreateManyAttendeeInputEnvelope = {
    data: WebinarCreateManyAttendeeInput | WebinarCreateManyAttendeeInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceUpsertWithWhereUniqueWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutUserInput, AttendanceUncheckedUpdateWithoutUserInput>
    create: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutUserInput, AttendanceUncheckedUpdateWithoutUserInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutUserInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutUserInput>
  }

  export type WebinarUpsertWithWhereUniqueWithoutAttendeeInput = {
    where: WebinarWhereUniqueInput
    update: XOR<WebinarUpdateWithoutAttendeeInput, WebinarUncheckedUpdateWithoutAttendeeInput>
    create: XOR<WebinarCreateWithoutAttendeeInput, WebinarUncheckedCreateWithoutAttendeeInput>
  }

  export type WebinarUpdateWithWhereUniqueWithoutAttendeeInput = {
    where: WebinarWhereUniqueInput
    data: XOR<WebinarUpdateWithoutAttendeeInput, WebinarUncheckedUpdateWithoutAttendeeInput>
  }

  export type WebinarUpdateManyWithWhereWithoutAttendeeInput = {
    where: WebinarScalarWhereInput
    data: XOR<WebinarUpdateManyMutationInput, WebinarUncheckedUpdateManyWithoutAttendeeInput>
  }

  export type AttendeeCreateWithoutAttendanceInput = {
    id?: string
    email: string
    name: string
    callStatus?: $Enums.CallStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    Webinar?: WebinarCreateNestedManyWithoutAttendeeInput
  }

  export type AttendeeUncheckedCreateWithoutAttendanceInput = {
    id?: string
    email: string
    name: string
    callStatus?: $Enums.CallStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    Webinar?: WebinarUncheckedCreateNestedManyWithoutAttendeeInput
  }

  export type AttendeeCreateOrConnectWithoutAttendanceInput = {
    where: AttendeeWhereUniqueInput
    create: XOR<AttendeeCreateWithoutAttendanceInput, AttendeeUncheckedCreateWithoutAttendanceInput>
  }

  export type WebinarCreateWithoutAttendancesInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    presenter: UserCreateNestedOneWithoutWebinarsInput
    Attendee?: AttendeeCreateNestedOneWithoutWebinarInput
  }

  export type WebinarUncheckedCreateWithoutAttendancesInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    presenterId: string
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    attendeeId?: string | null
  }

  export type WebinarCreateOrConnectWithoutAttendancesInput = {
    where: WebinarWhereUniqueInput
    create: XOR<WebinarCreateWithoutAttendancesInput, WebinarUncheckedCreateWithoutAttendancesInput>
  }

  export type AttendeeUpsertWithoutAttendanceInput = {
    update: XOR<AttendeeUpdateWithoutAttendanceInput, AttendeeUncheckedUpdateWithoutAttendanceInput>
    create: XOR<AttendeeCreateWithoutAttendanceInput, AttendeeUncheckedCreateWithoutAttendanceInput>
    where?: AttendeeWhereInput
  }

  export type AttendeeUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: AttendeeWhereInput
    data: XOR<AttendeeUpdateWithoutAttendanceInput, AttendeeUncheckedUpdateWithoutAttendanceInput>
  }

  export type AttendeeUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    callStatus?: EnumCallStatusEnumFieldUpdateOperationsInput | $Enums.CallStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Webinar?: WebinarUpdateManyWithoutAttendeeNestedInput
  }

  export type AttendeeUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    callStatus?: EnumCallStatusEnumFieldUpdateOperationsInput | $Enums.CallStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Webinar?: WebinarUncheckedUpdateManyWithoutAttendeeNestedInput
  }

  export type WebinarUpsertWithoutAttendancesInput = {
    update: XOR<WebinarUpdateWithoutAttendancesInput, WebinarUncheckedUpdateWithoutAttendancesInput>
    create: XOR<WebinarCreateWithoutAttendancesInput, WebinarUncheckedCreateWithoutAttendancesInput>
    where?: WebinarWhereInput
  }

  export type WebinarUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: WebinarWhereInput
    data: XOR<WebinarUpdateWithoutAttendancesInput, WebinarUncheckedUpdateWithoutAttendancesInput>
  }

  export type WebinarUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    presenter?: UserUpdateOneRequiredWithoutWebinarsNestedInput
    Attendee?: AttendeeUpdateOneWithoutWebinarNestedInput
  }

  export type WebinarUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    presenterId?: StringFieldUpdateOperationsInput | string
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendeeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WebinarCreateManyPresenterInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    attendeeId?: string | null
  }

  export type WebinarUpdateWithoutPresenterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendances?: AttendanceUpdateManyWithoutWebinarNestedInput
    Attendee?: AttendeeUpdateOneWithoutWebinarNestedInput
  }

  export type WebinarUncheckedUpdateWithoutPresenterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendeeId?: NullableStringFieldUpdateOperationsInput | string | null
    attendances?: AttendanceUncheckedUpdateManyWithoutWebinarNestedInput
  }

  export type WebinarUncheckedUpdateManyWithoutPresenterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendeeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceCreateManyWebinarInput = {
    id?: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    attendedType: $Enums.AttendedTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    attendeeId: string
    userId?: string | null
  }

  export type AttendanceUpdateWithoutWebinarInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedType?: EnumAttendedTypeEnumFieldUpdateOperationsInput | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: AttendeeUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutWebinarInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedType?: EnumAttendedTypeEnumFieldUpdateOperationsInput | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendeeId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceUncheckedUpdateManyWithoutWebinarInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedType?: EnumAttendedTypeEnumFieldUpdateOperationsInput | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendeeId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceCreateManyUserInput = {
    id?: string
    webinarId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    attendedType: $Enums.AttendedTypeEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type WebinarCreateManyAttendeeInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number
    webinarStatus?: $Enums.WebinarStatusEnum
    presenterId: string
    tags?: WebinarCreatetagsInput | string[]
    ctaLabel?: string | null
    ctaType: $Enums.CtaTypeEnum
    ctaUrl?: string | null
    couponCode?: string | null
    couponEnabled?: boolean
    couponExpiry?: Date | string | null
    lockChat?: boolean
    stripeProductId?: string | null
    aiAgentId?: string | null
    priceId?: string | null
    recordingUrl?: string | null
    thumbnail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AttendanceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedType?: EnumAttendedTypeEnumFieldUpdateOperationsInput | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    webinar?: WebinarUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    webinarId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedType?: EnumAttendedTypeEnumFieldUpdateOperationsInput | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    webinarId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedType?: EnumAttendedTypeEnumFieldUpdateOperationsInput | $Enums.AttendedTypeEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WebinarUpdateWithoutAttendeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    presenter?: UserUpdateOneRequiredWithoutWebinarsNestedInput
    attendances?: AttendanceUpdateManyWithoutWebinarNestedInput
  }

  export type WebinarUncheckedUpdateWithoutAttendeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    presenterId?: StringFieldUpdateOperationsInput | string
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendances?: AttendanceUncheckedUpdateManyWithoutWebinarNestedInput
  }

  export type WebinarUncheckedUpdateManyWithoutAttendeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: IntFieldUpdateOperationsInput | number
    webinarStatus?: EnumWebinarStatusEnumFieldUpdateOperationsInput | $Enums.WebinarStatusEnum
    presenterId?: StringFieldUpdateOperationsInput | string
    tags?: WebinarUpdatetagsInput | string[]
    ctaLabel?: NullableStringFieldUpdateOperationsInput | string | null
    ctaType?: EnumCtaTypeEnumFieldUpdateOperationsInput | $Enums.CtaTypeEnum
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    couponCode?: NullableStringFieldUpdateOperationsInput | string | null
    couponEnabled?: BoolFieldUpdateOperationsInput | boolean
    couponExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockChat?: BoolFieldUpdateOperationsInput | boolean
    stripeProductId?: NullableStringFieldUpdateOperationsInput | string | null
    aiAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    recordingUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
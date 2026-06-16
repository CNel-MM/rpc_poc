type User = {
    id: string;
    name: string;
};
export declare const appRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: false;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    userList: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: User[];
        meta: object;
    }>;
    userById: import("@trpc/server").TRPCQueryProcedure<{
        input: string;
        output: User;
        meta: object;
    }>;
    userCreate: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name: string;
        };
        output: User;
        meta: object;
    }>;
}>>;
export type AppRouter = typeof appRouter;
export {};
//# sourceMappingURL=appRouter.d.ts.map
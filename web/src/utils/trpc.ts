import { Router } from "@trpc-v10-demo/api";
import { createReactQueryHooks, createReactQueryHooksProxy } from "@trpc/react";

const trpcHooks = createReactQueryHooks<Router>();

export const trpc = createReactQueryHooksProxy(trpcHooks);
export const TrpcProvider = trpcHooks.Provider;

import { trpc } from "../utils";
import { helloWorld } from "../queries";

export const rootRouter = trpc.router({ helloWorld });

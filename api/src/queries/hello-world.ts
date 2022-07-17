import { z } from "zod";
import { sleep, trpc } from "../utils";

export const helloWorld = trpc.procedure
  .input(
    z.object({
      page: z.string(),
    })
  )
  .query(async ({ input }) => {
    await sleep(2000);
    return `hello ${input.page} from the API!`;
  });

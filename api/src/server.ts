import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";

import { rootRouter } from "./routers";

const main = async (): Promise<void> => {
  const server = fastify({ maxParamLength: 5000 });

  server.register(fastifyCors, {
    origin: "http://localhost:5173",
    methods: ["GET", "OPTIONS", "POST"],
  });

  server.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: { router: rootRouter },
  });

  try {
    await server.listen({ port: 8443 }, () =>
      console.log("API listening on port 8443")
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

main();

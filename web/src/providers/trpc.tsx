import { PropsWithChildren, useRef } from "react";
import { createTRPCClient } from "@trpc/react";
import { QueryClientProvider, QueryClient } from "react-query";

import { TrpcProvider } from "../utils";

const trpcOptions = { url: "http://localhost:8443/trpc" };

type Props = PropsWithChildren<Record<string, unknown>>;

export const TrpcQueryProvider = ({ children }: Props): JSX.Element => {
  const trpcClient = useRef(createTRPCClient(trpcOptions)).current;
  const queryClient = useRef(new QueryClient()).current;

  return (
    <TrpcProvider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </TrpcProvider>
  );
};

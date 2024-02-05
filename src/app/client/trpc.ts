import { httpBatchLink } from "@trpc/client";

import { createTRPCProxyClient } from "@trpc/client";
import type { AppRouter } from "@/server";
export const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});

"use client";

import {
  QueryClient,
  QueryClientProvider,
  QueryKey,
} from "@tanstack/react-query";
import * as React from "react";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

const defaultQueryFn = async ({ queryKey }: { queryKey: QueryKey }) => {
  try {
    const { data } = await axios.get(`/api/${queryKey[0]}`);
    return data;
  } catch (error: unknown) {
    let message = "Unknown Error";
    if (error instanceof Error) message = error.message;
    toast.error(message);
  }
};

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            queryFn: defaultQueryFn,
            staleTime: 5 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

"use client";

import { ReactNode, useState } from "react";
import {
  QueryClient,
  QueryClientProvider as MaruQueryClientProvider,
} from "react-query";
import GlobalStyle from "@/styles/global";

const QueryClientProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <MaruQueryClientProvider client={queryClient}>
      <GlobalStyle />
      {children}
    </MaruQueryClientProvider>
  );
};

export default QueryClientProvider;

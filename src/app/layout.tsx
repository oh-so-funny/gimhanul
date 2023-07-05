import QueryClientProvider from "@/api/QueryClientProvider";
import { ReactNode } from "react";

export const metadata = {
  title: "김한울팀",
  description: "아개웃기다",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider>{children}</QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;

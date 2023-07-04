import color from "@/styles/color";
import { ReactNode } from "react";
import styled from "styled-components";

const Layout = ({ children }: { children: ReactNode }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;

const StyledLayout = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${color.bgColor};
`;

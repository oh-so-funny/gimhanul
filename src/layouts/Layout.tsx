import Header from "@/components/common/Header/Header";
import color from "@/styles/color";
import { ReactNode } from "react";
import styled from "styled-components";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <StyledLayout>{children}</StyledLayout>
    </>
  );
};

export default Layout;

const StyledLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color.primaryBgColor};
`;

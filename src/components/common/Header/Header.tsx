import font from "@/styles/font";
import color from "@/styles/color";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <Logo>AI 면접 코칭 서비스</Logo>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 150px;
  width: 100%;
  height: 63px;
  background-color: ${color.secondaryBgColor};
  border-bottom: 1px solid ${color.subColor};
`;

const Logo = styled.span`
  ${font.H4}
  color: ${color.white};
`;

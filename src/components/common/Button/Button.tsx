import font from "@/styles/font";
import { ReactNode, ButtonHTMLAttributes } from "react";
import color from "@/styles/color";
import styled from "styled-components";

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width?: number;
}

const Button = ({ children, width }: PropsType) => {
  return <StyledButton style={{ width }}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  ${font.btn1}
  border-radius: 8px;
  padding: 0px 16px;
  cursor: pointer;
  height: 48px;
  background-color: ${color.primaryColor};
`;

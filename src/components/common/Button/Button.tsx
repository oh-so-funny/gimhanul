import font from "@/styles/font";
import { ReactNode, ButtonHTMLAttributes } from "react";
import color from "@/styles/color";
import styled from "styled-components";

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width?: number;
  option?: "PRIMARY" | "SECONDARY";
}

const Button = ({ children, width, option = "PRIMARY" }: PropsType) => {
  return (
    <StyledButton style={{ width }} option={option}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ option: "PRIMARY" | "SECONDARY" }>`
  ${font.btn1}
  border-radius: 8px;
  padding: 0px 16px;
  cursor: pointer;
  height: 48px;
  background-color: ${(props) =>
    props.option === "PRIMARY" ? color.primaryColor : color.subColor};
`;

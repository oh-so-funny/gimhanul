import styled from "styled-components";
import { FlexPropsType } from "./Flex.type";

const Column = ({
  children,
  gap,
  justifyContent,
  alignItems,
  width,
  height,
}: FlexPropsType) => {
  return (
    <StyledColumn style={{ gap, justifyContent, alignItems, width, height }}>
      {children}
    </StyledColumn>
  );
};

export default Column;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

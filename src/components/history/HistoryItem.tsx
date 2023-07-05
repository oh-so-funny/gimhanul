import color from "@/styles/color";
import font from "@/styles/font";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const HistoryItem = () => {
  const router = useRouter();

  return (
    <StyledHistoryItem
      onClick={() =>
        router.push("/history/브라우저렌더링원리에대해서설명해보시오.")
      }
    >
      <Question>브라우저 렌더링 원리에 대해서 설명해보세요.</Question>
      <Category>프론트엔드</Category>
    </StyledHistoryItem>
  );
};

export default HistoryItem;

const StyledHistoryItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 130px;
  width: 100%;
  border-bottom: 1px solid ${color.subColor};
  padding: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${color.secondaryBgColor};
  }
`;

const Question = styled.p`
  ${font.H4}
  max-width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const Category = styled.p`
  ${font.H5}
  align-self: flex-end;
`;

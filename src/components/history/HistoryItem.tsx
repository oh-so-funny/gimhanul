import color from "@/styles/color";
import font from "@/styles/font";
import { useRouter } from "next/navigation";
import styled from "styled-components";

type Category = "FRONT_END" | "BACK_END" | "PRODUCT_DESIGNER" | "DEVOPS";

interface PropTypes {
  question: string;
  category: Category;
}

const koreanCategory = {
  FRONT_END: "프론트엔드",
  BACK_END: "백엔드",
  PRODUCT_DESIGNER: "프로덕트 디자이너",
  DEVOPS: "데브옵스",
};

const HistoryItem = ({ question, category }: PropTypes) => {
  const router = useRouter();
  console.log(category);

  return (
    <StyledHistoryItem onClick={() => router.push(`/history/${question}`)}>
      <Question>{question}</Question>
      <Category>{koreanCategory[category]}</Category>
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

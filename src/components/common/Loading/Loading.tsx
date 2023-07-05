import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import color from "@/styles/color";
import Column from "../Flex/Column";
import font from "@/styles/font";

const Loading = () => {
  return (
    <LoadingBox>
      <SpinnerBox>
        <ClipLoader color={color.primaryColor} />
        <Text>AI가 열심히 피드백 중이에요!</Text>
      </SpinnerBox>
    </LoadingBox>
  );
};

export default Loading;

const LoadingBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SpinnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  width: 300px;
  height: 200px;
  background-color: ${color.white};
  border-radius: 8px;
`;

const Text = styled.p`
  ${font.context}
  color: ${color.black};
`;

"use client";

import color from "@/styles/color";
import Layout from "@/layouts/Layout";
import styled from "styled-components";
import QuestionIcon from "@/components/common/Icons/Question";
import font from "@/styles/font";
import MikeIcon from "@/components/common/Icons/Mike";
import Button from "@/components/common/Button/Button";
import ChatGptIcon from "@/components/common/Icons/ChatGpt";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ChatGptImage from "@/assets/chat-gpt.png";
import Image from "next/image";

const InterviewPage = () => {
  const router = useRouter();
  const [onMike, setOnMike] = useState(false);
  const [review, setReview] = useState("");

  return (
    <Layout header={false}>
      <StyledInterviewPage>
        <QuestionBox>
          <QuestionIcon />
          <QuestionText>
            동등연산자과 일치연산자의 차이에 대해서 설명하시오.
          </QuestionText>
        </QuestionBox>
        <LiveAnswerTextBox>
          <Highlight>질문자의 답변:</Highlight> 어쩌구저쩌구라고 저는 생각합니다
          그래서 어쩌구 저쩌구 어쩌구저쩌구라고 저는 생각합니다 그래서 어쩌구
          저쩌어쩌구저쩌구라고 저는 생각합니다 그래서 어쩌구
          저쩌어쩌구저쩌구라고 저는 생각합니다 그래서 어쩌구 저쩌
        </LiveAnswerTextBox>

        {review.length === 0 ? (
          <MikeButtobBox>
            <MikeButton
              isClicked={onMike}
              onClick={() => setOnMike((prev) => !prev)}
            >
              <MikeIcon />
            </MikeButton>
            <MikeButtonDesc>마이크를 키고 말씀해주셔야합니다</MikeButtonDesc>
          </MikeButtobBox>
        ) : (
          <ReviewBox>
            <Image
              src={ChatGptImage}
              width={30}
              height={30}
              alt="chat-gpt-image"
            />
            <ReviewText>
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
              암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ암ㄴ엄ㄴㅇ머노럼농혼머ㅗ엄나ㅓ인ㅁ
            </ReviewText>
          </ReviewBox>
        )}
        <MoveButtonBox>
          <Button
            option="SECONDARY"
            width={100}
            onClick={() => router.push("/")}
          >
            끝내기
          </Button>
          <Button width={100} onClick={() => router.push("/interview/review")}>
            다음
          </Button>
        </MoveButtonBox>
      </StyledInterviewPage>
    </Layout>
  );
};

export default InterviewPage;

const StyledInterviewPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  width: 700px;
  height: 100%;
  padding: 50px 0px;
`;

const QuestionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 32px 0px;
  width: 100%;
  border-bottom: 1px solid ${color.subColor};
`;

const QuestionText = styled.p`
  ${font.H4}
`;

const Highlight = styled.span`
  color: ${color.primaryColor};
`;

const LiveAnswerTextBox = styled.div`
  ${font.context}
  padding: 16px;
  width: 100%;
  min-height: 200px;
  border: 1px solid ${color.subColor};
  border-radius: 8px;
`;

const MikeButtobBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const MikeButton = styled.button<{ isClicked: boolean }>`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 2px solid ${color.primaryColor};
  background-color: ${(props) => props.isClicked && color.primaryColor};
  &:hover {
    background-color: ${color.primaryColor};
  }
`;

const MikeButtonDesc = styled.p`
  ${font.context}
`;

const MoveButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ReviewBox = styled.div`
  display: flex;
  border-radius: 6px;
  width: 100%;
  min-height: 200px;
  border: 1px solid ${color.secondaryBgColor};
  padding: 16px;
  background-color: ${color.subColor};
`;

const ReviewText = styled.p`
  ${font.context}
  padding: 8px;
  white-space: pre-line;
`;

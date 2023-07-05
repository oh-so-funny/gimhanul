"use client";

import color from "@/styles/color";
import Layout from "@/layouts/Layout";
import styled from "styled-components";
import QuestionIcon from "@/components/common/Icons/Question";
import font from "@/styles/font";
import MikeIcon from "@/components/common/Icons/Mike";
import Button from "@/components/common/Button/Button";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import ChatGptImage from "@/assets/chat-gpt.png";
import useDebounce from "@/hooks/useDebounce";
import QUESTION_DATA from "@/fixtures";
// @ts-ignore
import { useSpeechRecognition } from "react-speech-kit";

const InterviewPage = () => {
  const router = useRouter();

  // path
  const pathName = usePathname();
  const category = pathName.replace("/interview/", "");

  // useState
  const [userLiveAnswer, setUserLiveAnswer] = useState("");
  const [review, setReview] = useState("");

  // debounce
  const debouncedUserLiveAnswer = useDebounce(userLiveAnswer, 1000);

  // speech
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result: string) => {
      setUserLiveAnswer(result);
    },
  });

  // get data
  const getQuestionData = () => {
    let data;
    const randomNumber = Math.floor(Math.random() * 20);

    switch (category) {
      case "FRONT_END":
        data = QUESTION_DATA.FRONT_END[randomNumber];
        break;
      case "BACK_END":
        data = QUESTION_DATA.BACK_END[randomNumber];
        break;
      case "PRODUCT_DESIGNER":
        data = QUESTION_DATA.PRODUCT_DESIGNER[randomNumber];
        break;
      case "DEVOPS":
        data = QUESTION_DATA.DEVOPS[randomNumber];
        break;
    }

    return data;
  };

  return (
    <Layout header={false}>
      <StyledInterviewPage>
        <QuestionBox>
          <QuestionIcon />
          <QuestionText>{getQuestionData()}</QuestionText>
        </QuestionBox>
        <LiveAnswerTextBox>
          {listening ? (
            <p>답변중입니다...</p>
          ) : (
            <p>
              <Highlight>질문자의 답변:</Highlight> {debouncedUserLiveAnswer}
            </p>
          )}
        </LiveAnswerTextBox>
        {review.length === 0 ? (
          <MikeButtobBox>
            <MikeButton onMouseDown={listen} onMouseUp={stop}>
              <MikeIcon />
            </MikeButton>
            <MikeButtonDesc>마이크를 꾹 누르고 말씀해주세요!</MikeButtonDesc>
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
              {review.length === 0
                ? "GPT가 열심히 답변중입니다 조금만 기다려주세요..."
                : review}
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
          {review.length === 0 ? (
            <Button
              width={100}
              onClick={() => setReview("우와 그렇게 생각했군요")}
            >
              제출
            </Button>
          ) : (
            <Button
              width={100}
              onClick={() => setReview("우와 그렇게 생각했군요")}
            >
              다음
            </Button>
          )}
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

const MikeButton = styled.button`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 2px solid ${color.primaryColor};
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
  border-radius: 8px;
  width: 100%;
  min-height: 200px;
  border: 1px solid ${color.secondaryBgColor};
  padding: 16px;
  background-color: ${color.subColor};
`;

const ReviewText = styled.p`
  ${font.context}
  padding: 5px;
  white-space: pre-line;
`;

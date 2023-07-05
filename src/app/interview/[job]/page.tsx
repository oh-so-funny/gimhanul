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
import { customAxios } from "@/api";
import Loading from "@/components/common/Loading/Loading";
import Row from "@/components/common/Flex/Row";

const InterviewPage = () => {
  const router = useRouter();

  // path
  const pathName = usePathname();
  const category = pathName.replace("/interview/", "");

  // useState
  const [reply, setReply] = useState("");
  const [review, setReview] = useState("");
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // debounce
  const debouncedUserReply = useDebounce(reply, 1000);

  // speech
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result: string) => {
      setReply(result);
    },
  });

  // get data
  useEffect(() => {
    const getQuestionData = () => {
      const randomNumber = Math.floor(Math.random() * 20);
      if (category === "FRONT_END") {
        return QUESTION_DATA.FRONT_END[randomNumber];
      }
      if (category === "BACK_END") {
        return QUESTION_DATA.BACK_END[randomNumber];
      }
      if (category === "PRODUCT_DESIGNER") {
        return QUESTION_DATA.PRODUCT_DESIGNER[randomNumber];
      }
      if (category === "DEVOPS") {
        return QUESTION_DATA.DEVOPS[randomNumber];
      }
      return "오류가 일어났어요 !";
    };
    setQuestion(getQuestionData());
  }, [question]);

  // api
  const submitToGpt = async () => {
    setIsLoading(true);
    try {
      const { data } = await customAxios.post("/api/interview", {
        question,
        reply,
      });
      setIsLoading(false);
      setReview(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <Layout header={false}>
        <StyledInterviewPage>
          <QuestionBox>
            <QuestionIcon />
            <QuestionText>{question}</QuestionText>
          </QuestionBox>
          <LiveAnswerTextBox>
            {listening ? (
              <p>답변중입니다...</p>
            ) : (
              <p>
                <Highlight>질문자의 답변:</Highlight> {debouncedUserReply}
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
              <Row alignItems="center" gap="8px">
                <Button width={100} onClick={submitToGpt}>
                  제출
                </Button>
                <Button
                  width={100}
                  onClick={() => {
                    router.push(`/interview/${category}`);
                    setReview("");
                    setQuestion("");
                  }}
                >
                  다음
                </Button>
              </Row>
            ) : (
              <Button
                width={100}
                onClick={() => {
                  router.push(`/interview/${category}`);
                  setReview("");
                  setQuestion("");
                }}
              >
                다음
              </Button>
            )}
          </MoveButtonBox>
        </StyledInterviewPage>
      </Layout>
    </>
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
  border: 1px solid ${color.secondaryBgColor};
  padding: 16px;
  background-color: ${color.subColor};
  font-weight: 500;
`;

const ReviewText = styled.p`
  ${font.context}
  padding: 5px;
  white-space: pre-line;
  font-weight: 500;
`;

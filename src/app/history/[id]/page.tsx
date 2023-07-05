"use client";

import color from "@/styles/color";
import Layout from "@/layouts/Layout";
import styled from "styled-components";
import QuestionIcon from "@/components/common/Icons/Question";
import font from "@/styles/font";
import Button from "@/components/common/Button/Button";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import ChatGptImage from "@/assets/chat-gpt.png";

const HistoryDetailPage = () => {
  const router = useRouter();

  // path
  const pathName = usePathname();
  const id = pathName.replace("/interview/", "");

  // useState
  const [question, setQuestion] = useState("");
  const [review, setReview] = useState("");

  return (
    <Layout header={false}>
      <StyledHistoryDetailPage>
        <QuestionBox>
          <QuestionIcon />
          <QuestionText>{question}</QuestionText>
        </QuestionBox>
        <ReviewBox>
          <Image
            src={ChatGptImage}
            width={30}
            height={30}
            alt="chat-gpt-image"
          />
          <ReviewText>{review}</ReviewText>
        </ReviewBox>
        <MoveButtonBox>
          <Button
            option="SECONDARY"
            width={100}
            onClick={() => router.push("/history")}
          >
            나가기
          </Button>
        </MoveButtonBox>
      </StyledHistoryDetailPage>
    </Layout>
  );
};

export default HistoryDetailPage;

const StyledHistoryDetailPage = styled.div`
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

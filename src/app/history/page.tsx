"use client";

import { customAxios } from "@/api";
import HistoryItem from "@/components/history/HistoryItem";
import Layout from "@/layouts/Layout";
import color from "@/styles/color";
import font from "@/styles/font";
import { useEffect, useState } from "react";
import styled from "styled-components";

type Category = "FRONT_END" | "BACK_END" | "PRODUCT_DESIGNER" | "DEVOPS";

const HistoryPage = () => {
  const [questions, setQuestions] = useState<
    [string, { category: Category }[]][]
  >([]);

  const getInterviews = async () => {
    const response = await customAxios.get("/api/interview");
    console.log(response.data);
    console.log(Object.entries(response.data));
    setQuestions(Object.entries(response.data));
  };
  useEffect(() => {
    getInterviews();
  }, []);
  return (
    <Layout header={true}>
      <StyledHistoryPage>
        <History>질문자의 답변 기록</History>
        <HistoryList>
          {questions.map(([qustion, interviews]) =>
            interviews.map((interview) => (
              <HistoryItem question={qustion} category={interview.category} />
            ))
          )}
          {/* <HistoryItem />
          <HistoryItem />
          <HistoryItem /> */}
        </HistoryList>
      </StyledHistoryPage>
    </Layout>
  );
};

export default HistoryPage;

const StyledHistoryPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 540px;
  height: 100%;
  padding: 50px 0px;
`;

const History = styled.p`
  ${font.H4}
  color: ${color.primaryColor};
  text-align: left;
  padding-left: 16px;
`;

const HistoryList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

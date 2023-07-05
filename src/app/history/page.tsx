"use client";

import HistoryItem from "@/components/history/HistoryItem";
import Layout from "@/layouts/Layout";
import color from "@/styles/color";
import font from "@/styles/font";
import styled from "styled-components";

const HistoryPage = () => {
  return (
    <Layout header={true}>
      <StyledHistoryPage>
        <History>질문자의 답변 기록</History>
        <HistoryList>
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
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

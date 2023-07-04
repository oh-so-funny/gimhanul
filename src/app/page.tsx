"use client";

import JobMenuItem from "@/components/main/JobMenuItem";
import Layout from "@/layouts/Layout";
import color from "@/styles/color";
import font from "@/styles/font";
import Image from "next/image";
import BannerImage from "@/assets/banner-img.svg";
import styled from "styled-components";

const JOB_LIST_DATA = [
  "프론트엔드 개발자",
  "백엔드 개발자",
  "프로덕트 디자이너",
  "데브옵스 엔지니어",
];

const MainPage = () => {
  return (
    <Layout>
      <StyledMainPage>
        <Banner>
          <IntroText>
            기술 면접도 자격증처럼
            <br />
            <Highlight>쉽게</Highlight> 준비하자
          </IntroText>
          <Image src={BannerImage} width={200} height={200} alt="banner-img" />
        </Banner>
        <JobMenuBox>
          <JobMenuLabel>직군</JobMenuLabel>
          <JobMenuList>
            {JOB_LIST_DATA.map((item) => (
              <JobMenuItem job={item} />
            ))}
          </JobMenuList>
        </JobMenuBox>
      </StyledMainPage>
    </Layout>
  );
};

export default MainPage;

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  width: 100%;
  height: 100%;
  padding: 50px 150px;
`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 250px;
  border-bottom: 1px solid ${color.subColor};
`;

const IntroText = styled.p`
  ${font.H1}
  text-align: left;
`;

const Highlight = styled.span`
  color: ${color.primaryColor};
`;

const JobMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const JobMenuLabel = styled.p`
  ${font.H4}
  color: ${color.white};
`;

const JobMenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  height: 215px;
  width: 100%;
`;

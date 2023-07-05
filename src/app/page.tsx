"use client";

import JobMenuItem from "@/components/main/JobMenuItem";
import Layout from "@/layouts/Layout";
import color from "@/styles/color";
import font from "@/styles/font";
import Image from "next/image";
import BannerImage from "@/assets/banner-img.svg";
import styled from "styled-components";

const JOB_LIST_DATA = [
  {
    job: "프론트엔드 개발자",
    path: "FRONT_END",
  },
  {
    job: "백엔드 개발자",
    path: "BACK_END",
  },
  {
    job: "프로덕트 디자이너",
    path: "PRODUCT_DESIGNER",
  },
  {
    job: "데브옵스 엔지니어",
    path: "DEVOPS",
  },
];

const MainPage = () => {
  return (
    <Layout header={true}>
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
            {JOB_LIST_DATA.map((item, index) => (
              <JobMenuItem
                key={`JobMenuItem ${index}`}
                job={item.job}
                path={item.path}
              />
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
  padding: 0px 250px;
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

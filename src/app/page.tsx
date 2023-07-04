"use client";

import ShortcutsIcon from "@/components/common/Icons/Shortcuts";
import Layout from "@/layouts/Layout";
import color from "@/styles/color";
import font from "@/styles/font";
import styled from "styled-components";

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
        </Banner>
        <JobMenuBox>
          <JobMenuLabel>직군</JobMenuLabel>
          <JobMenuList>
            <JobMenuItem>
              <JobText>프론트엔드 Developer</JobText>
              <InterviewLink>
                면접 바로가기 <ShortcutsIcon />
              </InterviewLink>
            </JobMenuItem>
            <JobMenuItem>
              <JobText>백엔드 Developer</JobText>
              <InterviewLink>
                면접 바로가기 <ShortcutsIcon />
              </InterviewLink>
            </JobMenuItem>
            <JobMenuItem>
              <JobText>프로덕트 Designer</JobText>
              <InterviewLink>
                면접 바로가기 <ShortcutsIcon />
              </InterviewLink>
            </JobMenuItem>
            <JobMenuItem>
              <JobText>Devops Engineer</JobText>
              <InterviewLink>
                면접 바로가기 <ShortcutsIcon />
              </InterviewLink>
            </JobMenuItem>
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
  gap: 50px;
  width: 100%;
  height: 100%;
  padding: 50px 150px;
`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 200px;
  border: 2px solid ${color.subColor};
  border-radius: 8px;
  padding: 0px 50px;
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

const JobMenuItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: calc(100% / 4);
  height: 100%;
  border-radius: 16px;
  padding: 16px;
  border: 2px solid ${color.subColor};
  cursor: pointer;
  &:hover {
    background-color: ${color.primaryColor};
  }
`;

const JobText = styled.p`
  ${font.H3}
`;

const InterviewLink = styled.a`
  ${font.H4}
  display: flex;
  align-items: center;
  gap: 4px;
  align-self: flex-end;
  margin-top: auto;
`;

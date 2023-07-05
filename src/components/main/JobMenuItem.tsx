import ShortcutsIcon from "../common/Icons/Shortcuts";
import color from "@/styles/color";
import font from "@/styles/font";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const JobMenuItem = ({ job }: { job: string }) => {
  const router = useRouter();
  return (
    <StyledJobMenuItem
      onClick={() => router.push(`/interview/${job.replace(" ", "")}`)}
    >
      <JobText>{job}</JobText>
      <InterviewLink>
        면접 바로가기 <ShortcutsIcon />
      </InterviewLink>
    </StyledJobMenuItem>
  );
};

export default JobMenuItem;

const StyledJobMenuItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: calc(100% / 4);
  height: 100%;
  border-radius: 16px;
  padding: 12px;
  border: 2px solid ${color.subColor};
  cursor: pointer;
  &:hover {
    border: 2px solid ${color.primaryColor};
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

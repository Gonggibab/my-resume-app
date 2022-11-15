import { setegid } from "process";
import React from "react";
import styled from "styled-components";

const mainSkills = [
  { name: "HTML5", percent: 80 },
  { name: "CSS3", percent: 70 },
  { name: "JavaScript", percent: 80 },
  { name: "TypeScript", percent: 60 },
  { name: "React", percent: 70 },
  { name: "NextJS", percent: 60 },
];

const otherSkills = [
  { name: "NodeJS", percent: 50 },
  { name: "ExpressJS", percent: 50 },
  { name: "MongoDB", percent: 30 },
  { name: "MSSQL", percent: 20 },
  { name: "Git", percent: 50 },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

const Title = styled.h1`
  margin: 2rem 0;
  font-size: 2rem;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 30%;
`;

type SkillProps = {
  percent: number;
};

const Skill = styled.div<SkillProps>`
  z-index: 1;
  position: relative;
  margin-bottom: 1rem;
  padding: 0.6rem 1rem;
  width: fit-content;
  height: fit-content;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 2rem;
  overflow: hidden;
  transition: all 0.3s ease-in;

  &:hover {
    border-color: ${({ theme }) => theme.colors.orange};

    & > div {
      width: ${(p) => p.percent}%;
    }
  }
`;

const SkillBar = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.orange};
  width: 0;
  height: 100%;
  transition: all 0.3s ease-in;
`;

type NamesProps = {
  setEmotion: React.Dispatch<React.SetStateAction<string>>;
};

const SkillNames = ({ setEmotion }: NamesProps) => {
  const checkEmotion = (percent: number) => {
    return percent > 50 ? "happy" : "sad";
  };

  const renderMainSkills = mainSkills.map((skill, idx) => (
    <Skill
      key={idx}
      percent={skill.percent}
      onMouseEnter={() => setEmotion(checkEmotion(skill.percent))}
      onMouseLeave={() => setEmotion("")}
    >
      {skill.name}
      <SkillBar></SkillBar>
    </Skill>
  ));

  const renderOtherSkills = otherSkills.map((skill, idx) => (
    <Skill
      key={idx}
      percent={skill.percent}
      onMouseEnter={() => setEmotion(checkEmotion(skill.percent))}
      onMouseLeave={() => setEmotion("")}
    >
      {skill.name}
      <SkillBar></SkillBar>
    </Skill>
  ));

  return (
    <Container>
      <Title>주요 기술</Title>
      <Skills>{renderMainSkills}</Skills>
      <Title>그 외 기술</Title>
      <Skills>{renderOtherSkills}</Skills>
    </Container>
  );
};

export default SkillNames;

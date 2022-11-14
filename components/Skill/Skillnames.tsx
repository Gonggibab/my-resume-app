import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const skills = [
  { name: "HTML5", percent: 80 },
  { name: "CSS3", percent: 70 },
  { name: "JavaScript", percent: 80 },
  { name: "TypeScript", percent: 60 },
  { name: "React", percent: 70 },
  { name: "NextJS", percent: 60 },
  { name: "NodeJS", percent: 50 },
  { name: "ExpressJS", percent: 50 },
  { name: "MongoDB", percent: 30 },
  { name: "MSSQL", percent: 20 },
  { name: "Git", percent: 50 },
];

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 50%;
`;

type SkillProps = {
  percent: number;
};

const Skill = styled.div<SkillProps>`
  z-index: 1;
  position: relative;
  margin: 1rem;
  padding: 0.6rem 1rem;
  width: fit-content;
  height: fit-content;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 2rem;
  overflow: hidden;
  transition: all 0.5s ease-in;

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
  transition: all 0.5s ease-in;
`;

const SkillNames = () => {
  const renderSkills = skills.map((skill) => (
    <Skill percent={skill.percent}>
      {skill.name}
      <SkillBar></SkillBar>
    </Skill>
  ));

  return <Container>{renderSkills}</Container>;
};

export default SkillNames;

import React, { useState } from "react";
import styled from "styled-components";

import Layout from "@/components/Layout/Layout";
import Face from "./Face";
import SkillNames from "./Skillnames";

const SkillSection = styled.section`
  position: relative;
  flex-direction: column;
  padding: 4rem;
  width: 100vw;
  height: 100vh;
`;

const Skill = () => {
  const [posX, setPosX] = useState<number>(0);
  const [posY, setPosY] = useState<number>(0);
  const [emotion, setEmotion] = useState<string>("");

  const onMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setPosX(e.clientX);
    setPosY(e.clientY);
  };

  return (
    <Layout>
      <SkillSection onMouseMove={(e) => onMouseMove(e)}>
        <SkillNames setEmotion={setEmotion} />
        <Face mouseX={posX} mouseY={posY} emotion={emotion} />
      </SkillSection>
    </Layout>
  );
};

export default Skill;

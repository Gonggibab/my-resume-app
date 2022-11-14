import React, { useCallback, useEffect, useRef, useState } from "react";
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
  const ref = useRef<HTMLDivElement>(null);
  const [posX, setPosX] = useState<number>(0);
  const [posY, setPosY] = useState<number>(0);
  const [midX, setMidX] = useState<number>(0);
  const [midY, setMidY] = useState<number>(0);

  const getSectionOffset = (section: HTMLDivElement) => {
    const { width, height } = section.getBoundingClientRect();
    setMidX(Math.round(width / 2));
    setMidY(Math.round(height / 2));
  };

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      setPosX(parseFloat(((e.clientX - midX) / midX).toFixed(2)));
      setPosY(parseFloat(((e.clientY - midY) / midY).toFixed(2)));
    },
    [midX, midY]
  );

  useEffect(() => {
    getSectionOffset(ref.current);
  }, []);

  return (
    <Layout>
      <SkillSection ref={ref} onMouseMove={(e) => onMouseMove(e)}>
        <Face posX={posX} posY={posY} />
        <SkillNames />
      </SkillSection>
    </Layout>
  );
};

export default Skill;

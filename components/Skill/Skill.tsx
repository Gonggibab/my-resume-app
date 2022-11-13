import React, { useCallback, useEffect, useRef, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import styled from "styled-components";

import Layout from "@/components/Layout/Layout";
import TrackingEye from "./Face";

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
        <h1>스킬</h1>
        <p>HTML5 / CSS3 / JavaScript / TypeScript / React / NodeJS / Git </p>
        <p>
          가운데 아래 얼굴이 해당 기술에 마우스를 올릴때마다 표정으로 숙련도를
          보여준다
        </p>
        <TrackingEye posX={posX} posY={posY} />
      </SkillSection>
    </Layout>
  );
};

export default Skill;

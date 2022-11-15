import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

type MouthProps = {
  type: string;
};

const Face = styled.div`
  position: absolute;
  bottom: 50%;
  right: 30%;
  transform: translate(50%, 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.orange};
`;

const Eyes = styled.div`
  display: flex;
  margin: 50px 0;
  width: 250px;
  height: 100px;
`;

const Eye = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Pupil = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.black};
`;

const mouthType = (type: string) => {
  switch (type) {
    case "happy":
      return css`
        width: 120px;
        height: 60px;
        border-bottom-left-radius: 60px;
        border-bottom-right-radius: 60px;
      `;
    default: {
      return css`
        width: 120px;
        height: 20px;
      `;
    }
  }
};

const Mouth = styled.div<MouthProps>`
  background-color: ${({ theme }) => theme.colors.black};
  transition: 0.5s;

  ${(p) => mouthType(p.type)}
`;

type TrackingEyeProps = {
  mouseX: number;
  mouseY: number;
  emotion: string;
};

const TrackingEye = ({ mouseX, mouseY, emotion }: TrackingEyeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [faceX, setFaceX] = useState<number>(0);
  const [faceY, setFaceY] = useState<number>(0);
  const [pupilX, setPupilX] = useState<number>(0);
  const [pupilY, setPupilY] = useState<number>(0);

  const getFacePos = (section: HTMLDivElement) => {
    const parentPos = section.parentElement.getBoundingClientRect();
    const facePos = section.getBoundingClientRect();
    setFaceX(facePos.x + Math.round(facePos.width / 2));
    setFaceY(facePos.top - parentPos.top + Math.round(facePos.height / 2));
  };

  const calcPupilPos = () => {
    setPupilX(parseFloat(((mouseX - faceX) / faceX).toFixed(2)));
    setPupilY(parseFloat(((mouseY - faceY) / faceY).toFixed(2)));
  };

  useEffect(() => {
    getFacePos(ref.current);
  }, []);

  useEffect(() => {
    calcPupilPos();
  }, [mouseX, mouseY]);

  return (
    <Face ref={ref}>
      <Eyes>
        <Eye>
          <Pupil style={{ translate: `${pupilX * 20}px ${pupilY * 20}px` }} />
        </Eye>
        <Eye>
          <Pupil style={{ translate: `${pupilX * 20}px ${pupilY * 20}px` }} />
        </Eye>
      </Eyes>
      <Mouth type={emotion} />
    </Face>
  );
};

export default TrackingEye;

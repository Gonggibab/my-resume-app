import React, { useState } from "react";
import styled, { css } from "styled-components";

type MouthProps = {
  type: string;
};

const Face = styled.div`
  position: absolute;
  bottom: 30%;
  right: 50%;
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
    case "smile":
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
  posX: number;
  posY: number;
};

const TrackingEye = ({ posX, posY }: TrackingEyeProps) => {
  const [mouthType, setMouthType] = useState<string>("default");

  return (
    <Face>
      <Eyes>
        <Eye>
          <Pupil style={{ translate: `${posX * 20}px ${posY * 20}px` }} />
        </Eye>
        <Eye>
          <Pupil style={{ translate: `${posX * 20}px ${posY * 20}px` }} />
        </Eye>
      </Eyes>
      <Mouth type={mouthType} />
    </Face>
  );
};

export default TrackingEye;

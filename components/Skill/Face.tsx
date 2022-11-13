import React from "react";
import styled from "styled-components";

const Face = styled.div`
  position: absolute;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: yellow;
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
  background-color: white;
`;

const Pupil = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: black;
`;

const Mouth = styled.div`
  width: 100px;
  height: 10px;
  background-color: black;
`;

type TrackingEyeProps = {
  posX: number;
  posY: number;
};

const TrackingEye = ({ posX, posY }: TrackingEyeProps) => {
  // console.log(posX * 100);
  // console.log(posY * 100);

  return (
    <Face>
      <Eyes>
        <Eye>
          <Pupil style={{ translate: `${posX * 30}px ${posY * 30}px` }} />
        </Eye>
        <Eye>
          <Pupil style={{ translate: `${posX * 30}px ${posY * 30}px` }} />
        </Eye>
      </Eyes>
      <Mouth />
    </Face>
  );
};

export default TrackingEye;

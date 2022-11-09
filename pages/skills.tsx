import React, { useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';

import Layout from '@/components/Layout/Layout';

const SkillSection = styled.section`
  flex-direction: column;
  padding: 4rem;
  width: 100vw;
  height: 100vh;
`;

const Article = styled.article`
  flex-direction: column;
`;

const SkillPage = () => {
  const onMouseMove = (e: MouseEvent) => {
    console.log(e.pageX);
    console.log(e.pageY);
  };

  return (
    <Layout>
      <SkillSection onMouseMove={(e) => onMouseMove(e)}>
        <h1>스킬</h1>
        <p>HTML5 / CSS3 / JavaScript / TypeScript / React / NodeJS / Git </p>
        <p>
          가운데 아래 얼굴이 해당 기술에 마우스를 올릴때마다 표정으로 숙련도를
          보여준다
        </p>
      </SkillSection>
    </Layout>
  );
};

export default SkillPage;

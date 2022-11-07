import React from 'react';
import styled from 'styled-components';

type ArticleProps = {
  locale?: string;
};

const Article = styled.article<ArticleProps>`
  flex-direction: column;
`;

const Education = () => (
  <section style={{ flexDirection: 'column' }}>
    <h1>학력</h1>
    <Article>
      <h2>컴퓨터공학 전공·학사</h2>
      <h2>University of Newcastle</h2>
      <h2>시스템 개발·경영 기술 복수전공</h2>
      <h2>2016/09 - 2022/04</h2>
    </Article>
  </section>
);

export default Education;

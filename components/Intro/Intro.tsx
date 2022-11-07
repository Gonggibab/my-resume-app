import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import TypingAnimation from './TypingAnimation';
import NameTitle from './NameTitle';

const IntroSection = styled.section`
  width: 100vw;
  height: 100vh;
`;

const Article = styled.article`
  flex-direction: column;
`;

const Intro = () => {
  const { t } = useTranslation('');

  return (
    <IntroSection>
      <Article>
        <NameTitle>{t('intro:name')}</NameTitle>
        <TypingAnimation>{t('intro:position')}</TypingAnimation>
      </Article>
    </IntroSection>
  );
};

export default Intro;

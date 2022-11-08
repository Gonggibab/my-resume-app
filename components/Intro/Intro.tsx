import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';

import RollingText from './RollingText';
import TypingAnimation from './TypingAnimation';
import LiftText from './LiftText';

const IntroSection = styled.section`
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Article = styled.article``;

const Value = styled.h3``;

const Intro = () => {
  const { t } = useTranslation('');

  return (
    <IntroSection>
      <Article>
        <RollingText text={t('intro:name')} />
        <TypingAnimation
          texts={[
            t('intro:value1'),
            t('intro:value2'),
            t('intro:value3'),
            t('intro:value4'),
          ]}
        ></TypingAnimation>
        <LiftText>{t('intro:position')}</LiftText>
      </Article>
    </IntroSection>
  );
};

export default Intro;

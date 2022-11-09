import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';

import Layout from '@/components/Layout/Layout';
import RollingText from '@/components/Index/RollingText';
import TypingAnimation from '@/components/Index/TypingAnimation';
import LiftText from '@/components/Index/LiftText';

const IntroSection = styled.section`
  flex-direction: column;
  padding: 4rem;
  width: 100vw;
  height: 100vh;
`;

const IndexPage = () => {
  const { t } = useTranslation('');

  return (
    <Layout>
      <IntroSection>
        <article>
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
        </article>
      </IntroSection>
    </Layout>
  );
};

export default IndexPage;

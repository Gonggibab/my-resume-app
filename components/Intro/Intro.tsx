import React from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import TypingAnimation from './TypingAnimation';

type ArticleProps = {
  locale?: string;
};

const Article = styled.article<ArticleProps>`
  flex-direction: column;

  & > h1 {
    font-size: ${(p) => (p.locale === 'ko' ? '16vw' : '10vw')};
    font-weight: 900;
  }
`;

const Intro = () => {
  const { locale } = useRouter();
  const { t } = useTranslation('');

  return (
    <section>
      <Article locale={locale}>
        <h1>{t('intro:name')}</h1>
        <TypingAnimation size="6vw" weight="900">
          {t('intro:position')}
        </TypingAnimation>
      </Article>
    </section>
  );
};

export default Intro;

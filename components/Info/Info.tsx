import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';

const InfoSection = styled.section`
  position: sticky;
  top: 0;
  width: 100vw;
  height: 100vh;
`;

const Article = styled.article`
  flex-direction: column;
`;

const Info = () => {
  const { t } = useTranslation('');

  return (
    <InfoSection>
      <Article>{t('intro:name')}</Article>
    </InfoSection>
  );
};

export default Info;

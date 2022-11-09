import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';

import Layout from '@/components/Layout/Layout';

const ProjectSection = styled.section`
  flex-direction: column;
  padding: 4rem;
  width: 100vw;
  height: 100vh;
`;

const Article = styled.article`
  flex-direction: column;
`;

const ProjectPage = () => (
  <Layout>
    <ProjectSection>
      <h1>프로젝트</h1>
    </ProjectSection>
  </Layout>
);

export default ProjectPage;

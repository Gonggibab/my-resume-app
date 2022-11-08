import Layout from '@/components/Layout/Layout';
import Intro from '@/components/Intro/Intro';
import Skill from '@/components/Skill';
import Language from '@/components/Language';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const IndexPage = () => (
  <Layout>
    <Intro />
    <hr />
    <Skill />
    <hr />
    <Language />
    <hr />
    <Projects />
    <hr />
    <Contact />
    <hr />
  </Layout>
);

export default IndexPage;

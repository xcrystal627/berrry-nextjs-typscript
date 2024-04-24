import { ReactElement } from 'react';

// material-ui
import { styled } from '@mui/material/styles';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import Header from 'components/landingpage/Header';
import Feature from 'components/landingpage/Feature';
import Demos from 'components/landingpage/Demos';
import Layouts from 'components/landingpage/Layouts';
import KeyFeature from 'components/landingpage/KeyFeature';
import Subscribe from 'components/landingpage/Subscribe';
import Footer from 'components/landingpage/Footer';
import Customization from 'layout/Customization';
import AppBar from 'ui-component/extended/AppBar';

const HeaderWrapper = styled('div')(({ theme }) => ({
  paddingTop: 30,
  overflowX: 'hidden',
  overflowY: 'clip',
  [theme.breakpoints.down('md')]: {
    paddingTop: 42
  }
}));

const SecondWrapper = styled('div')(({ theme }) => ({
  paddingTop: 160,
  [theme.breakpoints.down('md')]: {
    paddingTop: 60
  }
}));

// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
  <Page title="Welcome">
    <HeaderWrapper id="home">
      <AppBar />
      <Header />
    </HeaderWrapper>
    <SecondWrapper>
      <Feature />
    </SecondWrapper>
    <SecondWrapper>
      <Demos />
    </SecondWrapper>
    <SecondWrapper>
      <Layouts />
    </SecondWrapper>
    <SecondWrapper>
      <KeyFeature />
    </SecondWrapper>
    <SecondWrapper>
      <Subscribe />
    </SecondWrapper>
    <Footer />
    <Customization />
  </Page>
);

Landing.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="minimal">{page}</Layout>;
};

export default Landing;

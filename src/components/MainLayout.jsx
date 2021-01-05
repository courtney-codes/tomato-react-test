import React from 'react';
import styled from 'styled-components';
import '@fontsource/aileron';
import { ReactComponent as NutrientLogo } from '../assets/svg/NutrientLogo.svg';

const LayoutContainer = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    'header header header header'
    'nav main main aside'
    'nav main main aside';
  grid-template-rows: 80px 1fr 1fr;
  grid-template-columns: 200px 1fr 1fr minmax(auto, 1fr);
  font-family: 'Aileron', sans-serif;
  font-size: 16px;
  line-height: 1.6rem;
`;

const NutrientHeaderIcon = styled(NutrientLogo)`
  height: 4rem;
  color: #fff;
`;

const NutrientHeaderText = styled.h1`
  color: #fff;
  margin-left: 1rem;
  font-size: 1.5rem;
`;

const LayoutHeader = styled.header`
  grid-area: header;
  background: #203354;
  padding: 0 4rem;
  display: flex;
  align-items: center;
`;

const LayoutNavigation = styled.nav`
  grid-area: nav;
  background: #f0f5f8;
`;

const LayoutMainContent = styled.main`
  grid-area: main;
`;

const LayoutAside = styled.aside`
  grid-area: aside;
`;

const MainLayout = ({ children, aside }) => {
  return (
    <LayoutContainer>
      <LayoutHeader>
        <NutrientHeaderIcon />
        <NutrientHeaderText>The Nutrient Center</NutrientHeaderText>
      </LayoutHeader>
      <LayoutNavigation></LayoutNavigation>
      <LayoutMainContent>{children}</LayoutMainContent>
      <LayoutAside>{aside}</LayoutAside>
    </LayoutContainer>
  );
};

export default MainLayout;

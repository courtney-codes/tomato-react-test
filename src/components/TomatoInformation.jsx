import React from 'react';
import tomatoImage from '../assets/images/tomato.jpg';
import TomatoVariants from './TomatoVariants';
import styled from 'styled-components';
import { Header1, Header2, Body } from './typography';
import TomatoTabs from './TomatoTabs';
import '@fontsource/aileron/700.css';

const InfoContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 2rem;
`;

const TomatoInformation = () => {
  return (
    <InfoContainer>
      <Header1>The Tomato</Header1>
      <img className="Tomato__image" src={tomatoImage} alt="Tomato" />
      <section>
        <Header2>Varieties</Header2>
        <Body>
          There are around 7500 tomato varieties grown for various purposes. Heirloom tomatoes are becoming increasingly
          popular, particularly among home gardeners and organic producers, since they tend to produce more interesting
          and flavorful crops at the cost of disease resistance and productivity. In 1973, Israeli scientists developed
          the world's first long shelf-life commercial tomato varieties.
        </Body>
        <Body>Tomato varieties are roughly divided into several categories, based mostly on shape and size.</Body>
        <TomatoVariants />
        <TomatoTabs />
      </section>
    </InfoContainer>
  );
};

export default TomatoInformation;

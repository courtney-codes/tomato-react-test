import React from 'react';
import tomatoImage from '../assets/images/tomato.jpg';
import TomatoVariants from './TomatoVariants';
import styled from 'styled-components';
import '@fontsource/aileron/700.css';

const InfoContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 2rem;
`;

const Header1 = styled.h1`
  font-weight: 700;
`;

const Header2 = styled.h2`
  font-weight: 700;
`;

const Body = styled.p`
font-size: 16px;
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
        <Body>

        </Body>
        <TomatoVariants />
      </section>
    </InfoContainer>
  );
};

export default TomatoInformation;

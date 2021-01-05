import React from 'react';
import styled from 'styled-components';

const TomatoVariants = () => {
  const variants = [
    '"Slicing"/"globe" tomatoes',
    'Beefsteak tomatoes',
    'Oxheart tomatoes',
    'Plum tomatoes',
    'Pear tomatoes',
    'Cherry tomatoes',
    'Grape tomatoes',
    'Campari tomatoes'
  ];

const TomatoVariantList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TomatoVariantListItem = styled.li`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 2px solid #003366;
  border-left: 6px solid #003366;
  transition: all 0.3s ease-out;

  &:hover {
    transform: translateX(1rem);
  }

`;

  return (
    <TomatoVariantList>
      {variants.map((variant) => (
        <TomatoVariantListItem>{variant}</TomatoVariantListItem>
      ))}
    </TomatoVariantList>
  );
};

export default TomatoVariants;

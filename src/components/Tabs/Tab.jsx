import styled from 'styled-components';

const TabItem = styled.li`
  padding: 1rem 2rem;
  color: black;
`;

const Tab = ({ onClick, label }) => {
  return <TabItem onClick={onClick}>{label}</TabItem>;
};

export default Tab;

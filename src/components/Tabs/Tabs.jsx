import React, { useState } from 'react';
import Tab from './Tab';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const onClickTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul>
        {children.map((child) => {
          return <Tab></Tab>;
        })}
      </ul>
    </div>
  );
};

export default Tabs;

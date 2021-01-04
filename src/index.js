import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './components/MainLayout';
import NutritionSidebar from './components/NutritionSidebar';
import TomatoInformation from './components/TomatoInformation';
import ContactForm from './components/ContactForm';

import './styles.css';

function Tomato() {
  return (
    <MainLayout aside={<NutritionSidebar />}>
      <TomatoInformation />
      <ContactForm />
    </MainLayout>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Tomato />, rootElement);

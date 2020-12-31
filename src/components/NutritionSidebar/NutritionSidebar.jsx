import React from 'react';

const NutritionSidebar = () => {
  return (
    <div>
      <h2>Red tomatoes, raw</h2>
      <span>Nutritional values per 100g (3.5oz)</span>
      <table>
        <tr>
          <td>Energy</td>
          <td>74 kJ (18 kcal)</td>
        </tr>
        <tr>
          <td>Carbohydrates</td>
          <td>3.9g</td>
        </tr>
        <tr>
          <td>Sugars</td>
          <td>2.6g</td>
        </tr>
        <tr>
          <td>Dietary fiber</td>
          <td>1.2g</td>
        </tr>
        <tr>
          <td>Fat</td>
          <td>0.2g</td>
        </tr>
        <tr>
          <td>Protein</td>
          <td>0.9g</td>
        </tr>
        <tr>
          <td>Water</td>
          <td>94.5g</td>
        </tr>
        <tr>
          <td>Vitamin A equiv.</td>
          <td>42 µg</td>
        </tr>
        <tr>
          <td>Lutein and Zeaxanthin</td>
          <td>123 µg</td>
        </tr>
        <tr>
          <td>Vitamin C</td>
          <td>14 mg</td>
        </tr>
        <tr>
          <td>Vitamin E</td>
          <td>0.54 mg</td>
        </tr>
        <tr>
          <td>Potassium</td>
          <td>237 mg</td>
        </tr>
      </table>
      <span>Percentages are relative to US recommendations for adults.</span>
      <span>Source: <a href="https://fdc.nal.usda.gov/">USDA Nutrient Database</a></span>
    </div>
  );
};

export default NutritionSidebar;

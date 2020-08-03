import React from 'react';

const RecomendedCards = () => (
  <div>
    <h2>Recomendadas</h2>
    {recomendedData.map((card, index) => {
      <div data-testid={`${index}-recomendation-card`}>
        <img src={card.image}></img>
        <h2>{card.category}</h2>
        <h1 data-tesid={`${index}-recomendation-title`}>{card.title}</h1>
      </div>;
    })}
    ;
  </div>
);

export default RecomendedCards;

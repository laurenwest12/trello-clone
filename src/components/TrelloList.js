import React from 'react';
import TrelloCard from './TrelloCard';

const TrelloList = ({ title, cards }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      {cards.map(({ id, text }) => (
        <TrelloCard key={id} text={text} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    padding: 8,
    'margin-right': 8,
  },
};

export default TrelloList;

import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';

const TrelloList = ({ id, title, cards }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      {cards &&
        cards.map(({ id, text }) => <TrelloCard key={id} text={text} />)}
      <TrelloActionButton id={id} />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8,
    height: '100%',
  },
};

export default TrelloList;

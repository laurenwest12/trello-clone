import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import { Droppable } from 'react-beautiful-dnd';

const TrelloList = ({ id, title, cards }) => {
  return (
    <Droppable droppableId={String(id)}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
          <h4>{title}</h4>
          {cards &&
            cards.map((card, index) => (
              <TrelloCard
                key={card.id}
                text={card.text}
                id={card.id}
                index={index}
              />
            ))}
          <TrelloActionButton id={id} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
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

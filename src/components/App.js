import React, { Component } from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd';
import { sortCard } from '../actions/cardsActions';

class App extends Component {
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    console.log(destination);

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sortCard(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  render() {
    const { lists, cards } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <header className="App-header">
            <h1>Hello</h1>
            <div style={styles.listsContainer}>
              {lists.map(({ id, title }) => (
                <TrelloList
                  key={id}
                  id={id}
                  title={title}
                  cards={cards.filter(({ listId }) => listId === id)}
                />
              ))}
              <TrelloActionButton list />
            </div>
          </header>
        </div>
      </DragDropContext>
    );
  }
}

const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
};

const mapStateToProps = ({ lists, cards }) => ({
  lists,
  cards,
});

export default connect(mapStateToProps)(App);

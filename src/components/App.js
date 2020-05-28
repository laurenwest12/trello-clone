import React, { Component } from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd';
import { sortCard } from '../actions/listsActions';

class App extends Component {
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

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
              {lists.map(({ id, title, cards }) => (
                <TrelloList key={id} id={id} title={title} cards={cards} />
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

const mapStateToProps = ({ lists }) => ({
  lists,
});

export default connect(mapStateToProps)(App);

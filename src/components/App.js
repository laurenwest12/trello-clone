import React, { Component } from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd';

class App extends Component {
  render() {
    const { lists, cards } = this.props;

    const onDragEnd = () => {
      //reordering logic
    };

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

import React, { Component } from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello</h1>
          <div style={styles.listsContainer}>
            {lists.map(({ id, title, cards }) => (
              <TrelloList key={id} title={title} cards={cards} />
            ))}
            <TrelloActionButton list />
          </div>
        </header>
      </div>
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

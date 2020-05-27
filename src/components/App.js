import React, { Component } from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello</h1>
          {lists.map(({ id, title, cards }) => (
            <TrelloList key={id} title={title} cards={cards} />
          ))}
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ lists }) => ({
  lists,
});

export default connect(mapStateToProps)(App);

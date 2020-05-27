import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'react-uuid';

import { Icon, Card, Button } from '@material-ui/core/';
import TextArea from 'react-textarea-autosize';
import { addList } from '../actions/listsActions';
import { addCard } from '../actions/cardsActions';

class TrelloActionButton extends React.Component {
  state = {
    formOpen: false,
    text: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      text: target.value,
    });
  };

  handleSubmit = (e) => {
    const { list } = this.props;
    e.preventDefault();

    list
      ? this.props.addList({
          title: this.state.text,
          id: uuid(),
        })
      : this.props.addCard({
          id: uuid(),
          text: this.state.text,
          listId: this.props.id,
        });
    // : this.props.addCard({
    //     id: uuid(),
    //     text: this.state.text,
    //     listId: this.props.id,
    //   });

    this.setState({
      formOpen: false,
      text: '',
    });
  };

  openForum = () => {
    this.setState({
      formOpen: true,
    });
  };

  closeForm = () => {
    this.setState({
      formOpen: false,
    });
  };

  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? 'Add another list' : 'Add another card';
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? 'white' : 'inherit';
    const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit';

    return (
      <div
        onClick={() => this.openForum()}
        style={{
          ...styles.buttonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  renderForm = () => {
    const { id, list } = this.props;

    const placeholder = list
      ? 'Enter list title'
      : 'Enter a title for this card';
    const buttonTitle = list ? 'Add List' : 'Add Card';

    return (
      <div>
        <Card
          style={{
            minHeight: 80,
            minWidth: 272,
            padding: '6px 8px 2px',
          }}
        >
          <TextArea
            placeholder={placeholder}
            autoFocus
            // onBlur={() => this.closeForm()}
            value={this.state.text}
            onChange={this.handleChange}
            style={{
              overflow: 'hidden',
              resize: 'none',
              width: '100%',
              outline: 'none',
              border: 'none',
            }}
          />
        </Card>

        <div style={styles.formButtonGroup}>
          <Button
            variant="contained"
            style={{ color: 'white', backgroundColor: '#5aac44' }}
            onClick={this.handleSubmit}
          >
            {buttonTitle}
          </Button>

          <Icon style={{ marginLeft: 8, cursor: 'pointer' }}>close</Icon>
        </div>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  buttonGroup: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10,
  },
  formButtonGroup: {
    marginTop: 8,
    display: 'flex',
    alignItems: 'center',
  },
};

const mapDispatchToProps = (dispatch) => {
  return {
    addList: (list) => dispatch(addList(list)),
    addCard: (card) => dispatch(addCard(card)),
  };
};

export default connect(null, mapDispatchToProps)(TrelloActionButton);

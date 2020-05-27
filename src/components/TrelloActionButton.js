import React, { Component } from 'react';
import { Icon, Card, Button } from '@material-ui/core/';
import TextArea from 'react-textarea-autosize';

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
    const { list } = this.props;

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
            onBlur={() => this.closeForm()}
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

export default TrelloActionButton;

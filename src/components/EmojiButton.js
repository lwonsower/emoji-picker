import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Button = styled.button`
  background-color: #000;
  font-family: helvetica;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  padding: 10px;
  border-radius: 5px 0px 5px 0px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  &:focus {
    outline: none;
  }
`;

class EmojiButton extends Component {
  render() {
    return (
      <div className="emoji-button">
        <Button type="button">:)</Button>
      </div>
    );
  }
}

export default connect()(EmojiButton);

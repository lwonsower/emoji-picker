import React, { Component } from "react";
import "./App.css";
import { EmojiButton, EmojiDisplayer, EmojiPicker, Header } from "./components";
import { connect } from "react-redux";
import styled from "styled-components";

const AppRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class App extends Component {
  onAppClick = (evt) => {
    if (this.props.showPicker) {
      this.props.hidePicker();
    }
  };

  render() {
    return (
      <AppRoot className="App">
        <Header />
        <EmojiDisplayer />
        <EmojiPicker target={<EmojiButton />} />
      </AppRoot>
    );
  }
}
export default connect()(App);

import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Root = styled.div`
  color: #fff;
  width: 100%;
  display: flex;
  padding-top: 10px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 24px;
`;

const Text = styled.div`
  background-color: #000;
  font-family: helvetica;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  font-size: 30px;
  padding: 2px 8px;
  border-radius: 5px 0px 5px 0px;
  margin-left: 10px;
`;

const Header = () => (
  <Root>
    <Text>Lucy's Emoji Picker</Text>
  </Root>
);

export default connect()(Header);

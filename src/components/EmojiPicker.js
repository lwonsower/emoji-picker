import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import TetherComponent from "react-tether";
import styled from "styled-components";

import VisibleEmojis from "./VisibleEmojis";

const DropDown = styled.div`
  width: 310px;
  height: 400px;
  overflow: scroll;
  background-color: #fff;
  border: solid 1px #c1c1c1;
  border-radius: 5px;
  padding: 3px;
  z-index: 10;
`;

const NavigationBar = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 0px;
`;

const SearchBar = styled.input`
  width: 100%;
  margin: 0px 3px;
  border: solid 1px #c1c1c1;
  height: 24px;
  border-radius: 5px;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;

const EmojiPicker = ({ target }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchBarText, setSearchBarText] = useState("");
  const buttonRef = useRef();
  const dropDownRef = useRef();

  useEffect(() => {
    const setDropdownstatus = (e) => {
      if (
        (buttonRef.current && buttonRef.current.contains(e.target)) ||
        (dropDownRef.current && dropDownRef.current.contains(e.target))
      ) {
        return;
      } else {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", (e) => setDropdownstatus(e));

    return () => {
      document.removeEventListener("mousedown", (e) => setDropdownstatus(e));
    };
  }, []);

  return (
    <div ref={buttonRef}>
      <TetherComponent
        attachment="top right"
        renderTarget={(ref) => (
          <div ref={ref} onClick={() => setIsOpen(!isOpen)}>
            {target}
          </div>
        )}
        renderElement={(ref) =>
          isOpen && (
            <div ref={ref}>
              <DropDown ref={dropDownRef}>
                <NavigationBar>
                  <SearchBar
                    type="text"
                    placeholder="Search emojis!"
                    value={searchBarText}
                    onChange={(e) => setSearchBarText(e.target.value)}
                  />
                </NavigationBar>
                <VisibleEmojis
                  searchBarText={searchBarText}
                  setIsOpen={setIsOpen}
                />
              </DropDown>
            </div>
          )
        }
        targetOffset={"0px 48px"}
        optimizations={{
          moveElement: true,
        }}
      />
    </div>
  );
};

export default connect()(EmojiPicker);

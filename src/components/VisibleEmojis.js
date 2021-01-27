import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import unicodeMap from "emoji-unicode-map";
import nameMap from "emoji-name-map";

import { setEmoji } from "../redux/actions.js";
import { emojis } from "./emojis";

const EmojiDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  height: 28px;
  width: 28px;
  padding: 2px;
  margin: 1px;
  border-radius: 2px 2px 2px 2px;
  cursor: pointer;
  &:hover {
    background-color: #e5e5e5;
  }
`;

const EmojiSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: #fff;
`;

const EmojiPicker = ({ searchBarText, setIsOpen, setEmoji }) => {
  const { activity, flags, foods, nature, objects, people, symbols } = emojis;
  const searchAbleEmojis = Object.keys(emojis).reduce((acc, key) => {
    const emojisByName = emojis[key].map((emoji) => unicodeMap.get(emoji));
    return acc.concat(emojisByName);
  }, []);

  const emojiMapper = (set, sectionName) => (
    <div>
      <div>{sectionName}</div>
      <EmojiSection>
        {set.map((item, i) => (
          <EmojiDiv
            key={i}
            onClick={() => {
              setEmoji(item);
              setIsOpen(false);
            }}
          >
            {item}
          </EmojiDiv>
        ))}
      </EmojiSection>
    </div>
  );

  const visibleEmojis = searchBarText.length ? (
    <>
      {emojiMapper(
        searchAbleEmojis
          .filter((emoji) => emoji && emoji.includes(searchBarText.trim()))
          .map((emojiName) => {
            return nameMap.get(emojiName);
          }),
        "Search Results"
      )}
    </>
  ) : (
    <>
      {emojiMapper(people, "Smileys & People")}
      {emojiMapper(nature, "Nature & Animals")}
      {emojiMapper(foods, "Food & Drink")}
      {emojiMapper(activity, "Activities")}
      {emojiMapper(objects, "Objects")}
      {emojiMapper(symbols, "Symbols")}
      {emojiMapper(flags, "Flags")}
    </>
  );

  return <div>{visibleEmojis}</div>;
};

const mapDispatchToProps = (dispatch) => ({
  setEmoji: (data) => {
    dispatch(setEmoji(data));
  },
});

export default connect(null, mapDispatchToProps)(EmojiPicker);

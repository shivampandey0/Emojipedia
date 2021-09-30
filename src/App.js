import React, { useState } from "react";

import "./styles.css";

var color = "green";
var appName = "Emojipedia";

const emojiDictionary = {
  "😂": "Laughing",
  "✌️": "Victory",
  "❤️": "Heart",
  "🤔": "Thinking",
  "🥳": "Party",
  "👌": "Good",
  "😭": "Crying",
  "😗": "Kissing Face",
  "😉": "Winking Face",
  "🤩": "Star-Struck",
  "🤗": "Hugging Face",
  "🤫": "Shushing Face"
};

export default function App() {
  var emojiList = Object.keys(emojiDictionary);
  var [userInput, setUserInput] = useState("");

  function inputChangeHandler(event) {
    userInput = event.target.value;

    let meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have it in our DB";
    }

    if (userInput === "") {
      meaning = "";
    }

    setUserInput(meaning);
  }

  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji];
    setUserInput(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: color }}>{appName}</h1>
      <input onChange={inputChangeHandler}></input>

      <div style={{ padding: "1rem" }}>{userInput}</div>

      <h3>emojis we know</h3>
      <div className="emoji-box">
        {emojiList.map((emoji) => {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              key={emoji}
              style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}

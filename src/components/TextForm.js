import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    console.log("uppercase was clicked");
    let upperText = text.toUpperCase();
    setText(upperText);
  };
  const handleDownClick = () => {
    console.log("lowercase was clicked");
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div>
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          onChange={handleOnChange}
          rows="8"
        ></textarea>
        <br />
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Upper case
        </button>
        <br />
        <br />
        <button className="btn btn-primary" onClick={handleDownClick}>
          Convert to Lower case
        </button>
      </div>
    </div>
  );
}

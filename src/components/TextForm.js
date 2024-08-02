import React, { useState } from "react";

export default function TextForm(props) {
  const [myStyle, setMyStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const [btnText, setBtnText] = useState("Enable dark mode");

  const toggleStyle = () => {
    if (myStyle.backgroundColor === "white") {
      setMyStyle({
        backgroundColor: "black",
        color: "white",
    });
    setBtnText("enable light mode");
    } else {
      setMyStyle({
        backgroundColor: "white",
        color: "black",
      });
      setBtnText("enable Dark mode");

    }
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    // console.log("uppercase was clicked");
    let upperText = text.toUpperCase();
    setText(upperText);
  };
  const handleDownClick = () => {
    // console.log("lowercase was clicked");
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };
  const handleClearClick = () => {
    // console.log("lowercase was clicked");
    let lowerText = "";
    setText(lowerText);
  };
  const [text, setText] = useState(" ");
  return (
    <>
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
          <button className="btn btn-primary" style={myStyle} onClick={handleUpClick}>
            Convert to Upper case
          </button>
          <button className="btn btn-primary mx-1"  style={myStyle} onClick={handleDownClick}>
            Convert to Lower case
          </button>
          <button
            className="btn btn-primary"
            style={myStyle}
            onClick={handleClearClick}
          >
            Clear
          </button>
          <br />
          <button onClick={toggleStyle}
            className="btn btn-primary my-2" style={myStyle}
         
            type="button"
          >
            {btnText}
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary </h1>
        <p>
          Total {text.split(" ").length} words and {text.length} characters
        </p>
        <p>It will take {0.008 * text.split(" ").length} min to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

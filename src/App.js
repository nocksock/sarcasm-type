import React, { useEffect } from "react";
import "./styles.css";

const makeSarcastic = (string) =>
  string
    .toLowerCase()
    .split("")
    .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c))
    .join("");

export default function App() {
  const [value, setValue] = React.useState("");
  const changeHandler = (e) => setValue(makeSarcastic(e.target.value));
  const textarea = React.createRef();

  useEffect(() => textarea.current && textarea.current.focus());

  return (
    <div className="App">
      <textarea
        ref={textarea}
        className="sarcastic-input"
        placeholder={makeSarcastic("super useful")}
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
}

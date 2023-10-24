import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy="false"></Smiley>;
}

export function Smiley({ isHappy }) {
  return <div>{isHappy == "true" ? "😊" : "😩"}</div>;
}

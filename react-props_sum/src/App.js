import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={2} valueB={3}></Sum>;
}

export function Sum({ valueA, valueB }) {
  return (
    <div>
      {valueA} + {valueB} = {valueA + valueB}
    </div>
  );
}

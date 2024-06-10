import "./App.css";
import React, { useState } from "react";
import CalcButton from "./components/CalcButton";
import CalcBox from "./components/CalcBox";

export default function App() {
  const [value, setValue] = useState("");
  const buttons = [
    // "C", "Del", "^", "/",
    // "1", "2", "3", "*",
    // "4", "5", "6", "+",
    // "7", "8", "9", "-",
    // "00", "0", ".", "=",
    {
      id: "1",
      value: "C",
      function: (onClick = (e) => setValue("")),
    },
    {
      id: "2",
      value: "Del",
      function: (onClick = (e) => setValue(value.slice(0, -1))),
    },
    {
      id: "3",
      value: "^",
      function: (onClick = (e) => setValue(value + e.target.value)),
    },
    {
      id: "4",
      value: "/",
      function: (onClick = (e) => setValue(value + e.target.value)),
    },
    {
      id: "5",
      value: "1",
      function: (onClick = (e) => setValue(value + e.target.value)),
    },
    {
      id: "6",
      value: "2",
      function: (onClick = (e) => setValue(value + e.target.value)),
    },
    {
      id: "7",
      value: "3",
      function: (onClick = (e) => setValue(value + e.target.value)),
    },
    {
      id: "8",
      value: "*",
      function: (onClick = (e) => setValue(value + e.target.value)),
    },
    {
      id: "9",
      value: "4",
      function: (onClick = (e) => setValue(value + e.target.value)),
    },
    {
      id: "10",
      value: "5",
      function: (onClick = (e) => setValue(value + e.target.value)),
    },
    {
      id: "11",
      value: "6",
      function: (onClick = (e) => setValue(value + e.target.value)),
    },
    {
      id: "12",
      value: "+",
      function: (onClick = (e) => setValue(value + e.target.value)),
    },
    {
      id: "13",
      value: "7",
      function: (onClick = (e) => setValue(value + e.target.value)),
    },
    {
      id: "14",
      value: "8",
      function: (onClick = (e) => setValue(value + e.target.value)),
    },
    {
      id: "15",
      value: "9",
      function: (onClick = (e) => setValue(value + e.target.value)),
    },
    {
      id: "16",
      value: "-",
      function: (onClick = (e) => setValue(value + e.target.value)),
    },
    {
      id: "17",
      value: "00",
      function: (onClick = (e) => setValue(value + e.target.value)),
    },
    {
      id: "18",
      value: "0",
      function: (onClick = (e) => setValue(value + e.target.value)),
    },
    {
      id: "19",
      value: ".",
      function: (onClick = (e) => setValue(value + e.target.value)),
    },
    {
      id: "20",
      value: "=",
      function: (onClick = (e) => setValue(eval(value))),
    },
  ];
  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} />
          </div>
          <div>
            <CalcBox buttons={buttons} />
          </div>
        </form>
      </div>
    </div>
  );
}

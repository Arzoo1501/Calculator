import React from "react";
import { input } from "semantic-ui-react";

function CalcButton(props) {
  const { value, onClick = (x) => setValue(value + x.target.value) } = props;
  return <input type="button" value={value} onClick={onClick} />;
}
export default CalcButton;

import React from "react";
import CalcButton from "./CalcButton";
import { Container } from "semantic-ui-react";
function CalcBox({ buttons }) {
  return (
    <div>
      {buttons.map((button, index) =>
        index % 4 === 0 ? (
          <div key={index}>
            {buttons.slice(index, index + 4).map((button, subIndex) => (
              <CalcButton
                key={subIndex}
                value={button.value}
                onClick={button.function}
              />
            ))}
          </div>
        ) : null
      )}
    </div>
  );
}
export default CalcBox;

import React from "react";
import { forwardRef } from "react";

const CreditCardInput = forwardRef(
  ({ onChangeHandler, onBackSpacedHandler, maxLength }, ref) => {
    const handleonKeyUp = (e) => {
      if (e.keyCode === 8) {
        onBackSpacedHandler(e);
      } else {
        onChangeHandler(e);
      }
    };

    return (
      <>
        <input ref={ref} maxLength={maxLength} onKeyUp={handleonKeyUp} />
      </>
    );
  }
);

export default CreditCardInput;

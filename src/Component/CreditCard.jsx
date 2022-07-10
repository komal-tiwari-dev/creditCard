import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRef } from "react";
import CreditCardInput from "./CreditCardInput";

const CreditCard = ({ length, setCardNum, maxLength }) => {
  const inputRef = useRef([]);
  const [inputBoxLength] = useState(new Array(length).fill(1));
  const [inputBoxValue, setInputBoxValue] = useState(
    new Array(length).fill("")
  );

  const handleOnChange = (e, index) => {
    inputBoxValue[index] = e.target.value;
    setInputBoxValue(inputBoxValue);

    if (e.target.value.length > length - 1 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    setCardNum(inputBoxValue.join(""));
  };

  const handleBackSpace = (e, index) => {
    if (index > 0 && e.target.value.length <= 0) {
      console.log("In BackSpace Function");
      inputRef.current[index - 1].focus();
    }
    inputBoxValue[index] = e.target.value;
    setInputBoxValue(inputBoxValue);
    setCardNum(inputBoxValue.join(""));
  };

  return (
    <div>
      {inputBoxLength.map((item, index) => {
        return (
          <CreditCardInput
            key={index}
            ref={(element) => {
              inputRef.current[index] = element;
            }}
            maxLength={maxLength}
            onChangeHandler={(e) => handleOnChange(e, index)}
            onBackSpacedHandler={(e) => handleBackSpace(e, index)}
          ></CreditCardInput>
        );
      })}
    </div>
  );
};

CreditCard.propTypes = {
  length: PropTypes.number,
  setCardNum: PropTypes.func,
  maxLength: PropTypes.number,
};
export default CreditCard;

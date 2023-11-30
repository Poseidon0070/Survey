import React, { useState, useEffect } from "react";

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue("");
  }, [props.id]);

  const answerHandler = (event) => {
    setInputValue(event.target.value);
    props.onAnswer(event.target.value);
  };

  let inputDiv;

  if (props.description.type === 'number') {
    const max = props.description.max;
    const arr = Array.from({ length: max }, (_, index) => index + 1);
    inputDiv = arr.map((rating) => (
      <span key={rating}>
        <label htmlFor={`${props.id}-${rating}`}>{rating}</label>
        <input
          id={`${props.id}-${rating}`}
          type="radio"
          value={rating.toString()}
          checked={props.description.type === 'number' && inputValue === rating.toString()}
          onChange={answerHandler}
        />
      </span>
    ));
  }

  if (props.description.type === 'text') {
    inputDiv = (
      <div>
        <label htmlFor={props.id} className="fw-bold fs-5 me-3 text-danger"></label>
        <input
          id={props.id}
          className="rounded-1"
          value={inputValue}
          onChange={answerHandler}
        />
      </div>
    );
  }

  return (
    <div>
      <p>{props.question}</p>
      {inputDiv}
    </div>
  );
};

export default Input;
    
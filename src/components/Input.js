import React, { useState, useEffect } from "react";

const Input = (props) => {
  const [inputValue, setInputValue] = useState("2");
  console.log(props.id)
  console.log(Object.keys(props.answers))

  useEffect(() => {
    if(Object.keys(props.answers) && (props.id-1) in Object.keys(props.answers)){
      setInputValue(props.answers[props.id-1])
    }else{
      setInputValue("");
    }
  }, [props.id, props.answers]);

  const answerHandler = (event) => {
    setInputValue(event.target.value);
    props.onAnswer(event.target.value);
  };

  let inputDiv; 

  if (props.description.type === 'number') {
    const max = props.description.max;
    const arr = Array.from({ length: max }, (_, index) => index + 1);
    inputDiv = (
        arr.map((rating) => (
        <div key={rating} className="mx-2">
            <label htmlFor={`${props.id}-${rating}`} className="fs-1 ms-2">{rating}</label>
            <div>
            <input
                className="form-check-input radio"
                style={{height:"40px", width:"40px"}}
                id={`${props.id}-${rating}`}
                type="radio"
                value={rating.toString()}
                checked={props.description.type === 'number' && inputValue === rating.toString()}
                onChange={answerHandler}
                />
            </div>
        </div>
    )));
  }

  if (props.description.type === 'text') {
    inputDiv = (
      <div>
        <textarea
          style={{height:"200px", width:"65vw", resize:"none"}}
          id={props.id}
          className="form-check-input rounded-2"
          value={inputValue}
          onChange={answerHandler}
        />
      </div>
    );
  }

  return (
    <div>
      <div style={{height:"100px"}} className="fs-4 ms-4">
        <p>{props.question}</p>
      </div>
      <div className="d-flex flex-wrap justify-content-center" style={{height:"200px"}}>
      {inputDiv}
      </div>
    </div>
  );
};

export default Input;
    
import React from 'react';
import "./Card.css"

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input className='btnofcart' ref={ref} {...props.input} />
    </div>
  );
});

export default Input;

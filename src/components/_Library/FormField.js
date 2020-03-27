import React from "react";

const isText = label_type => {
  let returnVal = ["text", "email"].includes(label_type) ? "text" : "";
  return returnVal;
};

const FormField = ({ ...props }) => (
  <div className="input-field">
    <label className={isText(props.type)} htmlFor={props.keyName}>
      {props.displayText}
    </label>
    <input
      type={props.type}
      id={props.keyName}
      onChange={e => props.onChange(e)}
    />
  </div>
);

export default FormField;

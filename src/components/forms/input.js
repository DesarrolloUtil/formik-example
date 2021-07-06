import { Field, useField } from "formik";
import React from "react";

const Input = ({ placeholder, type = "text", name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <label className="flexcol-s-s label">
      <span className="placeholder">{placeholder}</span>
      <Field className="input" type={type} name={name} {...props} />
      {meta.error}
    </label>
  );
};

export default Input;

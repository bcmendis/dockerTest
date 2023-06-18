import React from "react";

type InputProps = {
  id: string;
  label: string;
  type: string;
  error: boolean;
  errorMessage: string | null;
  register: {};
}

const FormInput = ({ id, label, type, error, errorMessage, register } : InputProps) => {
  return (
    <div className="mt-6">
      <label
        htmlFor={id}
        className={`form_label ${error ? "form_label_error" : ""}`}
      >
        {error ? errorMessage : label }
      </label>
      <input
        type={type}
        id={id}
        {...register}
        placeholder={`Enter your ${label}`}
        className={`form_input ${error ? "form_input_error" : ""}`}
      />
    </div>
  );
};

export default FormInput;

import { useState } from "react";
import { ReusableFieldProps } from "@/interfaces";

const TextField = ({
  label,
  type = "text",
  name,
  inputClasses,
  placeholder,
  value,
  onChange,
  error,
}: ReusableFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const getInputClasses = () => {
    return `form-control ${error ? "is-invalid" : "is-valid"}`;
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <div className="input-group has-validation">
        <input
          className={inputClasses ? inputClasses : getInputClasses()}
          type={showPassword ? "text" : type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {type === "password" && (
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={toggleShowPassword}
          >
            <i className={`bi bi-eye${showPassword ? "-slash" : ""}`}></i>
          </button>
        )}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

export default TextField;

import React, { useState, useEffect } from "react";
import TextField from "@/components/common/form/textField";
import { validator } from "@/utils/validator";
import { validatorConfig } from "@/utils/validatorConfig";
import {ErrorProps} from "@/interfaces";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<ErrorProps>({});

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const isValid = validate();

    if (!isValid) {
      console.log("errors", errors);
      return;
    }

    console.log(data);
  };

  const handleReset = () => {
    setData({
      email: "",
      password: "",
    });
  };

  return (
    <form className="m-2" onSubmit={handleSubmit}>
      <div className="mb-3">
        <TextField
          label="Электронная почта"
          name="email"
          value={data.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>
      <div className="mb-3">
        <TextField
          label="Пороль"
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          error={errors.password}
        />
      </div>
      <button type="submit" className="btn btn-success" disabled={!isValid}>
        Подтвердить
      </button>
      <button type="reset" className="btn btn-danger" onClick={handleReset}>
        Сбросить
      </button>
    </form>
  );
};

export default LoginForm;

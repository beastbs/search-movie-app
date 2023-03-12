import React, { useState, useEffect } from "react";
import TextField from "@/components/common/form/textField";
import RadioField from "@/components/common/form/radioField";
import { validator } from "@/utils/validator";
import { validatorConfig } from "@/utils/validatorConfig";

const RegisterForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    gender: "male",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
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
      gender: "male",
    });
  };

  return (
    <form className="m-2" onSubmit={handleSubmit}>
      <div className="mb-3">
        <TextField
          label="*Электронная почта"
          name="email"
          value={data.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>
      <div className="mb-3">
        <TextField
          label="*Пороль"
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          error={errors.password}
        />
      </div>

      <RadioField
        options={[
          { name: "Male", value: "male" },
          { name: "Female", value: "female" },
        ]}
        value={data.gender}
        onChange={handleChange}
        name="gender"
        label="*Выберите ваш пол"
      />
      <button type="submit" className="btn btn-success" disabled={!isValid}>
        Подтвердить
      </button>
      <button type="reset" className="btn btn-danger" onClick={handleReset}>
        Сбросить
      </button>
    </form>
  );
};

export default RegisterForm;

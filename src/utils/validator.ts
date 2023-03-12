/* eslint-disable indent */

interface ValidationConfig {
  value?: number;
  message: string;
}

interface FieldValidationConfig {
  [key: string]: ValidationConfig;
}

interface FormValidationConfig {
  [key: string]: FieldValidationConfig;
}

interface FormValidateProps {
  [key: string]: string;
  email: string;
  password: string;
}

export function validator(
  data: FormValidateProps,
  config: FormValidationConfig
): { [key: string]: string } {
  const errors: { [key: string]: string } = {};

  function validate(
    validateMethod: string,
    data: string,
    config: ValidationConfig
  ) {
    let statusValidate;
    switch (validateMethod) {
      case "isRequired":
        statusValidate = data.trim() === "";
        break;
      case "isEmail": {
        const emailRegExp = /^\S+@\S+\.\S+$/g;
        statusValidate = !emailRegExp.test(data);
        break;
      }
      case "isCapitalSymbol": {
        const capitalRegExp = /[A-Z]+/g;
        statusValidate = !capitalRegExp.test(data);
        break;
      }
      case "isContainDigit": {
        const digitRegExp = /\d+/g;
        statusValidate = !digitRegExp.test(data);
        break;
      }
      case "min": {
        if (config.value) {
          statusValidate = data.length < config.value;
        }
        break;
      }
      case "max": {
        if (config.value) {
          statusValidate = data.length > config.value;
        }
        break;
      }
      case "isRequiredProfession": {
        statusValidate = data === "";
        break;
      }
      default:
        break;
    }

    if (statusValidate) return config.message;
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );

      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }

  return errors;
}

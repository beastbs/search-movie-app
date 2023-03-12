export const validatorConfig = {
  email: {
    isRequired: {
      message: "Электронная почта обязательна для заполнения",
    },
    isEmail: {
      message: "Email введен некорректно",
    },
  },
  password: {
    isRequired: {
      message: "Пороль обязателен для заполнения",
    },
    isCapitalSymbol: {
      message: "Пороль должен содержать минимум одну заглавную букву",
    },
    isContainDigit: {
      message: "Пороль должен содержать минимум одно число",
    },
    min: {
      message: "Пороль должен содержать минимум 8 символов",
      value: 8,
    },
    max: {
      message: "Пороль должен содержать максимум 36 символов",
      value: 36,
    },
  },
};

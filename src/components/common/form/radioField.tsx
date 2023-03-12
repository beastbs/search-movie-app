import { RadioFieldProps, OptionsProps } from "@/interfaces";

const RadioField = ({
  label,
  options,
  name,
  onChange,
  value,
}: RadioFieldProps) => {
  return (
    <div className="mb-4">
      <div>
        <label className="form-label">{label}</label>
      </div>
      {options.map((option: OptionsProps) => (
        <div
          key={option.name + "_" + option.value}
          className="form-check form-check-inline"
        >
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={option.name + "_" + option.value}
            checked={option.value === value}
            value={option.value}
            onChange={onChange}
          />
          <label
            className="form-check-label"
            htmlFor={option.name + "_" + option.value}
          >
            {option.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioField;

import { Controller, type Control, type FieldError } from "react-hook-form";
import { type formValues } from "../models/";
import './InputForm.css'
interface Props {
  name: keyof formValues;
  control: Control<formValues>;
  label: string;
  type?: string;
  error?: FieldError;
}
export const InputForm = ({ name, control, label, type, error }: Props) => {
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <input type={type} id={name} {...field} className={`form-control ${error ? "is-invalid" : ""}`} />}
      />
      {error && <p className="error">{error.message} </p>}
    </div>
  );
};

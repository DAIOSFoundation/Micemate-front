import { InputCheckboxWrapA, InputCheckboxWrapB } from "./inputCheckboxStyle";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { FormEvent } from "react";
type Props = {
  label: string;
  id: string;
  register?: UseFormRegister<FieldValues>;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
  required?: boolean;
  checked?: boolean;
};

export const InputCheckboxA = ({
  label,
  id,
  register,
  onChange,
  required,
  checked,
}: Props) => {
  return (
    <InputCheckboxWrapA className="InputCheckboxA">
      {onChange && (
        <input
          type="checkbox"
          id={id}
          {...(register && register(id))}
          checked={checked}
          onChange={onChange}
        />
      )}
      {!onChange && (
        <input type="checkbox" id={id} {...(register && register(id))} />
      )}
      <label htmlFor={id}>
        {label}
        {required && <span className="req">&nbsp;*</span>}
      </label>
    </InputCheckboxWrapA>
  );
};

export const InputCheckboxB = ({ label, id, register, onChange }: Props) => {
  return (
    <InputCheckboxWrapB>
      {onChange && (
        <input
          type="checkbox"
          id={id}
          {...(register && register(id))}
          onChange={onChange}
          value={label}
        />
      )}
      {!onChange && (
        <input type="checkbox" id={id} {...(register && register(id))} />
      )}

      <label htmlFor={id}>{label}</label>
    </InputCheckboxWrapB>
  );
};

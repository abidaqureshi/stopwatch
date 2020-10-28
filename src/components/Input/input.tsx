import React from 'react';
import { InputWrapper } from './input.style';

interface IInputProps {
  label: string;
  type: string;
  placeholder: string;

  onChangeHandler(val: number): void;
}

export const LabeledInput: React.FC<IInputProps> = ({ label, type, placeholder, onChangeHandler, ...props }) => {
  const inputHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(evt.target.value);

    if (value >= 0 && value < 100) {
      onChangeHandler(value);
    } else {
      evt.target.value = '';
    }
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <InputWrapper
        type={type === 'number' || type === 'numeric' ? 'numeric' : 'text'}
        onChange={evt => {
          inputHandler(evt);
        }}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

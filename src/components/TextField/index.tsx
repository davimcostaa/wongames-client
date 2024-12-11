import { useState, InputHTMLAttributes } from 'react';
import * as S from './styles';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  icon?: JSX.Element;
  disabled?: boolean;
  initialValue?: string;
  iconPosition?: 'left' | 'right';
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  initialValue = '',
  iconPosition = 'left',
  onInput,
  name,
  disabled,
  icon,
  error,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);
    !!onInput && onInput(newValue);
  };

  return (
    <S.Wrapper error={!!error}>
      {!!label && (
        <S.Label disabled={disabled} htmlFor={name}>
          {label}
        </S.Label>
      )}
      <S.InputWrapper iconPosition={iconPosition}>
        {!!icon && icon}
        <S.Input
          type="text"
          onChange={onChange}
          disabled={disabled}
          name={name}
          value={value}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};
export default TextField;

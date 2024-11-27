import styled, { css, DefaultTheme } from 'styled-components';
import { TextFieldProps } from '.';

const inputWrapperModifier = {
  right: () => css`
    flex-direction: row-reverse;
  `,
};

export const InputWrapper = styled.div<Pick<TextFieldProps, 'iconPosition'>>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    ${iconPosition === 'right' && inputWrapperModifier.right()}
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    > svg {
      width: 2rem;
      color: ${theme.colors.gray};
    }
  `}
`;
export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    &[disabled] {
      color: ${theme.colors.gray};
      cursor: not-allowed;
    }
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const Label = styled.label<Pick<TextFieldProps, 'disabled'>>`
  ${({ theme, disabled }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${disabled ? theme.colors.gray : theme.colors.black};
    cursor: pointer;
  `}
`;

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};

      > svg {
        color: ${theme.colors.red};
      }
    }
    ${Label} {
      color: ${theme.colors.red};
    }
  `,
};
export const Wrapper = styled.div<{ error?: boolean }>`
  ${({ theme, error }) => css`
    ${error && wrapperModifiers.error(theme)}
  `}
`;

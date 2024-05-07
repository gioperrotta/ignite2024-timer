import styled, { css } from 'styled-components'

export type ButtonVariantType =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'neutral'

interface ButtonContainerProps {
  variant: ButtonVariantType
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
  neutral: 'gray',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  border-radius: 4px;
  border: 0;
  margin: 8px;

  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  /* ${(props) => {
    return css`
      background: ${buttonVariants[props.variant]};
    `
  }} */
`

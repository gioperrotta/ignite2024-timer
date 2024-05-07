import * as S from './Button.styles'

interface ButtonProps {
  variant?: S.ButtonVariantType
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <S.ButtonContainer variant={variant}>Enviar</S.ButtonContainer>
}

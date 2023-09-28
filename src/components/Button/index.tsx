import React from 'react';
import style from './Button.module.scss';

interface Props {
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
  children?: React.ReactNode
}

export default function Button({ type = 'button', onClick, children }: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={style.botao}
    >
    {children}
    </button>
  )
}

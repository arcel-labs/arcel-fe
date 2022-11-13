import { ButtonHTMLAttributes, FC } from "react";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  placeholder?: string,
}

const Button: FC<ButtonProps> = ({
  placeholder,
  type,
  onClick
}) => {
  return (
    <>
      <button
        className="bg-sky-600 hover:bg-sky-700 hover:text-white tran p-2 rounded-3xl w-32 dtransition delay-100 duration-200 ease-in-out"
        type={type}
        onClick={onClick}
      >
        {placeholder}
      </button>
    </>
  )
}

export default Button
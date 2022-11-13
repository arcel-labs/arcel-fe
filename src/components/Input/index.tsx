import { InputHTMLAttributes, FC } from "react";

export interface InputProps
extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string,
}

const Input: FC<InputProps> = ({
    placeholder,
    type,
    onChange,
    value
}) => {
    return (
    <>
        <input
            className="rounded border border-indigo-600 focus:outline-none focus:ring  w-5/6
            bg-transparent p-2"
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />

    </>
  )
}

export default Input
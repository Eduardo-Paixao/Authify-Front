import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({
  disabled,
  type = "button",
  children,
  ...rest
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`rounded-md bg-[#8257E5] w-full h-14 py-4 text-[1rem] font-semibold text-white flex justify-center items-center ${
        disabled
          ? "bg-gray-500 cursor-not-allowed "
          : "hover:brightness-120 cursor-pointer"
      }
      `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({
  disabled,
  type = "button",
  children,
  className,
  ...rest
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`rounded-xl bg-[#8257E5] w-full h-14 py-4 text-[1rem] font-medium text-white flex justify-center items-center ${
        disabled
          ? "bg-gray-500 cursor-not-allowed "
          : "hover:brightness-120 cursor-pointer"
      }
      ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

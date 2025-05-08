import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  classNameLabel?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  classNameLabel,
  ...props
}) => {
  return (
    <div className={`w-full flex flex-col gap-1 h-[108px] text-[#553a93] dark:text-[#A1A1AA] `}>
      {label && <label className={`w-full text-base font-medium ${classNameLabel}`}>{label}</label>}
      <input
        {...props}
        className={`p-3 h-14 text-base rounded-md w-full outline-2 bg-[#ededed] dark:bg-[#27272A] outline-[#A1A1AA] dark:outline-[#52525B]  focus:!outline-[#8257E5]
       ${error ? "outline-red-500 focus:outline-red-500" : ""} ${className}`}
      />
      {error && <p className="w-full text-sm text-red-500">{error}</p>}
    </div>
  );
};

export const InputRadio: React.FC<InputProps> = ({
  label,
  disabled,
  ...props
}) => {
  return (
    <label
      className={`flex flex-col items-center gap-2 ${
        !disabled && "cursor-pointer"
      }`}
    >
      {label && <span className="text-[#553a93] dark:text-[#A1A1AA] ">{label}</span>}
      <input
        type="radio"
        className="sr-only peer"
        {...props}
        disabled={disabled}
      />
      <div
        className={`w-7 h-7 rounded-full border-4 flex items-center justify-center after:content-[''] after:w-3 after:h-3 after:rounded-full after:scale-0 peer-checked:after:scale-100 after:transition-transform
        ${disabled ? 'border-gray-500' : "border-[#8257E5] after:bg-[#8257E5]"}`}
      />
    </label>
  );
};

import React from "react";
import Button from "../Button";

interface ToggleThemeButtonProps{
  toggleTheme: () => void
}

const ToggleThemeButton:React.FC<ToggleThemeButtonProps> = ({toggleTheme}) => {
  return (
    <Button
      title="arrow-left-circle"
      onClick={toggleTheme}
      className="flex items-center bg-[#ffffff] dark:bg-[#52525B] !rounded-full px-1 transition-colors !h-6 !w-auto absolute top-4 right-4 z-10"
    >
      <span className={`transition-opacity opacity-0 dark:opacity-100`}>
        ☀️
      </span>
      <div
        className={`w-6 h-6 bg-[#A1A1AA] rounded-full shadow-md transform transition-transform dark:translate-x-4 -translate-x-4`}
      />
      <span className={`transition-opacity opacity-100 dark:opacity-0`}>
        🌙
      </span>
    </Button>
  );
};

export default ToggleThemeButton;

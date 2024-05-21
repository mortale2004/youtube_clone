import React from "react";

interface AppIconButton {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
const AppIconButton = ({ className, children, onClick }: AppIconButton) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full w-10 h-10  flex justify-center items-center  text-2xl  hover:bg-divider-color ${className}`}
    >
      {children}
    </button>
  );
};

export default React.memo(AppIconButton);

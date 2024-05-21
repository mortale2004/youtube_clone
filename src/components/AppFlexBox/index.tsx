import React from "react";

interface AppFlexBox {
  className: string;
  children: React.ReactNode;
}

const AppFlexBox = ({ className, children }: AppFlexBox) => {
  return <div className={`flex ${className}`}>{children}</div>;
};

export default React.memo(AppFlexBox);

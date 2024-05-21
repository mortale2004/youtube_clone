import React from "react";
import AppFlexBox from "../AppFlexBox";

interface AppToolTipProps {
  children: React.ReactNode;
  title: string;
  hasArrow?: boolean;
}

const AppToolTip = ({ children, title, hasArrow = true }: AppToolTipProps) => {
  return (
    <AppFlexBox className="relative group justify-center">
      {children}
      <div
        role="tooltip"
        className="invisible group-hover:visible bg-disabled-text-color/30 z-10 absolute bottom-[-30px] rounded-sm text-xs left-1/2 -translate-x-1/2 text-nowrap px-2 py-1"
      >
        {title}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </AppFlexBox>
  );
};

export default React.memo(AppToolTip);

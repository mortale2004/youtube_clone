import React from "react";
import AppFlexBox from "../AppFlexBox";
import AppSideBarButton, { AppSideBarButtonProps } from "./AppSideBarButton";

interface AppSideBarSectionProps {
  sideBarSection: AppSideBarButtonProps[];
}

const AppSideBarSection = ({ sideBarSection }: AppSideBarSectionProps) => {
  return (
    <AppFlexBox className=" flex-col shadow-[0_1px_0px_0px] p-2  shadow-divider-color w-full">
      {sideBarSection.map((sideBarButton: AppSideBarButtonProps) => (
        <AppSideBarButton  key={sideBarButton.href}{...sideBarButton} />
      ))}
    </AppFlexBox>
  );
};

export default React.memo(AppSideBarSection);

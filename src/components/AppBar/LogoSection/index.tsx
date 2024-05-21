import React from "react";
import { FiMenu } from "react-icons/fi";
import AppFlexBox from "../../AppFlexBox";
import AppLogo from "../../AppLogo";
import YoutubeLogo from "./YoutubeLogo";
import AppBurger from "./AppBurger";

const LogoSection = () => {
  return (
    <AppFlexBox className="flex-center items-center">
      <AppBurger />
      <YoutubeLogo width={130} height={50} />
    </AppFlexBox>
  );
};

export default React.memo(LogoSection);

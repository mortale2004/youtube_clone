import React from "react";
import AppFlexBox from "../AppFlexBox";
import LogoSection from "./LogoSection";
import SearchSection from "./SearchSection";
import ProfileSection from "./ProfileSection";

const AppBar = () => {
  return (
    <nav>
      <AppFlexBox className="justify-between items-center py-2">
        <LogoSection />
        <SearchSection />
        <ProfileSection />
      </AppFlexBox>
    </nav>
  );
};

export default React.memo(AppBar);

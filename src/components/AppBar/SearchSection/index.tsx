import AppFlexBox from "@/components/AppFlexBox";
import AppIconButton from "@/components/AppIconButton";
import AppSearchBar from "@/components/AppSearchBar";
import AppToolTip from "@/components/AppToolTip";
import React from "react";
import { HiMicrophone } from "react-icons/hi2";

const SearchSection = () => {
  return (
    <AppFlexBox className=" justify-center gap-3">
      <AppSearchBar />
      <AppToolTip title="Search with your voice">
        <AppIconButton className="bg-surface-color">
          <HiMicrophone />
        </AppIconButton>
      </AppToolTip>
    </AppFlexBox>
  );
};

export default React.memo(SearchSection);

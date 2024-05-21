import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import AppFlexBox from "../AppFlexBox";

const AppSearchBar = () => {
  return (
    <AppFlexBox className="justify-center">
      <input
        type="text"
        className=" bg-primary-background-color  shadow-[0_0px_0px_0.5px]  shadow-divider-color focus:outline-none rounded-l-3xl py-0 px-5 border-secondary-text-color w-80"
        placeholder="Search"
      />
      <AppFlexBox className="bg-surface-color items-center shadow-[0_0px_0px_0.5px]  shadow-disabled-text-color  pl-5 pr-4  rounded-r-3xl">
        <IoSearchOutline className="text-2xl" />
      </AppFlexBox>
    </AppFlexBox>
  );
};

export default AppSearchBar;

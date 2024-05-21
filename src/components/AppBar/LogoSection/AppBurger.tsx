import AppIconButton from "@/components/AppIconButton";
import { appSideBarIsOpenAtom } from "@/store/atoms/Sidebar";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { useSetRecoilState } from "recoil";

const AppBurger = () => {
  const setIsSideBarOpen = useSetRecoilState(appSideBarIsOpenAtom);
  return (
    <AppIconButton
      className="ml-5"
      onClick={() => setIsSideBarOpen((isOpen) => !isOpen)}
    >
      <FiMenu className="text-2xl" />
    </AppIconButton>
  );
};

export default React.memo(AppBurger);

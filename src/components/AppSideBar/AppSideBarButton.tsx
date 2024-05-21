import React from "react";
import AppFlexBox from "../AppFlexBox";
import Link from "next/link";
import { useRouter } from "next/router";

export interface AppSideBarButtonProps {
  icon: React.ReactNode;
  content: React.ReactNode;
  href: string;
}

const AppSideBarButton = ({ icon, content, href }: AppSideBarButtonProps) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <AppFlexBox
        className={`items-center p-2 px-3 w-full rounded-lg  hover:bg-surface-color  gap-3 text-primary-text-color ${
          router.pathname === href && "bg-surface-color"
        }`}
      >
        <span className="text-2xl font-light">{icon}</span>
        <span className="font-normal"> {content} </span>
      </AppFlexBox>
    </Link>
  );
};

export default React.memo(AppSideBarButton);

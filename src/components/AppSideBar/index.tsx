import React from "react";
import AppSideBarSection from "./AppSideBarSection";
import { AppSideBarButtonProps } from "./AppSideBarButton";
import AppFlexBox from "../AppFlexBox";
import { GoHome } from "react-icons/go";
import { PiPlayCircle } from "react-icons/pi";
import { BsCollectionPlay } from "react-icons/bs";
import { LuUserSquare2 } from "react-icons/lu";
import { RiHistoryFill } from "react-icons/ri";
import { RiPlayList2Fill } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { PiMonitorPlayLight } from "react-icons/pi";
import { FiThumbsUp } from "react-icons/fi";

const AppSideBar = () => {
  return (
    <AppFlexBox className="flex-col border-solid border-2 border-primary-text-color  w-60 h-dvh overflow-y-scroll">
      {appSideBarSections.map(
        (sideBarSection: AppSideBarButtonProps[], index: number) => (
          <AppSideBarSection key={index} sideBarSection={sideBarSection} />
        )
      )}
    </AppFlexBox>
  );
};

export default React.memo(AppSideBar);

const appSideBarSections = [
  [
    { icon: <GoHome />, href: "/", content: "Home" },
    {
      icon: <PiPlayCircle />,
      href: "/shorts",
      content: "Shorts",
    },
    {
      icon: <BsCollectionPlay />,
      href: "/subscriptions",
      content: "Subscriptions",
    },
  ],
  [
    { icon: <></>, href: "/feed/you", content: "You >" },
    {
      icon: <LuUserSquare2 />,
      href: "/channel/:id",
      content: "Your Channel",
    },
    {
      icon: <RiHistoryFill />,
      href: "/history",
      content: "History",
    },
    {
      icon: <RiPlayList2Fill />,
      href: "/feed/playlists",
      content: "Playlist",
    },
    {
      icon: <PiMonitorPlayLight />,
      href: "/channel/:id/videos",
      content: "Your Videos",
    },
    {
      icon: <MdOutlineWatchLater />,
      href: "/playlists?list=WL",
      content: "Watch Later",
    },
    {
      icon: <FiThumbsUp />,
      href: "/playlists?list=LL",
      content: "Liked Videos",
    },
  ],
];

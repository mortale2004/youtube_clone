import AppFlexBox from "@/components/AppFlexBox";
import AppIconButton from "@/components/AppIconButton";
import AppToolTip from "@/components/AppToolTip";
import React from "react";
import { MdVideoCall } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import ProfileSectionButton from "./ProfileSectionButton";

const ProfileSection = () => {
  return (
    <AppFlexBox className="justify-center items-center gap-4 mr-9">
      <ProfileSectionButton title="Create">
        <MdVideoCall />
      </ProfileSectionButton>
      <ProfileSectionButton title="Notifications">
        <IoMdNotificationsOutline />
      </ProfileSectionButton>
      <ProfileSectionButton title="Create">
        <MdVideoCall />
      </ProfileSectionButton>
    </AppFlexBox>
  );
};

export default React.memo(ProfileSection);

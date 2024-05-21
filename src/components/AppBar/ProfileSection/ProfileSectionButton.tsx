import AppIconButton from "@/components/AppIconButton";
import AppToolTip from "@/components/AppToolTip";
import React from "react";

interface ProfileSectionButtonProps {
  title: string;
  children: React.ReactNode;
}
const ProfileSectionButton = ({
  title,
  children,
}: ProfileSectionButtonProps) => {
  return (
    <AppToolTip title={title}>
      <AppIconButton>{children}</AppIconButton>
    </AppToolTip>
  );
};

export default React.memo(ProfileSectionButton);

import React from "react";
import Image from "next/image";
import IconAvatar from "../../../assets/image-avatar-2.svg";

const ProfileIcon = () => {
  return (
    <>
      <div>
        <Image className="h-6" src={IconAvatar} alt="icon avatar" />
      </div>
    </>
  );
};

export default ProfileIcon;

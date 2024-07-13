import React from "react";
import { Avatar } from "zmp-ui";
import { MdWavingHand } from "react-icons/md";
const CustomUserComponent = ({ user }) => {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex justify-center">
        <img
          src={user.avatar.startsWith("http") ? user.avatar : undefined}
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "99px",
            overflow: "hidden",
          }}
        />
      </div>
      <div className="flex justify-center">
        <p className="mt-2 font-semibold">{user.name}</p>
      </div>
    </div>
  );
};

export default CustomUserComponent;

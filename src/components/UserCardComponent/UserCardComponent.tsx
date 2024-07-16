import React from "react";
import useUserProfile from "hooks/useUserProfile";

const UserProfile: React.FC = () => {
  const { avatarUrl, userName } = useUserProfile();

  return (
    <div className="flex items-center space-x-4 p-4">
      <img
        src={avatarUrl}
        alt={`${userName}'s avatar`}
        className="w-10 h-10 rounded-full"
      />
      <span className="text-lg font-semibold">{userName}</span>
    </div>
  );
};

export default UserProfile;

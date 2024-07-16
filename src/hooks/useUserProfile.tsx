import { useState, useEffect } from "react";
import { getUserInfo } from "zmp-sdk/apis";

interface UserProfile {
  avatarUrl: string;
  userName: string;
}

const defaultUserProfile: UserProfile = {
  avatarUrl: "https://cdn-icons-png.flaticon.com/512/3541/3541871.png",
  userName: "Guest",
};

const useUserProfile = () => {
  const [userProfile, setUserProfile] =
    useState<UserProfile>(defaultUserProfile);

  useEffect(() => {
    getUserInfo({
      success: (data) => {
        const { userInfo } = data;
        setUserProfile({
          avatarUrl: userInfo.avatar,
          userName: userInfo.name,
        });
      },
      fail: (error) => {
        console.error("Failed to fetch user profile:", error);
        setUserProfile(defaultUserProfile);
      },
    });
  }, []);

  return userProfile;
};

export default useUserProfile;

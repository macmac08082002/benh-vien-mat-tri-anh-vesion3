import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "state";
import { Avatar, Box, Text } from "zmp-ui";

const UserCard: React.FunctionComponent = () => {
  const { userInfo } = useRecoilValue(userState);

  return (
    <div className="flex mb-3 shadow-md h-[4rem] text-center ">
      <Avatar
        className="ml-3 mt-2"
        story="default"
        online
        src={userInfo.avatar.startsWith("http") ? userInfo.avatar : undefined}
      >
        {userInfo.avatar}
      </Avatar>
      <Box ml={4}>
        <Text.Title className="mt-3">xin chào, {userInfo.name}</Text.Title>
      </Box>
    </div>
  );
};

export default UserCard;

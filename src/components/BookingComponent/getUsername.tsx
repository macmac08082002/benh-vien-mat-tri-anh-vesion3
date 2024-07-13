import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "state";
import { Avatar, Box, Text } from "zmp-ui";

const usernameDisplay: React.FunctionComponent = () => {
  const { userInfo } = useRecoilValue(userState);

  return (
    <Box flex>
      <Box ml={4}>
        <p className="">{userInfo.name}</p>
      </Box>
    </Box>
  );
};

export default usernameDisplay;

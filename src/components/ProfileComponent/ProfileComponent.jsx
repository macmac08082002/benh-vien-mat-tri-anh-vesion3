import React from "react";
import CustomUserComponent from "./CustomUserComponent";
import { useRecoilValue } from "recoil";
import { userState } from "../../state";
import Custombutton from "./CustomButton";
const ProifileComponent = () => {
  const user = useRecoilValue(userState);
  return (
    <div className="bg-white ection-container page">
      <div className="section-container mx-auto mt-6 ">
        <CustomUserComponent user={user.userInfo} />
      </div>
      <div className="bg-white">
        <Custombutton />
      </div>
    </div>
  );
};
export default ProifileComponent;

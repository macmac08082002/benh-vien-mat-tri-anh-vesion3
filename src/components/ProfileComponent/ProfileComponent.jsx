import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../state";
import Custombutton from "./CustomButton";

const ProifileComponent = () => {
  const user = useRecoilValue(userState);
  return (
    <div className="bg-white ection-container ">
      <div className="section-container mx-auto mt-6 "></div>
      <div className="bg-white">
        <Custombutton />
      </div>
    </div>
  );
};
export default ProifileComponent;

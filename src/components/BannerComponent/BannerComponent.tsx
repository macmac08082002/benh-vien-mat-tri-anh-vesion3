import React from "react";
import "../../css/app.scss";
import imgBanner from "../../assets/banner/banner.png";
import { openChat } from "zmp-sdk/apis";
const BannerComponent: React.FC = () => {
  const openChatScreen = async () => {
    try {
      await openChat({
        type: "user",
        id: "4254391180785311679",
        message: "Tôi cần tư vấn về dịch vụ mắt",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="setBanner bg-gradient-to-r from-[#dc1f18] to-[#f8954f] w-full rounded-lg flex flex-col justify-between items-center text-white relative">
      <div className="flex justify-center  items-center">
        <span className="font-bold text-xl mt-3  animated-text text-white ">
          Trí Anh mắt sáng, Sáng tươi lai
        </span>
      </div>
      <div
        onClick={openChatScreen}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-1 "
      >
        <button
          className="w-48 text-white font-sans py-2 px-4 rounded-full border border-white"
          style={{
            background: "linear-gradient(45deg, #f1645f 0%, #f49ae2 100%)",
          }}
        >
          Tư vấn với bác sĩ
        </button>
      </div>
      <div className="flex justify-center items-end">
        <img src={imgBanner} alt="Banner Image" className="imgbanner w-80" />
      </div>
    </div>
  );
};

export default BannerComponent;

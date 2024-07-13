import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { createShortcut } from "zmp-sdk/apis";
import { openShareSheet } from "zmp-sdk/apis";
import "../../css/app.scss";
import { Link } from "react-router-dom";
const CustomButton = () => {
  const createMiniAppShortcut = async () => {
    try {
      await createShortcut({
        params: {
          utm_source: "shortcut",
        },
      });
      alert("Shortcut created successfully!");
    } catch (error) {
      console.error("Failed to create shortcut:", error);
      alert("Failed to create shortcut. Please try again.");
    }
  };
  const handleShare = () => {
    openShareSheet({
      type: "zmp",
      data: {
        title: "Phòng khám đa khoa bách việt",
        thumbnail: "https://img.upanh.tv/2024/05/29/test2db734e27997d699.png",
      },
      success: (res) => {
        console.log("Share successful", res);
      },
      fail: (err) => {
        console.error("Share failed", err);
      },
    });
  };
  return (
    <div className="overflow-x-auto flex flex-col page ">
      <div className="flex items-center justify-between">
        <button
          className="text-black py-2 px-4 text-xs rounded mt-2 h-12 shadow-md w-full flex items-center justify-between"
          onClick={createMiniAppShortcut}
        >
          Ghi ra màn hình
          <IoIosArrowForward className="ml-2 text-sm" />
        </button>
      </div>
      <div className="flex items-center justify-between" onClick={handleShare}>
        <button className="text-black py-2 px-4 text-xs rounded mt-2 h-12 shadow-md w-full flex items-center justify-between">
          Chia sẻ với bạn bè
          <IoIosArrowForward className="ml-2 text-sm" />
        </button>
      </div>
      <div className="flex items-center justify-between">
        <button className="text-black py-2 px-4 text-xs rounded mt-2 h-12 shadow-md w-full flex items-center justify-between">
          Chính sách & điều khoản sử dụng
          <IoIosArrowForward className="ml-2 text-sm" />
        </button>
      </div>
    </div>
  );
};

export default CustomButton;

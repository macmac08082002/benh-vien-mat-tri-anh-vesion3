import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { createShortcut } from "zmp-sdk/apis";
import { openShareSheet } from "zmp-sdk/apis";
import qrcode from "../../assets/qr.jpg";
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
        title: "Bệnh viện mắt Trí Anh",
        thumbnail:
          "data:image/png;base64,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",
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
          Đưa app ra màn hình
          <IoIosArrowForward className="ml-2 text-sm" />
        </button>
      </div>
      <div className="flex items-center justify-between" onClick={handleShare}>
        <button className="text-black py-2 px-4 text-xs rounded mt-2 h-12 shadow-md w-full flex items-center justify-between">
          Chia sẻ với bạn bè
          <IoIosArrowForward className="ml-2 text-sm" />
        </button>
      </div>
      <Link to="/history" className="no-underline">
        <div className="flex items-center justify-between">
          <button className="text-black py-2 px-4 text-xs rounded mt-2 h-12 shadow-md w-full flex items-center justify-between">
            Lịch sử khám chữa bệnh
            <IoIosArrowForward className="ml-2 text-sm" />
          </button>
        </div>
      </Link>
      <Link to="/dksd" className="no-underline ">
        <div className="flex items-center justify-between ">
          <button className="text-black py-2 px-4 text-xs rounded mt-2 h-12 shadow-md w-full flex items-center justify-between">
            Chính sách & điều khoản sử dụng
            <IoIosArrowForward className="ml-2 text-sm" />
          </button>
        </div>
      </Link>
      <div className="flex items-center justify-between ">
        <button className="text-black py-2 px-4 text-xs rounded mt-2 h-12 shadow-md w-full flex items-center justify-between">
          Chính sách & điều khoản sử dụng
          <IoIosArrowForward className="ml-2 text-sm" />
        </button>
      </div>
      <div>
        <img src={qrcode} alt="QR code" />
      </div>
    </div>
  );
};

export default CustomButton;

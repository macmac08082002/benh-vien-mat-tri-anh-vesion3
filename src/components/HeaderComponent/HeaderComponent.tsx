import React from "react";
import { useLocation } from "react-router-dom";
import { Header, Page } from "zmp-ui";

const HeaderComponent: React.FC = () => {
  const location = useLocation();

  const getHeaderTitle = (): string => {
    switch (location.pathname) {
      case "/":
        return "Trang chủ";
      case "/news":
        return "Tin tức";
      case "/service":
        return "Dịch vụ cung cấp";
      case "/contact":
        return "Liên hệ";
      case "/my-profile":
        return "Chúng tôi";
      case "/sksd":
        return "Sử dụng dịch vụ";
      default:
        return "Bệnh viện mắt Trí Anh";
    }
  };

  return (
    <div>
      <Header
        backgroundColor="#dc1f18"
        textColor="white"
        title={getHeaderTitle()}
      />
    </div>
  );
};

export default HeaderComponent;

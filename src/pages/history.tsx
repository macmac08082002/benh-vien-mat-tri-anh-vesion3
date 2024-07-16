import React, { useState, useEffect } from "react";
import { getUserInfo } from "zmp-sdk/apis";

const HistoryPage: React.FunctionComponent = () => {
  const [userName, setUserName] = useState<string | null>(null);

  const getUser = async () => {
    try {
      const { userInfo } = await getUserInfo({});
      setUserName(userInfo.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="set-top page mt-6 text-center">
      {userName ? (
        <h4 className="mt-6">
          Xin chào, {userName} tính năng đang hoàn thiện vui lòng quoay lại sau
        </h4>
      ) : (
        <p>Đang tải...</p>
      )}
    </div>
  );
};

export default HistoryPage;

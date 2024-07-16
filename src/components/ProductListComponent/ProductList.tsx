import React from "react";
import ProductListComponent from "./ProductListComponent";
import { TiStarFullOutline } from "react-icons/ti";
import "../../css/app.scss";
const ProductList: React.FC = () => {
  const products = [
    {
      id: 1,
      categoryName: "Khám mắt toàn diện",
      imageUrl: "https://img.upanh.tv/2024/07/15/Dich-v-kham-mat.jpg",
      message: "Xin tư vấn về dịch vụ Khám mắt toàn diện",
    },
    {
      id: 2,
      categoryName: "Nhãn nhi, điều trị lác lé",
      imageUrl: "https://img.upanh.tv/2024/07/15/Nha-Nhi.jpg",
      message: "Tôi cần tư vấn về dịch Nhãn nhi, điều trị lác lé",
    },
    {
      id: 3,
      categoryName: "Điều trị tật khúc xạ",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2m_imX5ImisZAVH5vtJoq_dt92IcuLAYUf2STakIRxoMFy4JY-J0a4jdhejpiwTMLzA&usqp=CAU",
      message: "Tôi cần tư vấn về dịch vụ Điều trị tật khúc xạ",
    },
    {
      id: 4,
      categoryName: "Tạo hình thẩm mỹ",
      imageUrl: "https://img.upanh.tv/2024/07/15/Tao-hinh-Mi-mat.jpg",
      message: "Tôi cần tư vấn về dịch vụ Tạo hình thẩm mỹ",
    },
    {
      id: 5,
      categoryName: "Điều trị tật khúc xạ",
      imageUrl:
        "https://img.upanh.tv/2024/07/15/woman-having-her-eyes-examined-2023-11-27-04-54-00-utc.jpg",
      message: "Tôi cần tư vấn về dịch vụ Điều trị tật khúc xạ",
    },
    {
      id: 6,
      categoryName: "Cườm nước",
      imageUrl: "https://img.upanh.tv/2024/07/15/Kham-Le.jpg",
      message: "Tôi cần tư vấn về dịch vụ Cườm nước",
    },
    {
      id: 7,
      categoryName: "Phẫu thuật tật khúc xạ",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn5BuawTVPZV0GoIuGav7_vmr41bPkDuONhQ&s",
      message: "Tôi cần tư vấn về dịch vụ Phẫu thuật tật khúc xạ",
    },
    {
      id: 8,
      categoryName: "Phẫu thuật Phaco",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixVDVsZ5JW0nxYx3eMRDep06S0RQyT8UB3cgJ2n-mVXxSbq6khv_4EpwRZUCf5PrtB0w&usqp=CAU",
      message: "Tôi cần tư vấn về dịch vụ Phẫu thuật Phaco",
    },
  ];
  return (
    <div className="mt-3 disscorllbar ">
      <span className="whitespace-nowrap disscorllbar  text-sm font-semibold">
        <p className="flex items-center font-bold">
          <span className="whitespace-nowrap disscorllbar ">
            <TiStarFullOutline className="text-yellow-400" />
          </span>
          Dịch vụ về mắt đa dạng
        </p>
      </span>
      <div className="flex overflow-x-auto h-[22rem] pb-4">
        <ProductListComponent products={products} />
      </div>
    </div>
  );
};

export default ProductList;

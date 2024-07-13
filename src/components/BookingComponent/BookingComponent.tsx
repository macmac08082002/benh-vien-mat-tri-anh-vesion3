import {
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlineFileText,
} from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { userState } from "state";
import { Avatar, Box, Text } from "zmp-ui";
import React, { useState, useEffect } from "react";

const ImportForm = () => {
  const { userInfo } = useRecoilValue(userState);
  const [formData, setFormData] = useState({
    customer_name: "userInfo.name",
    customer_phone: "",
    email: "",
    address: "947 Phan Văn Trị",
    customer_birth_year: "2002",
    id_province: 79,
    customer_gender: "0",
    customer_type: "1",
    id_district: 762,
    id_ward: 26815,
    store_code: "401",
    order_status: 1,
    id_reason: 6,
    delivery_to: "947 Phan Văn Trị",
    order_date: "",
    order_note: "",
    cart_list: [
      {
        product_code: "NG001",
        quantity: "4",
        note: "Khám lasik",
      },
    ],
  });

  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (const key in formData) {
      if (formData[key] === "") {
        setMessage("Vui lòng điền đầy đủ thông tin!");
        return;
      }
    }

    try {
      const response = await fetch("https://miniapp.talking.vn/api/post-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Có lỗi xảy ra khi gửi dữ liệu!");
      }

      setMessage("Đăng ký thành công!, vui lòng đến đúng lịch hẹn");
      setShowModal(true);

      setFormData({
        customer_name: "",
        customer_phone: "",
        email: "",
        address: "947 Phan Văn Trị",
        customer_birth_year: "2002",
        id_province: 79,
        customer_gender: "0",
        customer_type: "1",
        id_district: 762,
        id_ward: 26815,
        store_code: "401",
        order_status: 1,
        id_reason: 6,
        delivery_to: "947 Phan Văn Trị",
        order_date: "",
        order_note: "",
        cart_list: [
          {
            product_code: "NG001",
            quantity: "4",
            note: "Khám lasik",
          },
        ],
      });
    } catch (error) {
      setMessage("Đã xảy ra lỗi khi đăng ký!");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const handlePhoneNumber = (phoneNumber) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      customer_phone: phoneNumber,
    }));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <form
        className="bg-white p-8 shadow-lg rounded-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Đăng Ký Khám Bệnh
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Họ và tên:</label>
          <div className="flex h-9 items-center border rounded-md p-2">
            <AiOutlineUser className="text-gray-400 mr-2" />
            <input
              type="text"
              name="customer_name"
              value={userInfo.name}
              onChange={handleChange}
              className="w-full focus:outline-none"
            />
          </div>
        </div>

        <div>
          <div className="mb-4 ">
            <label className="block text-gray-700 mb-2">Số điện thoại:</label>
            <div className="flex h-9 items-center border rounded-md p-2">
              <AiOutlinePhone className="text-gray-400 mr-2" />
              <input
                type="text"
                name="customer_phone"
                value={formData.customer_phone}
                onChange={handleChange}
                className="w-full focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email:</label>
          <div className="flex items-center h-9 border rounded-md p-2">
            <AiOutlineMail className="text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Ngày đặt hẹn:</label>
          <div className="flex items-center border rounded-md p-2">
            <AiOutlineCalendar className="text-gray-400 mr-2" />
            <input
              type="datetime-local"
              name="order_date"
              value={formData.order_date}
              onChange={handleChange}
              className="w-full focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Mô tả triệu chứng / Lý do khám:
          </label>
          <div className="flex items-start border rounded-md p-2">
            <AiOutlineFileText className="text-gray-400 mr-2 mt-1" />
            <textarea
              name="order_note"
              onChange={handleChange}
              value={formData.order_note}
              className="w-full focus:outline-none"
              rows={4}
            />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Đăng Ký
          </button>
        </div>

        {message && (
          <div className="mt-4 text-center text-green-500">{message}</div>
        )}
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg">{message}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImportForm;

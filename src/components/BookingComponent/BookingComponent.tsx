import React, { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaRegCommentDots } from "react-icons/fa";
import "../../css/custom.scss";
import GetToken from "components/GetPhoneNumber/GetPhoneNumber";
import { getUserInfo } from "zmp-sdk/apis";

const ContactForm = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [serviceNeeded, setServiceNeeded] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [showGetToken, setShowGetToken] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const checkFormValidity = () => {
    return userName && phoneNumber && email && serviceNeeded && !phoneError;
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length >= 10 && value.length <= 11) {
      setPhoneNumber(value);
      setPhoneError("");
    } else {
      setPhoneNumber(value);
      setPhoneError("Số điện thoại không hợp lệ");
    }
  };

  const resetForm = () => {
    setPhoneNumber("");
    setUserName("");
    setEmail("");
    setServiceNeeded("");
    setPhoneError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = checkFormValidity();

    if (isValid) {
      console.log("Form submitted successfully!");
      setModalMessage(
        "Bạn đã đăng ký thành công!, chúng tôi sẽ liên lạc lại vào thời gian sớm nhất"
      );
      setIsSuccess(true);
    } else {
      console.log("Please fill in all required fields correctly.");
      setModalMessage("Vui lòng nhập đầy đủ và chính xác thông tin.");
      setIsSuccess(false);
    }
    setShowModal(true);
  };

  const handleUserNameClick = async () => {
    if (!userName) {
      try {
        const { userInfo } = await getUserInfo({});
        setUserName(userInfo.name);
      } catch (error) {
        console.error("Error getting user info:", error);
      }
    }
  };

  const Modal = ({ message, isSuccess, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
        <p
          className={`text-center text-lg mb-4 ${
            isSuccess ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
        <button
          onClick={() => {
            onClose();
            if (isSuccess) {
              resetForm();
            }
          }}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Đóng
        </button>
      </div>
    </div>
  );

  return (
    <div
      className="set-form rounded-3xl w-full max-w-md mt-6  text-white"
      style={{ background: "linear-gradient(45deg, #dc1f18 0%, #f8954f 90%)" }}
    >
      <h2 className="text-2xl text-white ml-9 text-center py-2 w-[80%] flex justify-center mb-6 mt-6 font-bold">
        Để lại thông tin tư vấn
      </h2>
      {showGetToken && (
        <GetToken
          onPhoneNumberReceived={(phone) => {
            setPhoneNumber(phone);
            setShowGetToken(false);
            setPhoneError("");
          }}
        />
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex justify-center">
          <div className="flex items-center border border-gray-300 rounded-lg bg-white w-[90%] text-gray-700">
            <FaUser className="text-gray-400 ml-2" />
            <input
              type="text"
              className="p-2 ml-2 w-full border-none focus:ring-0"
              placeholder="Tên của bạn"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onClick={handleUserNameClick}
            />
          </div>
        </div>
        <div className="mb-4 flex justify-center flex-col items-center">
          <div className="flex items-center w-[90%] border border-gray-300 rounded-lg bg-white text-gray-700">
            <FaPhone className="text-gray-400 ml-2" />
            <input
              type="tel"
              className="w-full p-2 ml-2 border-none focus:ring-0"
              placeholder="Số điện thoại của bạn"
              value={phoneNumber}
              onChange={handlePhoneChange}
              onClick={() => !phoneNumber && setShowGetToken(true)}
            />
          </div>
          {phoneError && (
            <p className="text-white text-sm mt-1">{phoneError}</p>
          )}
        </div>
        <div className="mb-4 flex justify-center">
          <div className="flex items-center border border-gray-300 w-[90%] rounded-lg bg-white text-gray-700">
            <FaEnvelope className="text-gray-400 ml-2" />
            <input
              type="email"
              className="w-full p-2 ml-2 border-none focus:ring-0"
              placeholder="Email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4 flex justify-center">
          <div className="flex items-start border w-[90%] border-gray-300 rounded-lg bg-white text-gray-700">
            <FaRegCommentDots className="text-gray-400 ml-2 mt-2" />
            <textarea
              className="w-full p-2 ml-2 border-none focus:ring-0"
              placeholder="Dịch vụ cần tư vấn"
              rows="4"
              value={serviceNeeded}
              onChange={(e) => setServiceNeeded(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center mb-6">
          <button
            type="button"
            onClick={onClose}
            className="mr-2 px-16 py-4 bg-gray-300 text-gray-700 rounded-2xl hover:bg-gray-400"
          >
            Đóng
          </button>
          <button
            type="submit"
            className="px-16 py-4 bg-blue-500 text-white rounded-2xl hover:bg-blue-600"
          >
            Gửi
          </button>
        </div>
      </form>
      {showModal && (
        <Modal
          message={modalMessage}
          isSuccess={isSuccess}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ContactForm;

import React from "react";
import DoctorCardComponent from "./CardDoctorComponent";
import { TiStarFullOutline } from "react-icons/ti";
import "../../css/app.scss";

interface Doctor {
  id: number;
  name: string;
  department: string;
  hospital: string;
  rating: number;
  experience: string;
  image: string;
}

const DoctorList: React.FC = () => {
  const doctors: Doctor[] = [
    {
      id: 1,
      name: "BS.Đinh thị Ánh Thêu",
      department: "Bác sĩ",
      hospital: "BVM Trí Anh",
      rating: 5,
      experience: "5 năm",
      image: "https://img.upanh.tv/2024/07/12/doctor1-min.jpg",
    },
    {
      id: 2,
      name: "BS.Lê Hồng Đức",
      department: "Bác sĩ",
      hospital: "BVM Trí Anh",
      rating: 4.7,
      experience: "14 năm",
      image: "https://img.upanh.tv/2024/07/13/doctor2-min.jpg",
    },
    {
      id: 3,
      name: "BS.Nguyễn Tiến Lộc",
      department: "Bác sĩ",
      hospital: "BVM Trí Anh",
      rating: 4.5,
      experience: "15 năm",
      image: "https://img.upanh.tv/2024/07/13/doctor4-mine5b304d2f22082dc.jpg",
    },
    {
      id: 4,
      name: "BS.Nguyễn Thị Trúc Phương",
      department: "Bác sĩ",
      hospital: "BVM Trí Anh",
      rating: 4.8,
      experience: "25 năm",
      image: "https://img.upanh.tv/2024/07/13/doctor5-min81278416444e41de.jpg",
    },
  ];

  return (
    <div className="set-doctor mt-6">
      <span className="whitespace-nowrap text-sm  font-semibold">
        <p className="flex items-center font-boild">
          <span className="whitespace-nowrap ">
            <TiStarFullOutline className="text-yellow-400" />
          </span>
          Đội ngũ bác sĩ tận tình, giàu kinh nghiệm
        </p>
      </span>
      <div className="disscorllbar flex overflow-x-auto">
        {doctors.map((doctor, index) => (
          <div
            key={doctor.id}
            className={`mr-4 ${index !== doctors.length - 1 ? "" : "mr-0"}`}
          >
            <DoctorCardComponent doctor={doctor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;

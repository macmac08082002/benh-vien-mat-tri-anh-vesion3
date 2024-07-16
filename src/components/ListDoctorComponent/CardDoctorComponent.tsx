import React from "react";
import { IoMdStar } from "react-icons/io";

interface Doctor {
  image: string;
  name: string;
  department: string;
  hospital: string;
  rating: number;
  experience: string;
}

interface DoctorCardComponentProps {
  doctor: Doctor;
}

const DoctorCardComponent: React.FC<DoctorCardComponentProps> = ({
  doctor,
}) => {
  return (
    <div
      className="rounded overflow-hidden shadow-lg flex bg-white flex-col items-center"
      style={{ width: "200px", height: "250px", margin: "0.5rem" }}
    >
      <div className="flex justify-center w-full">
        <img
          className="h-32 mt-1  object-cover"
          src={doctor.image}
          alt={doctor.name}
        />
      </div>

      <div className="p-2 flex flex-col items-center text-center w-full">
        <div className="font-bold" style={{ fontSize: "10px" }}>
          {doctor.name}
        </div>
        <p className="text-gray-700 mb-1" style={{ fontSize: "10px" }}>
          Khoa: {doctor.department}
        </p>
        <p className="text-gray-700 mb-1" style={{ fontSize: "9px" }}>
          Bệnh viện: {doctor.hospital}
        </p>
        <div
          className="text-gray-700 flex items-center justify-center mb-1"
          style={{ fontSize: "10px" }}
        >
          Độ hài lòng: {doctor.rating}{" "}
          <IoMdStar
            className="ml-1 text-yellow-400"
            style={{ fontSize: "14px" }}
          />
        </div>
        <p className="text-gray-700 mb-1" style={{ fontSize: "10px" }}>
          Kinh nghiệm: {doctor.experience}
        </p>
      </div>
    </div>
  );
};

export default DoctorCardComponent;

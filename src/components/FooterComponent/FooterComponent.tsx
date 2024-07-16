import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <div className="shadow-lg mt-3">
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="bg-white  rounded-lg p-8 w-full sm:w-auto">
          <p className="mb-4 text-center ">
            <span className="text-xs font-bold">Bệnh viện mắt Trí Anh</span>
          </p>
          <div className="flex">
            <span className="text-lime-500 text-xl">
              <FaAddressCard />
            </span>
            <p className="text-xs mb-1 ml-2">
              Số 17-19-21 Nguyễn Văn Trỗi, Phường 12, Quận Phú Nhuận,TPHCM, Việt
              Nam
            </p>
          </div>
          <div>
            <p className=" text-xs flex">
              <span className="text-xl text-blue-500">
                <FaPhoneSquareAlt />
              </span>
              <span className="ml-2">028 9999 8899 và 1900 272777</span>
            </p>
            <p>
              <div className="flex">
                <strong className="text-red-500 -mt-3 text-xl">
                  <MdEmail />
                </strong>
                <a href="mailto:sales@trianh.vn" className="text-xs -mt-3 ml-2">
                  sales@trianh.vn
                </a>
              </div>
            </p>
          </div>
          <div className="w-full sm:w-auto sm:mr-8 mt-3 sm:mb-0">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.248180830473!2d106.67805297408773!3d10.792294258902803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d491e4d093%3A0xd74d9793a6d88c2a!2zMTkgxJAuIE5ndXnhu4VuIFbEg24gVHLhu5dpLCBQaMaw4budbmcgMTQsIFBow7ogTmh14bqtbiwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1719482914532!5m2!1svi!2s"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <span className="text-center flex justify-center text-red-600 mt-3">
              GOOGLE MAP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;

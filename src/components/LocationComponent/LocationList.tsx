import React, { useState } from "react";
import LocationComponent from "./LocationComponent";

const stores = [
  {
    id: 1,
    name: "Mắt Trí Anh Phú Nhuận",
    address: "Quận Phú Nhuận, TP.Hồ Chí Minh",
    phone: "0363936912",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQI2x8jEOLcaOn2rVWz9slruojZB_QY7QLz2kZ49k6TuIcOdci9",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.248180830473!2d106.67805297408773!3d10.792294258902803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d491e4d093%3A0xd74d9793a6d88c2a!2zMTkgxJAuIE5ndXnhu4VuIFbEg24gVHLhu5dpLCBQaMaw4budbmcgMTQsIFBow7ogTmh14bqtbiwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1719482914532!5m2!1svi!2s",
  },
  {
    id: 2,
    name: "Mắt Trí Anh Gò Vấp",
    address: "Quận Gò Vấp, TP.Hồ Chí Minh",
    phone: "0787188007",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQI2x8jEOLcaOn2rVWz9slruojZB_QY7QLz2kZ49k6TuIcOdci9",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.248180830473!2d106.67805297408773!3d10.792294258902803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d491e4d093%3A0xd74d9793a6d88c2a!2zMTkgxJAuIE5ndXnhu4VuIFbEg24gVHLhu5dpLCBQaMaw4budbmcgMTQsIFBow7ogTmh14bqtbiwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1719482914532!5m2!1svi!2s",
  },
  {
    id: 3,
    name: "Mắt Trí Anh Quận 1",
    address: "Quận 1, TP.Hồ Chí Minh",
    phone: "0383678787",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQI2x8jEOLcaOn2rVWz9slruojZB_QY7QLz2kZ49k6TuIcOdci9",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.248180830473!2d106.67805297408773!3d10.792294258902803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d491e4d093%3A0xd74d9793a6d88c2a!2zMTkgxJAuIE5ndXnhu4VuIFbEg24gVHLhu5dpLCBQaMaw4budbmcgMTQsIFBow7ogTmh14bqtbiwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1719482914532!5m2!1svi!2s",
  },
  {
    id: 4,
    name: "Mắt Trí Anh Quận 5",
    address: "Quận 5, TP.Hồ Chí Minh",
    phone: "0357697108",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQI2x8jEOLcaOn2rVWz9slruojZB_QY7QLz2kZ49k6TuIcOdci9",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.248180830473!2d106.67805297408773!3d10.792294258902803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d491e4d093%3A0xd74d9793a6d88c2a!2zMTkgxJAuIE5ndXnhu4VuIFbEg24gVHLhu5dpLCBQaMaw4budbmcgMTQsIFBow7ogTmh14bqtbiwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1719482914532!5m2!1svi!2s",
  },
  {
    id: 5,
    name: "Mắt Trí Anh Quận 8",
    address: "Quận 8, TP.Hồ Chí Minh",
    phone: "0383679012",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQI2x8jEOLcaOn2rVWz9slruojZB_QY7QLz2kZ49k6TuIcOdci9",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.248180830473!2d106.67805297408773!3d10.792294258902803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d491e4d093%3A0xd74d9793a6d88c2a!2zMTkgxJAuIE5ndXnhu4VuIFbEg24gVHLhu5dpLCBQaMaw4budbmcgMTQsIFBow7ogTmh14bqtbiwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1719482914532!5m2!1svi!2s",
  },
];

const LocationList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredStores = stores.filter((store) =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 set-top">
      <input
        type="text"
        placeholder="Bệnh viện gần bạn"
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full mb-4 p-2 border border-gray-300 rounded-md"
      />
      <LocationComponent stores={filteredStores} />
    </div>
  );
};

export default LocationList;

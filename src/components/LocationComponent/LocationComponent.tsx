import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  imageUrl: string;
  mapUrl: string;
}

interface StoreListProps {
  stores: Store[];
}

const LocationComponent: React.FC<StoreListProps> = ({ stores }) => {
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const handleShowMap = (store: Store) => {
    setSelectedStore(store);
  };

  const handleCloseMap = () => {
    setSelectedStore(null);
  };

  return (
    <div className=" mx-auto">
      <h2 className="text-xl text-center font-bold mb-4">
        Chi nhánh của chúng tôi tại TP.Hồ Chí Minh
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stores.map((store) => (
          <div
            key={store.id}
            className="bg-white rounded-lg overflow-hidden border border-gray-300 shadow-md"
          >
            <div>
              <div className="flex justify-center mb-6">
                <img
                  src={store.imageUrl}
                  alt={store.name}
                  className="w-[60%] h-24 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{store.name}</h3>
                <p className="text-gray-600 mb-2">{store.address}</p>
                <p className="text-gray-600 mb-4">SDT: {store.phone}</p>
                <button
                  onClick={() => handleShowMap(store)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 flex items-center w-full justify-center"
                >
                  <FaMapMarkerAlt className="mr-2" /> Xem bản đồ
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedStore && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white  rounded-lg max-w-3xl w-full">
            <h3 className="text-xl font-semibold mb-2">{selectedStore.name}</h3>
            <iframe
              title="Google Maps"
              src={selectedStore.mapUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <button
              onClick={handleCloseMap}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationComponent;

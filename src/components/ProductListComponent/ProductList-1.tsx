import React from "react";
import ProductListComponent from "./ProductListComponent";

const ProductList: React.FC = () => {
  const products = [
    {
      categoryName: "Dịch vụ khám 1",
      imageUrl: "https://example.com/image1.jpg",
      bookingLink: "/booking1",
      detailsLink: "/details1",
    },
    {
      categoryName: "Dịch vụ khám 2",
      imageUrl: "https://example.com/image2.jpg",
      bookingLink: "/booking2",
      detailsLink: "/details2",
    },
    {
      categoryName: "Dịch vụ khám 3",
      imageUrl: "https://example.com/image3.jpg",
      bookingLink: "/booking3",
      detailsLink: "/details3",
    },
  ];

  return (
    <div className="mt-3">
      <div>
        <h3>Dịch vụ khám</h3>
        <ProductListComponent products={products} />
      </div>
    </div>
  );
};

export default ProductList;

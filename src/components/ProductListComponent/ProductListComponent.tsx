import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import img from "../../assets/product/image.png";

interface Product {
  categoryName: string;
  imageUrl: string;
  bookingLink: string;
  detailsLink: string;
}

interface ProductListComponentProps {
  products: Product[];
}

const ProductListComponent: React.FC<ProductListComponentProps> = ({
  products,
}) => {
  return (
    <div className="grid flex grid-cols-1 mt-3 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-lg"
          style={{ width: "200px", height: "270px" }}
        >
          <Link to={product.bookingLink} style={{ textDecoration: "none" }}>
            <Card className="h-full flex flex-col justify-between">
              <div className="flex justify-center">
                <Card.Img
                  className="h-48 w-auto mt-2 rounded"
                  variant="top"
                  src={product.imageUrl}
                  alt="ảnh"
                  style={{ width: "80%", height: "150px" }}
                />
              </div>
              <Card.Body className="flex flex-col justify-between">
                <Card.Title
                  className="text-center"
                  style={{ fontSize: "14px" }}
                >
                  {product.categoryName}
                </Card.Title>
                <div className="justify-around mt-6">
                  <button
                    className="text-white font-bold py-2 w-full rounded text-xs"
                    style={{
                      background:
                        "linear-gradient(90deg, #dc1f18 0%, #f8954f 100%)",
                    }}
                  >
                    Đăng ký ngay
                  </button>
                  <Link
                    to={product.detailsLink}
                    style={{ textDecoration: "none" }}
                  >
                    <button
                      className="text-white font-bold py-2 mt-3 w-full rounded text-xs"
                      style={{
                        background:
                          "linear-gradient(90deg, #28a745 0%, #73d79d 100%)",
                      }}
                    >
                      chi tiết
                    </button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductListComponent;

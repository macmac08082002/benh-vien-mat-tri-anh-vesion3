import React, { Suspense } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import BannerComponent from "components/BannerComponent/BannerComponent";
import ProductList from "components/ProductListComponent/ProductList";
import DoctorList from "components/ListDoctorComponent/DoctorList";
import ProductReviewComponent from "components/ReviewCardComponent/ProductReviewComponent";
import FooterComponent from "components/FooterComponent/FooterComponent";

const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="set-top page">
      <BannerComponent />
      <ProductList />
      <DoctorList />
      <ProductReviewComponent />
      <FooterComponent />
    </div>
  );
};

export default HomePage;

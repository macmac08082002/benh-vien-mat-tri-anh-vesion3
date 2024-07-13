import React, { Suspense } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import UserCard from "components/user-card";
import BannerComponent from "components/BannerComponent/BannerComponent";
import ProductList from "components/ProductListComponent/ProductList";
import ImportForm from "components/BookingComponent/BookingComponent";
import DoctorList from "components/ListDoctorComponent/DoctorList";
import ProductReviewComponent from "components/ReviewCardComponent/ProductReviewComponent";
import ProductList1 from "components/ProductListComponent/ProductList-1";
import ProductList2 from "components/ProductListComponent/ProductList-2";
import BlogPostComponent from "components/BlogComponent/BlogPostComponent";
import ProifileComponent from "components/ProfileComponent/ProfileComponent";

const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="set-top page">
      <UserCard />
      <BannerComponent />
      <ProductList />
      <ProductList1 />
      <DoctorList />
      <ProductReviewComponent />
    </div>
  );
};

export default HomePage;

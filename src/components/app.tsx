import React from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "pages/index";
import Booking from "pages/booking";
import Form from "pages/form";
import User from "pages/user";
import News from "pages/news";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import BottomNavigationComponent from "./BottomNavigationComponent/BottomNavigationComponent";

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <HeaderComponent />
            <AnimationRoutes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/booking" element={<Booking></Booking>}></Route>
              <Route path="/form" element={<Form></Form>}></Route>
              <Route path="/user" element={<User></User>}></Route>
              <Route path="/news" element={<News></News>}></Route>
            </AnimationRoutes>
            <BottomNavigationComponent />
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;

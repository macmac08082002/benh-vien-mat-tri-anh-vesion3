// React core
import React from "react";
import { createRoot } from "react-dom/client";

// Tailwind stylesheet
import "css/tailwind.scss";

// ZaUI stylesheet
import "zmp-ui/zaui.css";

// Your stylesheet
import "css/app.scss";

//import Boostrap
import "bootstrap/dist/css/bootstrap.min.css";

// Expose app configuration
import appConfig from "../app-config.json";
if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig;
}

// Mount the app
import App from "components/app";
const root = createRoot(document.getElementById("app")!);
root.render(React.createElement(App));

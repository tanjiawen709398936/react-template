import React from "react";
import ReactDOM from "react-dom";

import { ConfigProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";

import moment from "moment";
import "moment/locale/zh-cn";

import Router from "@/router/index";
import "@/static/css/global.css";

moment.locale("zh-cn");

ReactDOM.render(
  <ConfigProvider locale={zh_CN}>
    <Router />
  </ConfigProvider>,
  document.getElementById("root")
);

// import * as serviceWorker from './serviceWorker';
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

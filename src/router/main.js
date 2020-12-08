import React from "react";
import { Route, Switch } from "react-router-dom";
import AsyncLoad from "@/components/AsyncLoad";

// Demo - 这个文件里边大家尽量不要格式化 换行会比较难以看别人代码
const Demo = AsyncLoad(() => import("@/pages/demo"));

// const NursingRecordList = AsyncLoad(() => import("@/pages/nursingRecord/list")); 


export default () => (
  <Switch>
    <Route path="/" component={Demo}></Route>  
    {/* <Route path="/nursingRecord/list" component={NursingRecordList}></Route> */}
   
  </Switch>
);

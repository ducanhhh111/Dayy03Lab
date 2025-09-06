import React from "react";
import HvtFuncComp from "./HvtFuncComp";
import HvtClassComp from "./HvtClassComp";

function HvtApp() {
  return (
    <div style={{padding: "20px"}}>
      <h1>Ứng dụng ReactJS của Đức Anh</h1>
      <HvtFuncComp name="Đức Anh" age={20} />
      <HvtClassComp name="Phùng Khắc Đức Anh" address="Hà Nội" />
    </div>
  );
}

export default HvtApp;

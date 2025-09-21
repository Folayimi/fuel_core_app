import LandingPage from "@/pages/LandingPage";
import React from "react";
import tw, { useDeviceContext } from "twrnc";

const index = () => {
  useDeviceContext(tw);
  return <LandingPage />;
};

export default index;

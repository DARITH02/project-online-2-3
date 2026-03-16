import React from "react";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={"Heme page"} />
      </Routes>
    </>
  );
};

export default AppRouter;

import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
        <Navbar></Navbar>
      <main className="min-h-[calc(100vh-116px)]">
        <div className="w-11/12 mx-auto mt-5 ">
          {navigation.state == "loading" ? (
           <div className="text-center text-green-500 text-2xl p-5 mt-10">
<span className="loading loading-bars loading-xl"></span>
        </div>
          ) : (
            <Outlet />
          )}
        </div>
      </main>
        <Footer></Footer>
    </div>
  );
};

export default Root;

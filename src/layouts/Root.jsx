import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-116px)]">
        <div className="w-11/12 mx-auto mt-5 ">
          {navigation.state == "loading" ? (
            <span className="loading loading-bars loading-xl"></span>
          ) : (
            <Outlet />
          )}
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;

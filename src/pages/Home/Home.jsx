import React, { Suspense, useEffect, useState } from "react";
import Banner from "./Banner";
import BookCategories from "./BookCategories";
import Extra1 from "./Extra1";
import Extra2 from "./Extra2";
import NewArrivals from "./NewArrivals";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
            <BookCategories></BookCategories>
            <NewArrivals></NewArrivals>
            <Extra2></Extra2>
            <Extra1></Extra1>
    </div>
  );
};

export default Home;
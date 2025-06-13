import React, { Suspense, useEffect, useState } from "react";
import Banner from "./Banner";
import BookCategories from "./BookCategories";
import Extra1 from "./Extra1";

// const jobsPromise = fetch("http://localhost:5000/jobs").then(res => res.json())

const Home = () => {
  // const [jobs, setJobs] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(true);
  //   fetch("http://localhost:5000/jobs")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setJobs(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Failed to fetch jobs:", error);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return <div className="loading loading-spinner loading-xl"></div>;
  // }
  return (
    <div>
      <Banner></Banner>
      {/* <Suspense>
            <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense> */}
            <BookCategories></BookCategories>

            <Extra1></Extra1>
    </div>
  );
};

export default Home;

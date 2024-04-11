import React from "react";
import Navbar from "@/components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl">Home</h1>
        <div>home page stuff</div>
        <div className="mt-[8rem] flex flex-col items-center">
          <h2 className="font-bold text-2xl">Welcome</h2>
          <p>To see the welcome message, please log in!</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;

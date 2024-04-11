"use client";

import React, { useState } from "react";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const closeAuthModal = () => {
    setIsModalVisible(false);
  };

  const openAuthModal = (isLogin: boolean) => {
    isLogin ? setIsLogin(true) : setIsLogin(false);

    setIsModalVisible(true);
  };

  return (
    <>
      {isModalVisible && <AuthModal isLogin={isLogin} closeAuthModal={closeAuthModal} />}
      <nav className="flex justify-between p-2 bg-slate-800">
        <div className="flex items-center text-[2rem] text-white">DELFIN</div>
        <div className="flex">
          <button className="p-2 mr-10 bg-cyan-200 rounded-md" onClick={() => openAuthModal(true)}>
            Log in
          </button>
          <button className="p-2 bg-blue-600 rounded-md text-white" onClick={() => openAuthModal(false)}>
            Register
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

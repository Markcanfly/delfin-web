"use client";

import React, { useState } from "react";
import AuthModal from "./AuthModal";
import Link from "next/link";
// import { getUser } from "@/lib/auth";
import SignOutButton from "@/components/SignOutButton";

const Navbar = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  // const user = await getUser();

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
          <Link href="/login" className="flex items-center jusitfy-center p-2 mr-10 bg-cyan-200 rounded-md">
            Log in
          </Link>
          {/* <button className="p-2 bg-blue-600 rounded-md text-white" onClick={() => openAuthModal(false)}>
            Register
          </button> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

/*



  <>
      {isModalVisible && <AuthModal isLogin={isLogin} closeAuthModal={closeAuthModal} />}
      <nav className="flex justify-between p-2 bg-slate-800">
        <div className="flex items-center text-[2rem] text-white">DELFIN</div>
        {user ? (
          <div className="flex">
            <p className="p-2 mr-10">{user.email}</p>
            <button className="p-2 bg-blue-600 rounded-md text-white">Sign Out</button>
          </div>
        ) : (
          <div className="flex">
            <Link href="/login" className="p-2 mr-10 bg-cyan-200 rounded-md">
              Log in
            </Link>
            <button className="p-2 bg-blue-600 rounded-md text-white">Register</button>
          </div>
        )}
      </nav>
    </>
 */

import React from "react";

type ModalType = {
  isLogin: boolean;
  closeAuthModal: () => void;
};

const AuthModal = ({ isLogin, closeAuthModal }: ModalType) => {
  return (
    <div className="flex absolute bg-black bg-opacity-50 items-center justify-center h-screen w-screen">
      <div className="flex flex-col p-4 relative items-center bg-slate-100 w-[500px] h-[300px] rounded-lg">
        <button className="absolute right-2 top-2 text-2xl" onClick={closeAuthModal}>
          X
        </button>
        <h2 className="font-bold text-xl">{isLogin ? "Login" : "Registration"}</h2>
        <div className="flex justify-center absolute bottom-4 ">
          <button className="p-2 bg-blue-600 rounded-md text-white">{isLogin ? "Log in" : "Register"}</button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

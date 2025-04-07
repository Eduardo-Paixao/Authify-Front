import React, { ReactNode, useState } from "react";
interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen = false }) => {

  return (
    <>
      {isOpen && (
        <div className="bg-[#09090a8a] absolute w-full -top-32 h-[100vh] flex justify-center items-center ">
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;

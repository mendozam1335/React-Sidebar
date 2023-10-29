import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div className={isModalOpen ? "overlay show-modal" : "overlay"}>
      <div className="modal-content">
        <button className="modal-close" onClick={closeModal}>
          <FaTimes />
        </button>
        <h2>Modal Content</h2>
      </div>
    </div>
  );
};

export default Modal;

import React, { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div
      className={`fixed inset-0 ${
        showModal ? "block" : "hidden"
      } h-full w-full`}
    >
      <div className="absolute inset-0 bg-gray-800 opacity-50" />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      bg-white p-4 rounded-lg shadow-lg h-[600px] w-[600px] bg-lavanda-white"
      >
        <button
          className="w-full flex justify-end"
          onClick={() => setShowModal(false)}
        >
          Fechar (X)
        </button>
        <div className="flex flex-col h-[520px] w-full justify-between items-center">
          <div className="h-full w-full flex items-center justify-center">
            <div
            className="rounded"
              style={{ 
                backgroundImage: "url('/src/assets/quiz-img.png')",
                height: '95%',
                width: '100%',
                backgroundSize: 'cover'
              }}
            />
          </div>
          <div className="bg-lavanda-basic rounded w-fit h-[50px]
           text-lavanda-white flex items-center px-3 cursor-pointer">
            fazer teste
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

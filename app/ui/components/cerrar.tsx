'use client'
import React from 'react';

const CloseButton = () => {
  const handleClose = () => {
    window.close();
  };

  return (
    <button onClick={handleClose} className='bg-cyan-700 '>
      Cerrar
    </button>
  );
};

export default CloseButton;

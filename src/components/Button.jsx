import React from 'react';

function Button({ label, onClick, className }) {
  return (
    <button
      className={` font-bold rounded hover:bg-primary hover:text-secondary duration-150 ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;

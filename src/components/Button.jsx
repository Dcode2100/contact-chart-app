import React from 'react';

function Button({ label, onClick, style }) {
  return (
    <button
      className={`bg-secondary font-bold rounded ${style}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;

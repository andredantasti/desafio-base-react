import React from "react";

const AlertaBotao = (label) => {
  alert(`A label desse botão é ${label}`);
};

const Button = ({ label }) => {
  return (
    <p>
      <button onClick={() => AlertaBotao(label)}>{label}</button>
    </p>
  );
};

export default Button;

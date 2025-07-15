
import './button.css'

const AlertaBotao = (label) => {
  alert(`A label desse botão é ${label}`);
};

const Button = ({ label }) => {
  return (
    <p>
      <button className="btn" onClick={() => AlertaBotao(label)}>{label}</button>
    </p>
  );
};

export default Button;

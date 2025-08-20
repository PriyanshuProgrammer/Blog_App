import './input.css';


const Input = ({
  style,
  label,
  type = 'text',
  placeholder = '',
  custom_div,
  ...rest
}) => {
  return (
    <>
    <div className="input-wrapper">
      <label htmlFor={label}>{label}</label>
      {custom_div ? null : (
        <input
          style={style}
          id={label}
          placeholder={placeholder}
          type={type}
          {...rest}
        />
      )}
    </div>
  );
};

export default Input;

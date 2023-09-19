import { ReactElement, forwardRef, ForwardedRef, InputHTMLAttributes } from "react";
import PropTypes from "prop-types";
import type { FC } from "react";
import { InputStyles, InputField } from "./InputStyles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
}

const Input: FC<InputProps> = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>): ReactElement => {
  const { name, id, type, value, onChange, placeholder, onClick, onFocus, onBlur, className, style, checked } = props;
  return (
    <InputStyles>
      <InputField
        ref={ref}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        className={className}
        style={style}
        autoComplete="false"
        checked={checked}
      />
    </InputStyles>
  );
});

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  style: PropTypes.object,
  checked: PropTypes.bool
};

export default Input;

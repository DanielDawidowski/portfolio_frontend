import React, { ReactElement, ChangeEvent } from "react";
import PropTypes from "prop-types";
import { TextAreaField, TextAreaStyles } from "./TextAreaStyles";

interface TextAreaProps {
  onChange: (value: string) => void;
  value?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ onChange, value }): ReactElement => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };
  return (
    <TextAreaStyles>
      <TextAreaField onChange={handleChange} rows={8} value={value} />
    </TextAreaStyles>
  );
};

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default TextArea;

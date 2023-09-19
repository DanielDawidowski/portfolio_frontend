import React, { ReactElement, ChangeEvent } from "react";
import PropTypes from "prop-types";
import { TextAreaField, TextAreaStyles } from "./TextAreaStyles";

interface TextAreaProps {
  onChange: (value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ onChange }): ReactElement => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };
  return (
    <TextAreaStyles>
      <TextAreaField onChange={handleChange} rows={8} />
    </TextAreaStyles>
  );
};

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default TextArea;

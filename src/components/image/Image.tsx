import { FC, ReactElement } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { ImageProps } from "./Image.interface";

const Image: FC<ImageProps> = (props): ReactElement => {
  const { src, alt } = props;

  return <motion.img src={src} alt={alt} loading="lazy" />;
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

export default Image;

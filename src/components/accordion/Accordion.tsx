import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import PropTypes from "prop-types";

// Styled-components styles
const AccordionContainer = styled(motion.div)`
  overflow: hidden;
`;

const AccordionHeader = styled.div`
  cursor: pointer;
  padding: ${(props) => props.theme.size5} 6px;
  border-top: 1px solid ${(props) => props.theme.turquoise_dark};
  display: flex;
  justify-content: space-between;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    padding: ${(props) => props.theme.size6} 6px;
  }

  h2 {
    font-size: ${(props) => props.theme.size5};
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      font-size: ${(props) => props.theme.size6};
    }
  }
`;

const AccordionContent = styled(motion.div)`
  padding: 0;
`;

interface AccordionProps {
  title: ReactNode;
  isOpen: boolean;
  onClick: () => void;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, isOpen, onClick, children }) => {
  return (
    <AccordionContainer>
      <AccordionHeader onClick={onClick}>
        <h2 className="black-border">{title}</h2>
      </AccordionHeader>
      <AnimatePresence>
        {isOpen && (
          <AccordionContent
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          >
            {children}
          </AccordionContent>
        )}
      </AnimatePresence>
    </AccordionContainer>
  );
};

Accordion.propTypes = {
  title: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default Accordion;

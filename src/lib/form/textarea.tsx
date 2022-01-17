import React, { TextareaHTMLAttributes } from "react";
import styled from "styled-components";
import { baseInputStyle, StyledMessage, VariantProp } from "./field";

const Wrapper = styled.div`
  height: 115px;
  width: 400px;
  position: relative;
`;

const StyledTextarea = styled.textarea`
  resize: none;
  padding: 16px;
  ${baseInputStyle}
`;

type TextareaProps = VariantProp &
  TextareaHTMLAttributes<HTMLTextAreaElement> & { message?: string };

const Textarea: React.FC<TextareaProps> = ({ message, variant, ...props }) => (
  <Wrapper>
    <StyledTextarea {...props} />
    {message && <StyledMessage variant={variant}>{message}</StyledMessage>}
  </Wrapper>
);

Textarea.displayName = "Textarea";

export default Textarea;

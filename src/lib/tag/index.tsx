import React from "react";
import styled from "styled-components";
import {
  borderBox,
  p,
  button,
  hoverShortTransitionTiming,
} from "../../styles/common-style";

interface BaseTagProps {
  active?: boolean;
  as?: "div" | "span";
}

const BaseTag = styled.button<BaseTagProps>`
  ${borderBox}
  ${button}
  height: 32px;
  background-color: ${({ theme }) => theme.klerosUIComponentsMediumBlue};
  border: ${({ theme, active }) =>
    active ? `1px solid ${theme.klerosUIComponentsPrimaryBlue}` : "none"};
  border-radius: 300px;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    ${({ active, theme }) =>
      !active &&
      `
      p {
        color: ${theme.klerosUIComponentsSecondaryBlue};
      }
    `}
  }
`;

const StyledText = styled.p`
  ${p}
  ${hoverShortTransitionTiming}
  color: ${({ theme }) => theme.klerosUIComponentsPrimaryBlue};
`;

interface TagProps extends BaseTagProps {
  text: string;
}

const Tag: React.FC<TagProps> = ({ text, active, as, ...props }) => (
  <BaseTag {...{ active, as, ...props }}>
    <StyledText>{text}</StyledText>
  </BaseTag>
);

export default Tag;

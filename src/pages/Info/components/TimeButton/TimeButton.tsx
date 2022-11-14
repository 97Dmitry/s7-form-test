import { FC } from "react";
import styled from "styled-components";

interface TimeButtonProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

const TimeButton: FC<TimeButtonProps> = ({ text, isSelected, onClick }) => {
  return (
    <Root $isSelected={isSelected} onClick={onClick}>
      <Text $isSelected={isSelected}>{text}</Text>
    </Root>
  );
};

const Root = styled.div<{ $isSelected?: boolean }>`
  border: 1px solid #b7bac1;
  border-radius: 10px;
  height: max-content;
  margin-right: 17px;
  padding: ${({ $isSelected }) => ($isSelected ? "8px 12px" : "6px 3px")};
  background: ${({ $isSelected }) => ($isSelected ? "#DDE3EE" : "#fff")};
  cursor: pointer;
`;

const Text = styled.div<{ $isSelected?: boolean }>`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  color: ${({ $isSelected }) => ($isSelected ? "#232323" : "#5C5C5C")};
`;

export default TimeButton;

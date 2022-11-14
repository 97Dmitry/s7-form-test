import { FC, InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const Input: FC<InputProps> = ({ ...rest }) => {
  return (
    <Root>
      <InputWrapper>
        <StyledInput {...rest} />
      </InputWrapper>
    </Root>
  );
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  withIcon?: ReactNode;
  label?: string;
}

const Root = styled.div`
  position: relative;
`;

const InputWrapper = styled.div``;

const StyledInput = styled.input`
  &::placeholder {
    font-weight: 700;
    color: #b7bac1;
  }
`;

export default Input;

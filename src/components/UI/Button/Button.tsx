import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, ...rest }) => {
  return <Root {...rest}>{children}</Root>;
};

export default Button;

const Root = styled.button`
  background: #5c87db;
  border-radius: 10px;
  padding: 18px 20px;
  color: #fff;

  &:hover {
    background: #3e67b7;
  }

  &:disabled {
    background: #b7bac1;
    cursor: default;
  }
`;

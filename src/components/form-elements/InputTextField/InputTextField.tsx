import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import Input, { InputProps } from "components/UI/Input/Input";
import styled from "styled-components";

export type InputTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  InputProps;

const InputTextField = <T extends FieldValues>(
  props: InputTextFieldProps<T>
) => {
  const { name, control, rules, label, className, withIcon, ...rest } = props;
  const { field } = useController<T>({
    name,
    control,
    rules,
  });

  const handleChange = (value: string) => {
    field.onChange(value);
  };

  return (
    <Root className={className}>
      {label && <Label>{label}</Label>}
      <InputWrapper>
        <>
          {withIcon && withIcon}
          <StyledInput
            $isWithIcon={!!withIcon}
            {...rest}
            value={field.value}
            onChange={(event) => handleChange(event.target.value)}
          />
        </>
      </InputWrapper>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  background: #fff;
  padding: 12px;
  border-radius: 10px;
`;

const StyledInput = styled(Input)<{ $isWithIcon?: boolean }>`
  width: 100%;
  padding-left: ${({ $isWithIcon }) => ($isWithIcon ? "10px" : 0)};
`;

const Label = styled.span`
  font-size: 11px;
  line-height: 13px;
  color: #fff;
`;

export default InputTextField;

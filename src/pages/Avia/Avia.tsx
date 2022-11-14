import { CalendarIcon } from "assets/svg";
import { Button, InputTextField } from "components";
import { AppRoutes } from "constants/routes";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import styled from "styled-components";

export interface FormValues {
  from: string;
  to: string;
  departureDate: string;
  returnDate: string;
}

const Avia = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({
    defaultValues: { from: "", to: "", departureDate: "", returnDate: "" },
    mode: "onChange",
  });

  const submitHandler = (data: FormValues) => {
    navigate({
      pathname: AppRoutes.INFO,
      search: `?${createSearchParams({ ...data })}`,
    });
  };

  return (
    <Root>
      <FormBlock onSubmit={handleSubmit(submitHandler)}>
        <Fields>
          <InputTextField
            name="from"
            control={control}
            placeholder="Город вылета"
            label="Откуда"
            rules={{ required: true }}
          />
          <InputTextField
            name="to"
            control={control}
            placeholder="Город вылета"
            label="Куда"
            rules={{ required: true }}
          />
          <InputTextField
            name="departureDate"
            control={control}
            placeholder="дд.мм.гг"
            label="Туда"
            rules={{ required: true }}
            withIcon={<CalendarIcon />}
          />
          <InputTextField
            name="returnDate"
            control={control}
            placeholder="дд.мм.гг"
            label="Обратно"
            withIcon={<CalendarIcon fill="#5C5C5C" />}
          />
        </Fields>
        <SubmitButtonBlock>
          <Button type="submit" disabled={!isValid}>
            Найти билеты
          </Button>
        </SubmitButtonBlock>
      </FormBlock>
    </Root>
  );
};

export default Avia;

const Root = styled.div`
  margin: 0 auto;
  padding-top: 68px;
  max-width: max-content;
`;

const FormBlock = styled.form``;

const Fields = styled.div`
  display: flex;
  background: #5c87db;
  padding: 17px 30px 30px;
  border-radius: 15px 15px 0px 0px;

  & div {
    margin-right: 25px;
  }

  & div:last-child {
    margin-right: 0;
  }
`;

const SubmitButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  box-shadow: 0px 0px 14px rgba(112, 121, 153, 0.3);
  border-radius: 0px 0px 15px 15px;
  padding: 23px 29px;
  width: 100%;
`;

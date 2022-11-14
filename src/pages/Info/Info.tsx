import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { CardContent } from "./components";

const Info = () => {
  const [searchParams] = useSearchParams();

  return (
    <Root>
      <Content>
        <CardWrapper>
          <CardContent
            from={searchParams.get("from")}
            to={searchParams.get("to")}
            departureDate={searchParams.get("departureDate")}
            isNotSingleCard={!!searchParams.get("returnDate")}
          />
          {searchParams.get("returnDate") && (
            <CardContent
              to={searchParams.get("from")}
              from={searchParams.get("to")}
              departureDate={searchParams.get("returnDate")}
              isNotSingleCard={!!searchParams.get("returnDate")}
              isLastItem={true}
            />
          )}
        </CardWrapper>
        <PriceBlock>
          <Price>
            {!!searchParams.get("returnDate") ? "8 300 ₽" : "4 150 ₽"}
          </Price>
        </PriceBlock>
      </Content>
    </Root>
  );
};

export default Info;

const Root = styled.div`
  padding-top: 70px;
  max-width: max-content;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  box-shadow: 0px 0px 14px rgba(112, 121, 153, 0.3);
  border-radius: 15px;
`;

const CardWrapper = styled.div``;

const PriceBlock = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  justify-content: center;
  width: 190px;
  border-left: 1px solid #dde3ee; ;
`;

const Price = styled.span`
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #232323;
`;

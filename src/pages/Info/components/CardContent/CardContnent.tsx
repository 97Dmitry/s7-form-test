import styled from "styled-components";
import Logo from "assets/image/s7-logo.png";
import FlyLine from "assets/image/fly-line.png";
import { FC, useState } from "react";
import { BaggageIcon, BagIcon } from "assets/svg";
import { TimeButton } from "../TimeButton";

interface FlightTime {
  id: number;
  departure: string;
  arrival: string;
}

interface CardContentProps {
  from?: string | null;
  to?: string | null;
  departureDate?: string | null;
  isNotSingleCard?: boolean;
  isLastItem?: boolean;
}

const flightTimes: Array<FlightTime> = [
  {
    id: 1,
    departure: "9:20",
    arrival: "11:05",
  },
  {
    id: 2,
    departure: "10:20",
    arrival: "12:05",
  },
  {
    id: 3,
    departure: "11:20",
    arrival: "13:05",
  },
];

const CardContent: FC<CardContentProps> = ({
  from,
  to,
  departureDate,
  isNotSingleCard,
  isLastItem,
}) => {
  const [selectedTime, setSelectedTime] = useState<FlightTime>(flightTimes[0]);

  const timeSelectHandel = (index: number) => {
    setSelectedTime(flightTimes[index]);
  };

  return (
    <Root $isNotSingleCard={isNotSingleCard}>
      <LabelBlock>
        <CardLabel>Невозвратный</CardLabel>
        <CardLogo>
          <LogoImg src={Logo} alt="logo" />
          <LogoText>S7 Airlines</LogoText>
        </CardLogo>
      </LabelBlock>
      <ContentWrapper
        $isNotSingleCard={isNotSingleCard}
        $isLastItem={isLastItem}
      >
        <ContentBlock>
          <TimeDateWrapper>
            <Time>{selectedTime.departure}</Time>
            <City>{from}</City>
            <Date>{departureDate}</Date>
          </TimeDateWrapper>
          <FlyLineWrapper>
            <img src={FlyLine} alt="" />
            <FlyLineText>В пути 1 ч 55 мин</FlyLineText>
          </FlyLineWrapper>
          <TimeDateWrapper>
            <Time>{selectedTime.arrival}</Time>
            <City>{to}</City>
            <Date>{departureDate}</Date>
          </TimeDateWrapper>
          <IconsWrapper>
            <BagIcon />
            <BaggageIcon />
          </IconsWrapper>
        </ContentBlock>
        {!isNotSingleCard && (
          <TimesButtonsWrapper style={{ display: "flex" }}>
            {flightTimes.map((time, index) => (
              <TimeButton
                key={time.id}
                text={`${time.departure} - ${time.arrival}`}
                isSelected={selectedTime.id === time.id}
                onClick={() => timeSelectHandel(index)}
              />
            ))}
          </TimesButtonsWrapper>
        )}
      </ContentWrapper>
    </Root>
  );
};

export default CardContent;

const Root = styled.div<{ $isNotSingleCard?: boolean }>`
  display: flex;
  width: 790px;
  height: ${({ $isNotSingleCard }) => ($isNotSingleCard ? "165px" : "200px")};
`;

const LabelBlock = styled.div`
  width: max-content;
  height: 100%;
`;

const CardLabel = styled.div`
  background: #8ba5d8;
  border-radius: 15px 0px;
  padding: 6px 24px;
  width: max-content;
  margin-bottom: 28px;
  color: #fff;
`;

const CardLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LogoImg = styled.img`
  width: 39px;
  margin-bottom: 8px;
`;

const LogoText = styled.span`
  font-size: 18px;
  line-height: 21px;
  color: #5c5c5c;
`;

const ContentWrapper = styled.div<{
  $isNotSingleCard?: boolean;
  $isLastItem?: boolean;
}>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.2fr 0.8fr;
  width: 100%;
  border-bottom: ${({ $isNotSingleCard, $isLastItem }) =>
    $isNotSingleCard && !$isLastItem ? "1px dashed #8ba5d8" : ""};
  padding-left: 25px;
`;

const ContentBlock = styled.div`
  display: flex;
  width: 100%;

  margin-bottom: -1px;
`;

const TimeDateWrapper = styled.div`
  padding-top: 40px;
  min-width: 100px;
`;

const Time = styled.div`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #232323;
`;

const City = styled.div`
  font-weight: 500;
  color: #5c5c5c;
`;

const Date = styled.div`
  color: #5c5c5c;
`;

const IconsWrapper = styled.div`
  padding-top: 36px;
  padding-right: 20px;
  margin-left: auto;

  & svg {
    margin-right: 10px;
  }

  & svg:last-child {
    margin-right: 0;
  }
`;

const TimesButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FlyLineWrapper = styled.div`
  padding-top: 32px;
  width: 300px;
  margin-right: 28px;
  text-align: center;
`;

const FlyLineText = styled.span`
  color: #b7bac1;
`;

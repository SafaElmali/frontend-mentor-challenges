import styled from "styled-components";
import hero from "../../assets/images/illustration-hero.svg";
import iconMusic from "../../assets/images/icon-music.svg";

const OrderSummaryCard = () => {
  return (
    <StyledOrderSummaryCard>
      <CardHeader src={hero} />
      <CardBody>
        <CardTitle>Order Summary</CardTitle>
        <CardText>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </CardText>
        <OrderPriceContainer>
          <ContainerLeftSide>
            <Icon src={iconMusic} />
            <PlanContainer>
              <PlanTitle>Annual Plan</PlanTitle>
              <PlanPrice>$59.99/year</PlanPrice>
            </PlanContainer>
          </ContainerLeftSide>
          <PlanChangeContainer>
            <PlanChangeLink href="#">Change</PlanChangeLink>
          </PlanChangeContainer>
        </OrderPriceContainer>
        <ButtonContainers>
          <PaymentButton>Proceed to Payment</PaymentButton>
          <CancelButton>Cancel Order</CancelButton>
        </ButtonContainers>
      </CardBody>
    </StyledOrderSummaryCard>
  );
};

export default OrderSummaryCard;

const StyledOrderSummaryCard = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 0 auto;
  max-height: 700px;
  max-width: 500px;
  position: relative;
  width: 500px;
  margin: 24px;
  z-index: 2;
`;

const CardHeader = styled.img`
  border-radius: 20px 20px 0px 0px;
  width: 100%;
`;

const CardBody = styled.div`
  padding: 32px;
  text-align: center;
  @media ${({ theme }) => theme.device.laptopL} {
    padding: 48px;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
  margin-bottom: 24px;
`;

const CardText = styled.p`
  color: ${({ theme }) => theme.colors.neutral.desaturatedBlue};
  font-size: 1em;
  font-weight: normal;
  letter-spacing: 1px;
  line-height: 26px;
  margin: 0 auto;
  margin-bottom: 24px;
  width: 80%;
`;

const OrderPriceContainer = styled.div`
  align-items: center;
  background-color: #f7f9ff;
  border-radius: 11px;
  display: flex;
  height: 100px;
  justify-content: space-between;
  padding: 24px 25px;
`;

const ContainerLeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Icon = styled.img``;

const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const PlanTitle = styled.h4`
  margin: 0;
`;

const PlanPrice = styled.span`
  color: #717fa6;
`;

const PlanChangeContainer = styled.div``;

const PlanChangeLink = styled.a`
  font-weight: bold;
  font-size: 14px;
  :hover {
    color: #766cf1;
    text-decoration: none;
  }
  @media ${({ theme }) => theme.device.mobileM} {
    font-size: 13px;
  }
`;

const ButtonContainers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
`;

const PaymentButton = styled.button`
  background-color: #382ae1;
  border-radius: 11px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  padding: 15px;
  text-align: center;
  filter: drop-shadow(
    0 20px 20px ${({ theme }) => theme.colors.primary.brightBlue}
  );
  :hover {
    background-color: #766cf1;
  }
`;

const CancelButton = styled.a`
  color: ${({ theme }) => theme.colors.neutral.desaturatedBlue};
  cursor: pointer;
  font-weight: bold;
  :hover {
    color: ${({ theme }) => theme.colors.neutral.darkBlue};
  }
`;

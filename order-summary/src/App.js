import styled from "styled-components";
import desktopWave from "./assets/images/pattern-background-desktop.svg";
import mobileWave from "./assets/images/pattern-background-mobile.svg";
import OrderSummaryCard from "./components/OrderSummaryCard/OrderSummaryCard";

const App = () => {
  return (
    <StyledBackground>
      <StyledWave />
      <OrderSummaryCardContainer>
        <OrderSummaryCard />
      </OrderSummaryCardContainer>
    </StyledBackground>
  );
};

export default App;

const StyledBackground = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary.paleBlue};
`;

const StyledWave = styled.div`
  background: url(${mobileWave});
  height: 194px;
  width: 100%;
  position: absolute;
  z-index: 0;
  @media ${({ theme }) => theme.device.mobileM} {
    background-image: url(${desktopWave});
    height: 437px;
  }
`;

const OrderSummaryCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

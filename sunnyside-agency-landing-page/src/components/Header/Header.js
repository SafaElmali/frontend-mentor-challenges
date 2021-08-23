import styled from "styled-components";
import ImageHeaderDesktop from "assets/images/desktop/image-header.jpg";
import ImageHeaderMobile from "assets/images/mobile/image-header.jpg";
import TopNav from "components/Nav/TopNav";

const Header = () => {
  return (
    <HeaderContainer>
      <TopNav />
      <Title>We are creatives</Title>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  background: url(${ImageHeaderDesktop});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10px;
  height: 100vh;
  width: 100%;
  @media (max-width: 375px) {
    background: url(${ImageHeaderMobile});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-family: ${({ theme }) => theme.typography.fraunces};
  font-size: 56px;
  letter-spacing: 1.5px;
  margin-top: 0.6em;
  text-align: center;
  text-transform: uppercase;
`;

import styled from "styled-components";
import useWindowSize from "hooks/useWindowSize";
import sunnysideIcon from "assets/images/sunnyside.svg";
import hamburgerIcon from "assets/images/icon-hamburger.svg";
import useOutsideClickListener from "hooks/useOutsideClickListener";

const COLLAPSED_WIDTH_SIZE = 730;

const TopNav = () => {
  const [width] = useWindowSize();
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideClickListener(false);

  const handleModal = () => {
    setIsComponentVisible(true);
  };

  return (
    <TopNavContainer>
      <LeftSide>
        <TopNavBrandContainer>
          <TopNavBrand src={sunnysideIcon} />
        </TopNavBrandContainer>
      </LeftSide>
      {width < COLLAPSED_WIDTH_SIZE ? (
        <HamburgerContainer>
          <HamburgerIcon src={hamburgerIcon} onClick={handleModal} />
          {isComponentVisible && (
            <PopupContainer ref={ref}>
              <PopupItemList>
                <PopupItem>About</PopupItem>
                <PopupItem>Services</PopupItem>
                <PopupItem>Projects</PopupItem>
                <PopupItem>Contact</PopupItem>
              </PopupItemList>
            </PopupContainer>
          )}
        </HamburgerContainer>
      ) : (
        <RightSide>
          <NavigationItemList>
            <NavigationItem>About</NavigationItem>
            <NavigationItem>Services</NavigationItem>
            <NavigationItem>Projects</NavigationItem>
            <NavigationItem>Contact</NavigationItem>
          </NavigationItemList>
        </RightSide>
      )}
    </TopNavContainer>
  );
};

export default TopNav;

const TopNavContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
`;

const TopNavBrandContainer = styled.div`
  margin-top: 10px;
  padding: 20px;
  @media (max-width: 730px) {
    padding: 10px 0px;
  }
`;

const TopNavBrand = styled.img``;

const LeftSide = styled.div``;

const RightSide = styled.div``;

const NavigationItemList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  font-size: 18px;
  font-family: ${({ theme }) => theme.typography.barlow};
  color: ${({ theme }) => theme.colors.neutral.white};
  @media (max-width: 730px) {
    display: none;
  }
`;

const NavigationItem = styled.li`
  cursor: pointer;
  padding: 10px 20px;
  &:hover {
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const HamburgerContainer = styled.div`
  position: relative;
`;

const HamburgerIcon = styled.img`
  cursor: pointer;
`;

const PopupContainer = styled.div`
  position: absolute;
  background-color: #ffff;
  top: 50px;
  right: 0;
`;

const PopupItemList = styled.ul`
  align-items: center;
  display: flex;
  color: ${({ theme }) => theme.colors.neutral.darkGrayishBlue};
  flex-direction: column;
  font-family: ${({ theme }) => theme.typography.barlow};
  gap: 20px;
  justify-content: center;
  list-style: none;
  max-width: 250px;
  padding: 0;
  width: 250px;
`;

const PopupItem = styled.li`
  cursor: pointer;
  padding: 10px 20px;
  &:hover {
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.primary.yellow};
    color: ${({ theme }) => theme.colors.neutral.veryDarkDesaturatedBlue};
  }
`;

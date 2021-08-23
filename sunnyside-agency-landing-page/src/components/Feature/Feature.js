import styled from "styled-components";

const Feature = () => {
  return (
    <FeatureContainer>
      <TextSide>
        <Title>Transform your brand</Title>
        <Detail>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </Detail>
        <Button>Learn More</Button>
      </TextSide>
      <ImageSide></ImageSide>
    </FeatureContainer>
  );
};

export default Feature;

const FeatureContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 10px;
  padding: 5em;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const TextSide = styled.div`
  grid-column: 1;
  grid-row: 1;
  grid-row-gap: 10px;
  padding: 10px;
  background-color: #fff;
`;
const ImageSide = styled.div``;
const Title = styled.h1``;
const Detail = styled.p``;
const Button = styled.button``;

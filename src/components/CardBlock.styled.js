import styled from "styled-components";

export const ContainerCard = styled.div`
  position: absolute;
  display: flex;
  height: 15em;
  width: 30em;
  border: 1px solid black;
  background-position: center;
  background-image: ${({ background }) =>
    background ? `url(${background})` : "none"};
  p {
    color: white;
    font-size: 1em;
    margin: 0.3em;
  }
  box-shadow: 2px 2px 27px -5px rgba(0, 0, 0, 0.75);
  border-radius: 25px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentNumber = styled.div``;

export const CardNumber = styled.div`
  height: 2.3em;
  width: 19.1em;
  border: 1px solid white;
  p {
    font-size: 1.3em;
  }
`;

export const ContentName = styled.div``;

export const CardName = styled.div`
  height: 2.3em;
  width: 15.1em;
  border: 1px solid white;
`;

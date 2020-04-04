import styled from "styled-components"

export const ContainerCard = styled.div`
  position: absolute;
  display: flex;
  height: 15em;
  width: 26.2em;
  /* border: 1px solid black; */
  background-position: center;
  background-image: ${({ background }) => (background ? `url(${background})` : "none")};
  p {
    color: white;
    font-size: 1em;
    margin: 0.3em;
    text-align: center;
  }
  span {
    color: white;
  }
  box-shadow: 2px 2px 27px -5px rgba(0, 0, 0, 0.75);
  border-radius: 25px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const ContentNumber = styled.div``

export const CardNumber = styled.div`
  height: 2.3em;
  width: 19.1em;
  /* border: 1px solid white; */
  p {
    font-size: 1.3em;
    font-family: monospace;
  }
`

export const ContentName = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

export const CardName = styled.div`
  height: 2.3em;
  width: 15.1em;
  /* border: 1px solid white; */
  p {
    font-size: 1.4em;
    font-family: monospace;
    text-align: left;
  }
`

export const CardDate = styled.div`
  /* border: 1px solid white; */
  width: 8.6em;
  text-align: center;
  p {
    color: white;
    font-size: 1.4em;
    margin: 0.3em;
    text-align: center;
    font-family: monospace;
  }
`

export const BlockSimCard = styled.div`
  justify-content: space-between;
  display: flex;
  border: 1px solid;
  width: 100%;
`

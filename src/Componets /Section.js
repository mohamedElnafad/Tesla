import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
function Section({ name, img, desc, firstButtonText, secondButtonText }) {
  return (
    <Wrap bgImage={img}>
      <Fade bottom>
        <TextItem>
          <h1>{name}</h1>
          <p>{desc}</p>
        </TextItem>
      </Fade>
      <div>
        <ButtonsGroub>
          <Fade left>
            <FirstButton>{firstButtonText}</FirstButton>
          </Fade>
          <Fade right>
            {secondButtonText && (
              <SecondButton>{secondButtonText}</SecondButton>
            )}
          </Fade>
        </ButtonsGroub>
        <DownArrow src='/images/down-arrow.svg' />
      </div>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(p) => `url("${p.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TextItem = styled.div`
  padding-top: 15vh;
`
const ButtonsGroub = styled.div`
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`
const FirstButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  border-radius: 100px;
  color: white;
  height: 40px;
  width: 300px;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-itmes: center
  opacity: 0.8;
  cursor: pointer;
  text-transform: upperCase;
  font-size: 16px;
`

const SecondButton = styled(FirstButton)`
  background-color: white;
  color: black;
  opacity: 0.7;
`
const DownArrow = styled.img`
  width: 30px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`

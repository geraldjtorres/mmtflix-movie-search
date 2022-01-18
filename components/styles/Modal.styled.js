import styled from 'styled-components'

export const StyledModalText = styled.div`
  overflow: scroll;
  max-width: 380px;
  width: 100%;
  margin-left: 30px;
  height: 325px;

  h2 {
    font-size: 28px;
    line-height: 35px;
    span {
      font-size: 16px;
    }
  }

  div {
    margin-top: 20px;
    p {
      font-size: 14px;
    }
  }

  .description {
    font-size: 14px;
    margin-top: 20px;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    max-width: initial;
    width: 90%;
    margin-top: 20px;
    height: 260px;

    h2 {
      font-size: 22px;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    height: 320px;
    overflow: initial;
  }
`

export const StyledModalImage = styled.div`
  height: 300px;
  width: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dbdbdd;
  font-size: 40px;
  color: #6e6e6e;
`

export const StyledModalBody = styled.div`
  padding-top: 10px;
  color: white;
  display: flex;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`

export const StyledModalHeader = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  font-size: 18px;
  color: white;
`

export const StyledModal = styled.div`
  background: #3b3b3b;
  width: 650px;
  height: 400px;
  border-radius: 5px;
  padding: 25px;
  position: relative;
  overflow: hidden;
  z-index: 30;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    height: 80%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 90%;
    width: 90%;
    overflow: scroll;
  }
`
export const StyledModalOverlay = styled.div`
  z-index: 20;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  overflow-y: hidden;
  animation: fadein 0.5s ease-in-out;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

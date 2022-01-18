import styled from 'styled-components'

export const MovieCard = styled.div`
  &:hover {
    cursor: pointer;
  }

  div {
    height: 280px;
    width: 180px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dbdbdd;
    font-size: 40px;
    color: #6e6e6e;
    transition: transform 450ms;
    &:hover {
      transform: scale(1.04);
      /* opacity: 1; */
    }
  }

  p {
    font-size: 14px;
    color: white;
    margin-top: 4px;

    &:first-of-type {
      font-weight: bold;
      max-width: 180px;
    }
    &:last-of-type {
      margin-bottom: 20px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    margin-top: 20px;
    div {
      height: 400px;
      width: 300px;
      position: relative;
      margin: 0 auto;
    }

    p {
      &:first-of-type {
        margin: 0 auto;
        margin-top: 4px;
      }
    }
  }
`

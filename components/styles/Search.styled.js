import styled from 'styled-components'

export const StyledSearch = styled.div`
  border: 1px solid white;
  max-width: 350px;
  width: 100%;

  color: white;
  position: relative;

  form {
    height: 100%;
  }

  input {
    color: white;
    font-size: 14px;
    padding: 8px;
    width: 350px;
    padding-right: 40px;
    height: 100%;

    ::placeholder {
      color: white;
    }
  }

  svg {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-top: 14px;
  }
`

export const Spinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  /* margin: 30px auto; */
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease infinite;

  position: absolute;
  right: 14px;
  top: 18px;
  @keyframes spin {
    to {
      -webkit-transform: rotateZ(360deg);
    }
  }
`

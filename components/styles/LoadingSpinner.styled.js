import styled from 'styled-components'

export const StyledSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  /* margin: 30px auto; */
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotateZ(360deg);
    }
  }
`

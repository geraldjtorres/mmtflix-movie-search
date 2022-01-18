import styled from 'styled-components'

export const Container = styled.div`
  width: 1100px;
  max-width: 100%;
  padding: 20px;
  margin: 0 auto;
  /* border: 1px solid red; */
  background-color: ${({ theme }) => theme.colors.container};
`

export const InnerContainer = styled.div`
  /* border: 1px solid blue; */
  background-color: ${({ theme }) => theme.colors.innerContainer};
  margin-top: 20px;
  padding: 20px;
`

import styled from 'styled-components'

export const StyledRow = styled.div`
  margin-top: 20px;

  &:first-of-type {
    margin-top: 0;
  }

  h2 {
    color: white;
    font-size: 20px;
    font-weight: bold;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
  }
`

export const MoviesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`

import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`

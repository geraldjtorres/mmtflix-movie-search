import styled from 'styled-components'

export const StyledSearchPage = styled.div`
  h2 {
    color: white;
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    h2 {
      margin-bottom: 8px;
    }
  }
`
export const HeaderPagination = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
  }
`

import styled from 'styled-components'

export const StyledPagination = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  width: 220px;
  align-items: center;

  p {
    color: white;
  }

  div {
    display: flex;

    button {
      width: 35px;
      height: 35px;
      border: 1px solid white;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      cursor: pointer;
      &:first-of-type {
        margin-right: 4px;
      }

      &.disabled {
        opacity: 0.5;
        pointer-events: none;
      }
    }
  }
`

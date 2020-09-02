import styled from 'styled-components'

export const Container = styled.footer`
  background: var(--color-secondary);
  color: var(--color-white);
  padding: 3rem;

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .content {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 1rem;
    }

    & .icones {
      & a + a {
        margin-left: 1rem;
      }
    }
  }
`

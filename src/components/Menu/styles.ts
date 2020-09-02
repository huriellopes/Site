import styled from 'styled-components'

export const Container = styled.header`
  border-bottom: 1px solid var(--color-white);
  position: sticky;
  top: 0;
  .header-navbar {
    & .logo-header .logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-white);
    }

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1240px;
    width: 100%;
    padding: 1.5rem;

    .menu {
      & ul {
        display: flex;
        flex-wrap: wrap;

        & li + li {
          margin-left: 1rem;
        }

        & li {
          & a {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--color-white);
          }
        }
      }
    }
  }
`

import styled from 'styled-components';

const MainHeader = styled.section`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .4em .5em;

  .menu-header {
    display: none;
  }

  .logo-svg {
    height: 3em;
  }

  .navBar-header {
    flex-basis: 40%;
    nav {
      display: flex;
      justify-content: space-around;
      a {
        font-family: var(--font-default);
        text-decoration: none;
        color: #000000;
        font-size: 1.2em;
        font-weight: bold;
        margin: 0 1em;
        &:hover {
          color: #000000;
          text-decoration: underline;

        }
      }
    }
  }

  .github-btn {
    font-family: var(--font-default);
    font-size: .8em;
  }

  
  @media (max-width: 768px) {
    .github-btn {
      display: none;
    }

    .navBar-header {
      display: none;
    }

    .menu-header {
      display: flex;
    }

    .logo-svg {
      width: 6em;
      height: 3em;
    }
  }
`;

export default MainHeader;

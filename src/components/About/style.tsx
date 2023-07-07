import styled from 'styled-components';

const MainAbout = styled.section`
  background-color: var(--primary-background);
  height: 90.7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h1 {
    color: var(--green);
    font-size: 2.1rem;
    font-family: 'Source Code Pro', monospace;
  }


  @media (max-width: 780px) {
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;

    h1 {
      padding: 1em 0;
      font-size: 1.5rem;
    }
  }
`;

const ButtonGrup = styled.div`
  margin-top: 1.5em;
  display: flex;
  align-items: center;
  gap: 1em;
  min-width: 100%;

  @keyframes onfocus {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
      box-shadow: 0 0 5px var(--green);
    }
  }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: var(--black);
      background-color: var(--green);
      font-family: 'Fira Code', monospace;
      padding: .5em 2em;
      border-radius: 19px;
    }

    a:hover {
      animation: onfocus .3s forwards;
    }
`;

const Welcomes = styled.section`
  align-items: start;
  background-color: var(--wp--preset--color--vivid-purple) ;
  border-radius: 0% 50% 50% 0;
  color: var(--wp--preset--color--white);
  display: flex;
  flex-direction: column;
  font-family: var(--font-default);
  justify-content: center;
  min-height: 100%;
  padding: 0 2em;
  width: 50%;
  
  p {
    width: 90%;
    color: var(--Foreground);
    font-family: 'Fira Code', monospace;

    span {
      color: var(--green);
    }
  }

  @media (max-width: 780px) {
    padding: 0;
    color: black;
    background: none;
    width: 100%;
    padding: 1em .5em;
  }
`;

const Ilustration = styled.section`
  img {
    width: 35em;
    height: 80vh;
  }

  @media (max-width: 780px) {
    img {
      width: 95%;
      height: auto;
    }
  }
`;

export {
  Welcomes,
  Ilustration,
  MainAbout,
  ButtonGrup
};

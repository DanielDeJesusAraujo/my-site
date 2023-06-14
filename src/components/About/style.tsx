import styled from 'styled-components';

const MainAbout = styled.section`
  background-color: var(--wp--preset--color--cyan-bluish-gray);
  height: 90.7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;

    h1 {
      padding: 1em 0;
    }
  }
`;

const Welcomes = styled.section`
  align-items: center;
  background-color: var(--wp--preset--color--vivid-purple) ;
  border-radius: 0% 50% 50% 0;
  color: var(--wp--preset--color--white);
  display: flex;
  flex-direction: column;
  font-family: var(--font-default);
  justify-content: center;
  min-height: 100%;
  padding: 0 2em;
  width: 40%;

  @media (max-width: 768px) {
    padding: 0;
    color: black;
    background: none;
    width: 100%;
    padding: 3em .5em;
  }
`;

const Ilustration = styled.section`
  img {
    width: 35em;
    height: 90vh;
  }

  @media (max-width: 768px) {
    img {
      width: 95%;
      height: auto;
    }
  }
`;

export {
  Welcomes,
  Ilustration,
  MainAbout
};

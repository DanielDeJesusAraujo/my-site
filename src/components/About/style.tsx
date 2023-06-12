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
  }
`;

const Welcomes = styled.section`
  color: var(--wp--preset--color--white);
  background-color: var(--wp--preset--color--vivid-purple) ;
  font-family: var(--font-default);
  width: 40%;
  min-height: 100%;
  border-radius: 0% 50% 50% 0;
  display: flex;
  align-items: center;
  padding: 0 2em;

  @media (max-width: 768px) {
    color: black;
    background: none;
    width: 100%;
    padding: 3em .5em;
    border-radius: 0% 0% 5% 5%;
  }
`;

const Ilustration = styled.section`
  img {
    width: 40em;
  }

  @media (max-width: 768px) {
    img {
      width: 95%;
    }
  }
`;

export {
  Welcomes,
  Ilustration,
  MainAbout
};

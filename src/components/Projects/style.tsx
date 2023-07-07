import styled from 'styled-components';

const MainProjects = styled.section`
  background-color: var(--secondary-background);
  padding: 2rem 0;

  .section-projects-title {
    text-align: center;
    color: var(--purple-dark);
  }

  .container-projects {
    display: flex;
    justify-content: space-around;
  }

  @media (max-width: 780px) {
    .container-projects {
      flex-direction: column;
      row-gap: 2em;
    }

    .section-projects-title {
      margin-bottom: 1.5em;
    }
  }
`;

export default MainProjects;

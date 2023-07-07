import styled from 'styled-components';

const ProjectCard = styled.section`
  width: 23em;
  display: flex;
  flex-direction: column;
  gap: 1em;

  img {
    border-radius: 8px;
  }

  body {
    font-family: 'Source Code Pro', monospace;
  }

  h1 {
    color: var(--green);
    font-size: 2.1rem;
    font-weight: 400;
    font-family: var(--font-default);
    color: var(--purple-dark);
  }

  @media screen and (max-width: 780px) {
    width: 100%;
    padding: 0;
  }
`;

export default ProjectCard;


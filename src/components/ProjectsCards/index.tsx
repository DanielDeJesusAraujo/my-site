import { Button } from "react-bootstrap";
import IProjects from "../../interfaces/IProjects"
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from "./style";

function CustomButton({children}: {children: string}): JSX.Element {
  return (
    <>
      <style type="text/css">
        {`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
            box-shadow: 0 0 5px var(--purple);
          }
        }
    .btn-flat {
      background-color: var(--purple-dark);
      color: var(--black);
      border-radius: 0%;
      width: 7em;
    }

    .btn-flat:hover {
      animation: pulse .3s forwards;
      background-color: var(--purple);
      color: var(--black);
      border-radius: 0%;   
      width: 7em;
    }
    `}
      </style>

      <Button variant="flat" className="btn-flat">
        {children}
      </Button>
    </>
  );
}


function ProjectsCards({ project }: { project: IProjects }) {
  const { title, description, image } = project
  return (
    <ProjectCard>
      <img src={image} alt="imagem do projeto" />
      <body>
        <h1>{title}</h1>
        <p style={{ color: 'var(--Foreground)' }}>
          {description}
        </p>
        <div className="d-flex gap-3">
          <CustomButton>Visitar</CustomButton>
          <CustomButton>Codígo</CustomButton>
        </div>
      </body>
    </ProjectCard>
  );
}

export default ProjectsCards;
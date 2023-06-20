import ProjectsCards from "../ProjectsCards"
import MainProjects from "./style"
import { myProjects } from "./utils"

function Projects() {
  return (
    <MainProjects>
      {myProjects.map((project) => (
        <ProjectsCards key={project.id} project={project} />
      ))}
    </MainProjects>
  )
}

export default Projects
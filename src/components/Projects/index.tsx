import ProjectsCards from "../ProjectsCards"
import MainProjects from "./style"
import { myProjects } from "./utils"

function Projects() {
  return (
    <MainProjects>
      <h1 className="section-projects-title">Meus Projetos</h1>
      <section className="container-projects">
        {myProjects.map((project) => {
          return (
            <ProjectsCards key={project.id} project={project} />
          )
        })}
      </section>
    </MainProjects>
  )
}

export default Projects
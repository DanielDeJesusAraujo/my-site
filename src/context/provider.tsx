import { useState } from "react"
import ProjectsContext from "."
import IContext from "../interfaces/IContext"

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState()
  
  const value: IContext = {
    state,
    setState
  }

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  )
}

export default ContextProvider
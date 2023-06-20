import { useMemo, useState } from "react"
import ProjectsContext from "."

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState({})
  
  const value = {
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
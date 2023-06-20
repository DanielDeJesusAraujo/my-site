import ContextProvider from './context/provider'
import MainRouter from './router'

function App() {
  return (
    <ContextProvider>
      <MainRouter />
    </ContextProvider>
  )
}

export default App

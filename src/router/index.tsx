import { Route, Routes } from 'react-router-dom'
import Home from '../pages'

function MainRouter() {
  return (
    <Routes>
      <Route path="/my-site" element={<Home />} />
    </Routes>
  )
}

export default MainRouter
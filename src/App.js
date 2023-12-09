import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Compiler from './Compiler'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/compiler" element={<Compiler/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
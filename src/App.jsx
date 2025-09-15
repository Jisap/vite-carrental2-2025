import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./Components/Nav"
import Index from "./Pages/Index"

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Index />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

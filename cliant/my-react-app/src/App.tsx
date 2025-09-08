import { Route, Routes } from "react-router"
import "./compontes/post"
import Home from "./pages/Home"
import "./App.css"

function App() {

  return (
    <div className="app">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="" element></Route>
        </Routes >
    </div>
  )
}

export default App

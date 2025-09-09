import { Route, Routes } from "react-router"
import "./compontes/post/post"
import Home from "./pages/Home"
import "./App.css"
import SingelPost from "./pages/SingelPost"
import PostById from "./pages/PostById"
import AddPost from "./pages/AddPost"


function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/post" element={<SingelPost />}></Route>
        <Route path="/posyById" element={<PostById />}></Route>
        <Route path="/adding" element={<AddPost />}></Route>
      </Routes >
    </div >
  )
}

export default App

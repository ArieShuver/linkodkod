import { Route, Routes } from "react-router"
import "./compontes/post/post"
import Home from "./pages/Home"
import "./App.css"
import PostById from "./pages/PostById"
import AddPost from "./pages/AddPost"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"


function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/postById/:id" element={<PostById />}></Route>
        <Route path="/adding" element={<AddPost />}></Route>
        <Route path="signUp" element={<SignUp />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes >
    </div >
  )
}

export default App

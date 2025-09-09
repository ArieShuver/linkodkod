import Logo from "../layout/Logo"
import Slogan from "../layout/Slogan"
import "./haeder.css"
import { Link } from "react-router"
export default function Header() {
    return (
        <div className="header">
            <Slogan></Slogan>
            <Logo></Logo>
            <Link to={"/"}> <button><img src="house.png" alt="" className="buttnHome" /></button></Link>
            <Link to={"/posyById"}> <button>🔍</button></Link>
        </div>
    )
}

import Logo from "../layout/Logo"
import Slogan from "../layout/Slogan"
import "./haeder.css"
import { Link } from "react-router"
export default function Header() {
    return (
        <div className="header">
            <Slogan></Slogan>
            <Logo></Logo>
            <section>
                <Link to={"/"}> <button><img src="/house.png" alt="" className="buttnHome" /></button></Link>
                <Link to={"/adding"}> <button><img src="/add.svg" alt="" className="buttnadd" /></button></Link>
            </section>
        </div>
    )
}

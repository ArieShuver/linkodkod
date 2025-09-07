import Logo from "./layout/logo"
import Slogan from "./layout/Slogan"
import "./haeder.css"

export default function Header() {
    return (
        <div className="header">
            <Slogan></Slogan>
            <Logo></Logo>
        </div>
    )
}

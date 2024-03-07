import NavMessage from "./NavMessage"
import NavNotice from "./NavNotice"
import NavAvatar from "./NavAvatar"
import "./navicationbar.css"
const NavicationBar = () => {
    return (
        <div className="header__nav ms-auto">
            <ul className="d-flex align-item-center">
                <NavNotice />
                <NavMessage />
                <NavAvatar />
            </ul>
        </div>
    )
}

export default NavicationBar
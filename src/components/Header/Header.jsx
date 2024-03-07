import Logo from "../Logo/Logo"
import SearchBar from "../SearchBar/SearchBar"
import NavicationBar from "../NavicationBar/NavicationBar"
import "./header.css"
const Header = () => {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            {/* logo */}
            <Logo />
            {/* search bar */}
            <SearchBar />
            {/* nav */}
            <NavicationBar />
        </header>
    )
}

export default Header
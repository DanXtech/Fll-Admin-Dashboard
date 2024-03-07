// import { ProfileImg } from "../../images/user.jpg"
import ProfileImg from "../../assets/images/user.jpg"
const NavAvatar = () => {
    return (
        <li className="nav-item dropdown pe-3">
            <a className="nav-link nav-icon d-flex"
                href="#"
                data-bs-toggle="dropdown">
                <img src={ProfileImg} alt="profile" className="rounded-circle" />
                <span className="d-none d-md-block dropdown-toggle ps-2 avater-profile">F. David</span>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                    <h6>David</h6>
                    <span>Web Developer</span>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li>
                    <a className="dropdown-item d-flex align-items-center" href="user-profile.html" >
                        <i className="hi bi-person"></i>
                        <span>My Profile</span>
                    </a>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li>
                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html" >
                        <i className="bi bi-gear"></i>
                        <span>Account Settings</span>
                    </a>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li>
                    <a className="dropdown-item d-flex align-items-center" href="pages-faq.html" >
                        <i className="bi bi-question-circle"></i>
                        <span>Need Help?</span>
                    </a>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li>
                    <a href="#" className="dropdown-item d-flex align-items-center">
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                    </a>
                </li>
            </ul>
        </li>

    )
}

export default NavAvatar
import "./navicationbar.css"
const NavNotice = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">4</span>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                    You have a new notifications
                    <a href="">
                        <span className="badge rounded-pill bg-primary p-2 ms-2">
                            View all
                        </span>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning"></i>
                    <div>
                        <h4>Lorem, ipsum  </h4>
                        <p>dolor sit amet consectetur adipisicing elit.</p>
                        <p> 4 hrs. ago</p>
                    </div>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning"></i>
                    <div>
                        <h4>Lorem, ipsum  </h4>
                        <p>dolor sit amet consectetur adipisicing elit.</p>
                        <p> 4 hrs. ago</p>
                    </div>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="dropdown-footer">
                    <a href="#">Show all notification</a>
                </li>
            </ul>
        </li>
    )
}

export default NavNotice
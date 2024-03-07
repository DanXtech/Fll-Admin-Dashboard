import { Messages1, Messages2, Messages3 } from "../../assets/items/index"
const NavMessage = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-chat-left-text"></i>
                <span className="badge bg-success badge-number">3</span>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages ">
                <li className="dropdown-header">
                    You have 3 new notifications
                    <a href="">
                        <span className="badge rounded-pill bg-primary p-2 ms-2">
                            View all
                        </span>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="message-item">

                    <div className="pro-info">
                        <a href="#">
                            <img src={Messages1} alt="" className="rounded-circle" />
                        </a>
                        <h4>Daniel </h4>
                    </div>
                    <div>

                        <p>I need some product for my busness</p>
                        <p> 4 hrs. ago</p>
                    </div>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="message-item">

                    <div className="pro-info">
                        <a href="#">
                            <img src={Messages2} alt="" className="rounded-circle" />
                        </a>
                        <h4>Damilare  </h4>
                    </div>
                    <div>

                        <p>I need some product for my busness</p>
                        <p> 4 hrs. ago</p>
                    </div>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="message-item">

                    <div className="pro-info">
                        <a href="#">
                            <img src={Messages3} alt="" className="rounded-circle" />
                        </a>
                        <h4>Fissy</h4>
                    </div>
                    <div>

                        <p>I need some product for my busness</p>
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

export default NavMessage

import "./logo.css"

const Logo = () => {
    const handleToggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar')
    }
    return (
        <div className="d-flex align-items-center justify-content-between">
            <a href="/" className="logo d-flex align-item-center">
                <span className="d-none d-lg-block">AdminDashboard</span>
            </a>

            <i className="bi bi-list toggle-btn bar-btn" onClick={handleToggleSideBar}></i>
        </div>
    )
}

export default Logo
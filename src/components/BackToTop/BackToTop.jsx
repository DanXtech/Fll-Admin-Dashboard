import { useState, useEffect } from "react"
import "./backtotop.css"
const BackToTop = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
    }, [scroll])


    const backToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <a href=""
            onClick={backToTop}
            className={`back-to-top d-flex-items-center justify-content-center ${scroll > 100 ? 'active' : undefined}`}
        >
            <div className="return">
                <i className="bi bi-arrow-up-short"></i>
            </div>
        </a>
    )
}

export default BackToTop
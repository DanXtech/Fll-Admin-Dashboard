import './footer.css'
const Footer = () => {
    return (
        <footer id='footer' className='footer'>
            <div className="copyright">
                &copy; Copyright{''}

                <strong>
                    <span> DStudio Technology </span>
                </strong>
                All Right Reserved
            </div>
            <div className="credits">
                Disgned by <a href="#">Danxtech</a>
            </div>
        </footer>
    )
}

export default Footer
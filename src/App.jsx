//  i   mport Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
// import "./App.css"

// import bootstrap
// one to to unable the bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
// This Other one is to unable the  bootstrap js
import "bootstrap/dist/js/bootstrap.min.js"

import "./App.css";
import Header from "./components/Header/Header";
import SideBar from './components/SideBar.jsx/SideBar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
const App = () => {
    return (
        <>
            <Header />
            <SideBar />
            <Main />
            <Footer />
            <BackToTop />
        </>
    )
}

export default App
// import { useState, useEffect } from "react"
// import Card from "../Subcompontent/Card/Card"

// const Dashboard = () => {
//     const [cards, setCards] = useState({})

//     const fetchData = () => {
//         fetch('http://localhost:3333/cards')
//             .then(res => res.json())
//             .then(data => {
//                 setCards(data);
//             })
//             .catch(e => console.log(e.message))
//     }

//     useEffect(() => {
//         fetchData();
//     })
//     return (
//         <section className="dashboard section">
//             <div className="row">
//                 <div className="col-lg-8">
//                     <div className="row">
//                         {
//                             cards && cards.lenght > 0 &&
//                             cards.map(card => <Card key={card._id} card={card} />)
//                         }
//                     </div>
//                 </div>
//                 <div className="col-lg-4"></div>
//             </div>
//         </section>
//     )
// }

// export default Dashboard


//----------------------------- building a backend url for me to fetch data use the json-server--------------------
import "./dashboard.css"
import Reports from "../Reports/Reports";
import RecentSales from "../RecentSales/RecentSales";
import TopSelling from "../../TopSetting/TopSelling";
import RecentActivity from "../RecentActivity/RecentActivity";
import BudgetReport from "../BudgetReport/BudgetReport";
import WebTraffic from "../WebTraffic/WebTraffic";
import News from "../News/News";
import Cards from "../Cards/Cards";

const Dashboard = () => {

    return (
        <section className="dashboard section">
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        <Cards />
                        <div className="col-12">
                            <Reports />
                        </div>
                        <div className="col-12">
                            <RecentSales />
                        </div>
                        <div className="col-12">
                            <TopSelling />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <RecentActivity />
                    <BudgetReport />
                    <WebTraffic />
                    <News />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;


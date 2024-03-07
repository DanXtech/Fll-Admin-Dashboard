import "./recentsales.css"
import CardFilter from "../Subcompontent/CardFilter/CardFilter"
import RecentSalesTable from "../RecentSalesTable/RecentSalesTable"
import { useEffect, useState } from "react";
const RecentSales = () => {

    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    }

    const fetchData = () => {
        fetch('http://localhost:3333/recentsales')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="card recent-sales overflow-auto">
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body">
                <h5>Resent Sales <span>| {filter}</span></h5>

                <RecentSalesTable items={items} />
            </div>

        </div>
    )
}

export default RecentSales
import { useEffect, useState } from "react";
import CardFilter from "../Subcompontent/CardFilter/CardFilter"
import RecentActivityItem from "./RecentActivityItem"
import "./recentactivity.css"

const RecentActivity = () => {

    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    }

    const fetchData = () => {
        fetch('http://localhost:3333/recentactiviy')
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
        <div className="card">
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body">
                <h5 className="card-title">Resent Activity <span>| {filter}</span></h5>

                <div className="activity">
                    {
                        items &&
                        items.length > 0 &&
                        items.map(item => (
                            <RecentActivityItem key={item._id} item={item} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default RecentActivity
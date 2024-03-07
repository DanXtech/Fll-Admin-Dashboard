/* eslint-disable react/prop-types */

const RecentActivityItem = ({ item }) => {
    return (
        <div className="activity-item d-flex">
            <div className="activite-label">{item.time}</div>
            <i className={`bi bi-circle-fill activity-badge ${item.color}`}></i>
            {item.highlight === '' ? (
                <div className="activity-content sub-content-1">{item.content}</div>
            ) : (
                <div className="activity-content sub-content-2">
                    {item.content.substring(0, item.content.indexOf(item.highlight))}
                    <a href="#" className="fw-bold text-dark">
                        {item.highlight}
                    </a>
                    {item.content.slice(
                        item.content.indexOf(item.highlight) + item.highlight.lenght, -1
                    )}
                </div>
            )}
        </div>
    )
}

export default RecentActivityItem
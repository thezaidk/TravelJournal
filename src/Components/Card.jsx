export default function(props) {
    return (
        <div className="card--container">
            <img src={`images/${props.image}`} className="card--img" alt="" />
            <div className="card--info">
                <div className="card--locationInfo">
                    <img src="images/location-icon.png" className="card--locationIcon" alt="" />
                    <h4 className="card--location">{props.location}</h4>
                    <a href={props.googleMapsUrl} className="card--locationLink">View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <h5 className="card--dates">{props.startDate} - {props.endDate}</h5>
                <p className="card--desc">{props.description}</p>
            </div>
        </div>
    )
}
import React from "react"
import Moment from "react-moment"

const ConcertCard = ({
  concertInfo = {
    title: "Title",
    venue: "Venue",
    startDate: "2021-05-26T23:30:00Z",
    endDate: "2021-05-26T23:30:00Z",
    tags: ["concert", "music"],
  },
}) => {
  return (
    <div className="concert-card card shadow-sm p-3 mb-2 bg-white rounded">
      <h5>{concertInfo.title}</h5>
      <ul>
        <li>{concertInfo.venue}</li>
        <li>
          <small>
            <Moment format="D MMM YYYY">{concertInfo.startDate}</Moment>
          </small>
          &nbsp; to &nbsp;
          <small>
            <Moment format="D MMM YYYY">{concertInfo.endDate}</Moment>
          </small>
        </li>
      </ul>
      <hr />
      <div className="row">
        <div className="col">
          {concertInfo.tags.map((tag, index) => (
            <span key={index} class="badge badge-pill badge-light">
              {tag}
            </span>
          ))}
        </div>
        <div className="col text-right">
          <button className="btn btn-sm btn-outline-danger">Book now</button>
        </div>
      </div>
    </div>
  )
}

export default ConcertCard

import React, { useState, useEffect } from "react"
import axios from "axios"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"

import "./dashboard.scss"

import ConcertCard from "./ConcertCard"

const Dashboard = () => {
  const [concerts, setConcerts] = useState([])
  useEffect(() => {
    axios({
      method: "get",
      url:
        "https://api.predicthq.com/v1/events/?category=concerts&country=us&limit=10",
      headers: {
        Authorization: "Bearer anP3BR8aRyK58bGlcWlQ7-1yQ5IqU5KgmE3sNjmF",
      },
    })
      .then(res => {
        console.log(res)
        setConcerts(res.data.results)
      })
      .catch(err => console.log(err))
  }, [])
  console.log("state", concerts)
  return (
    <div className="dashboard shadow p-3 mb-5 bg-white rounded">
      <div className="container">
        <div className="row mb-4">
          <h5>My Concerts Board</h5>
        </div>
        <Tabs defaultActiveKey="upcoming">
          <Tab eventKey="upcoming" title="Upcoming">
            <div className="upcoming">
              <ConcertCard />
              <ConcertCard />
            </div>
          </Tab>
          <Tab eventKey="booked" title="Booked">
            <div className="booked">You have no booked concerts yet.</div>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default Dashboard

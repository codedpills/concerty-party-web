import React from "react"

import Dashboard from "../components/Dashboard/Dashboard"
import Layout from "../components/Layout"
import Profile from "../components/Profile/Profile"

const dashboard = () => {
  return (
    <Layout auth={true}>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-3">
            <Profile />
          </div>
          <div className="col">
            <Dashboard />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default dashboard

import React from "react"

import Layout from "../components/Layout"

const ConcertDetails = () => {
  return (
    <Layout>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div>
              <img
                src="http://images.ctfassets.net/31j9n2ecqpzj/3DXbugxQ1D8ofHAZcfoeq6/a6013daf18635515cd6a079eea63aac7/anthony-delanoix-hzgs56Ze49s-unsplash.jpg"
                alt="concert"
                className="img-fluid"
              />
              <hr />
              <p>Date: Nov 20</p>
              <h3>All The Little Lights</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In ea,
                dolore alias et fugiat iste, nostrum aut explicabo eveniet ipsa
                laborum inventore voluptas soluta sit nam autem, exercitationem
                molestiae libero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ConcertDetails

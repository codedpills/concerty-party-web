import React from "react"

import "./login.scss"

import LoginForm from "./LoginForm"

const LoginWrapper = () => {
  return (
    <div className="login-wrapper">
      <div className="row no-gutters">
        <div className="col-4">bg image</div>
        <div className="col">
          <div className="login-form-section">
            <div className="logo-area">
              <span className="logo-concert">Concert</span>
              <span className="logo-party">Party</span>
            </div>
            <div className="form-area">
              <h4 className="text-center mb-4">Hello, old friend. Sign in</h4>
              <br />
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginWrapper

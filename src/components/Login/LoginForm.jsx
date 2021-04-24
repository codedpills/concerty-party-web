import React, { useState } from "react"
import { navigate } from "gatsby"

const LoginForm = () => {
  const [isAuth, setIsAuth] = useState(false)

  const handleLogin = e => {
    e.preventDefault()
    setIsAuth(true)
    setTimeout(() => {
      console.log("Login successful")
      navigate("/dashboard")
    }, 3000)
  }

  const loginBtnState = isAuth ? (
    <>
      <span
        class="spinner-grow spinner-grow-sm"
        role="status"
        aria-hidden="true"
      ></span>
      Loading...
    </>
  ) : (
    "Login"
  )

  return (
    <form>
      <div className="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input type="password" className="form-control" id="password" />
      </div>
      <button
        type="submit"
        className="btn btn-dark"
        onClick={handleLogin}
        disabled={isAuth}
      >
        {loginBtnState}
      </button>
    </form>
  )
}

export default LoginForm

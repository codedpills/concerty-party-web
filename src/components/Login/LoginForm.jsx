import React from "react"

const LoginForm = () => {
  const handleLogin = e => {
    e.preventDefault()
    console.log("Login successful")
  }

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
      <button type="submit" className="btn btn-dark" onClick={handleLogin}>
        Login
      </button>
    </form>
  )
}

export default LoginForm

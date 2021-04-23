import React from "react"

const LoginForm = () => {
  const handleLogin = e => {
    e.preventDefault()
    console.log("Login successful")
  }

  return (
    <form>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" />
      </div>
      <button type="submit" class="btn btn-dark" onClick={handleLogin}>
        Login
      </button>
    </form>
  )
}

export default LoginForm

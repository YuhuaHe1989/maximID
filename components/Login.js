import React from "react"

export default React.createClass({
  render() {
    return (
    <div className="middle-box text-center loginscreen  animated fadeInDown">
        <div>
            <div>

                <h1 className="logo-name">maximID</h1>

            </div>
            <h3>Welcome to maximID Console</h3>
            <p>Only authorized users.
            </p>
            <p>Login in. </p>
            <form className="m-t" role="form" action="index.html">
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Username" required=""/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required=""/>
                </div>
                <button type="submit" className="btn btn-warning block full-width m-b">Login</button>

                <a href="#"><small>Forgot password?</small></a>
                <p className="text-muted text-center"><small>Do not have an account?</small></p>
                <a className="btn btn-sm btn-white btn-block" href="register.html">Create an account</a>
            </form>
            <p className="m-t"> <small>&copy Copyright maximID Inc</small> </p>
        </div>
    </div>

      )
  }
})
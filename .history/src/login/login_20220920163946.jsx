import React from "react";
import  'login.css'
function login() {
  return (
    <div className="container">
      <div className="login">
        <form>
          <h1>Login</h1>
          <div className="form-group">
            <label>User Name</label>
            <input type="text"  placeholder="User Name"/>
          </div>                  
          <div className="form-group">
            <label>Password</label>
            <input type="password"  placeholder="password"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default login;

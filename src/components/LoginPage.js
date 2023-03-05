import React, { useState } from "react";
import ShowData from "./ShowData";

const LoginPage = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  // console.log(email)
  // console.log(password)

  const submitLogin = (e) => {
    e.preventDefault();
    const newdata = [];

     newdata.push([{ email: email, password: password }]);
    const localdata = localStorage.getItem("data");

    localStorage.setItem("data", JSON.stringify(newdata) );

    const local = JSON.parse(localdata);
    console.log(local);
    console.log(newdata);
  };

  return (
    <div className="">
      <form>
        <div className="p-4 col-sm-2 text-start ">
          <div className="m-3">
            <label className="me-2">email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="m-3">
            <label className="me-2">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="m-3">
            <button
              type="submit"
              onClick={(e) => submitLogin(e)}
              className="btn btn-primary"
            >
              Submit form
            </button>
          </div>
        </div>
      </form>
      login component
    </div>
  );
};

export default LoginPage;

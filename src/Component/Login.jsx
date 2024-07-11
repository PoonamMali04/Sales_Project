import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login() {

  let navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: ""
  });

  function handleChange(e) {
    e.preventDefault();
    setData({ ...data, [e.target.id]: e.target.value })
  };

  function handelSubmit(e) {
    e.preventDefault();
    // console.log(data);

    if (data.username === "admin" && data.password === "admin") {

      // console.log(data);
      setData({
        username: "",
        password: ""
      })



      let Credential = JSON.stringify(data)
      localStorage.setItem("data", Credential);



      navigate("/home")
      window.location.reload();

    } else {
      alert("Invalid Credential");

    }
  }

  return (
    <div style={{ padding: "50px" }}>

      <section className="background-radial-gradient overflow-hidden" style={{ height: "550px", padding: "20px" }}>
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zindex: "10" }}>
              <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "Hsl 218, 81%, 95%" }}>
                The best offer <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>for your business</span>
              </h1>
              <p className="mb-4 opacity-70" style={{ color: "Hsl(218, 81%, 85%" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

              <div className="card bg-glass" >
                <div className="card-body px-4 py-5 px-md-5" style={{ backgroundColor: "" }}>
                  <form>
                    {/* <div className="row">
                              <div className="col-md-6 mb-4"> */}
                    <div className="form-outline mb-4">
                      <input value={data.username} onChange={(e) => handleChange(e)} type="text" id="username" className="form-control" />
                      <label className="form-label" for="form3Example1">Username</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input value={data.password} onChange={(e) => handleChange(e)} type="password" id="password" className="form-control" />
                      <label className="form-label" for="form3Example4">Password</label>
                    </div>
                    <div>
                      <button onClick={(e) => handelSubmit(e)} type="button" className="btn-btn-primary btn-block mb-4 me-5 fs-5 " style={{ height: "40px", backgroundColor: "lightblue" }}>
                        Login
                      </button>
                    </div>


                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>





    </div>
    // </div>

    // </div>
  )
}

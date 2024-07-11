import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Home() {
  return (
    < >
       <Navbar/>
            <div className='row' >
                <div className='col-lg-2'>
                    <Sidebar/>
                </div>
                <div className='col-lg-10'>
                    <div>
                        <div className='bredcrumbs mt-4' style={{ fontFamily: "serif" }}>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col'>
                                        <p className='bread h3'>
                                            <span>Home/Dashboard</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='row mt-2'>

                                <div className="col-lg-4">
                                    <div className="card" style={{ backgroundColor: "#D9E3DA" }}>
                                        {/* <img className="card-img-top" src={require("../Images/specials-1.png")} alt="Card image cap" /> */}
                                        <div className="card-body" >
                                            <h5 className="card-title" style={{ textAlign: "center" }}>Card title</h5>
                                            <p className="card-text">Some quick example text to build
                                                on the card title and make up the
                                                bulk of the card's content.</p>
                                            {/* <a href="#" className="btn btn-secondary">Go somewhere</a> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card" style={{ backgroundColor: "#D9E3DA" }}>
                                        {/* <img className="card-img-top" src={require("../Images/specials-2.png")} alt="Card image cap" /> */}
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ textAlign: "center" }}>Card title</h5>
                                            <p className="card-text">Some quick example text to build
                                                on the card title and make up the
                                                bulk of the card's content.</p>
                                            {/* <a href="#" className="btn btn-secondary">Go somewhere</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card w-40" style={{ backgroundColor: "#D9E3DA" }}>
                                        {/* <img className="card-img-top" src={require("../Images/specials-3.png")} alt="Card image cap" /> */}
                                        <div className="card-body" >
                                            <h5 className="card-title" style={{ textAlign: "center" }}>Card title</h5>
                                            <p className="card-text">Some quick example text to build
                                                on the card title and make up the
                                                bulk of the card's content.</p>
                                            {/* <a href="#" className="btn btn-secondary">Go somewhere</a> */}
                                        </div>
                                    </div>
                                </div>

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>

    )
}

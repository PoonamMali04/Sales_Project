import React from 'react'
import{Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      
<nav class="navbar navbar-light bg-light ">
  <div class="container-fluid "style={{backgroundColor:"lavender"}}>
    <a className="navbar-brand fw-bolder fs-2 ms-5 mt-9 me-2>">Sales Product...</a>


    <form className='d-flex'>
     {/* <h1>{localStorage.getItem("name")}</h1>  */}
     <Link to={"/"}> <button className='btn-btn-success me-5 fs-5'>Logout</button></Link>
    </form>
  </div>
</nav>



    </div>
  )
}

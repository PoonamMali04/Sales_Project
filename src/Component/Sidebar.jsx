import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>
      <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white mt-6" style={{ height: "760px" }}>
        <div style={{ backgroundColor: "", width: "240px", height: "1800px",paddingTop:"20px" }}>
          <div class="position-sticky">
            <div class="list-group list-group-flush " style={{ fontFamily: "serif", fontSize: "20px", height: "660px" }}>

              <a href="#" class="text-decoration-none text-dark mt-4 ms-2 fs-4">
                <i class="fas fa-tachometer-alt fa-fw me-4 "></i><Link to={"/Home"} className='text-decoration-none'><span style={{ color: "black" }}>Home</span></Link> </a>
                
                <a href="#" class="text-decoration-none text-dark mt-4 ms-2 fs-4">
                <i class="fas fa-tachometer-alt fa-fw me-4 "></i><Link to={"/Product"} className='text-decoration-none'><span style={{ color: "black" }}>Product</span></Link> </a>

              <a href="#" class="text-decoration-none text-dark mt-4 ms-2 fs-4">
                <i class="fas fa-tachometer-alt fa-fw me-4 "></i><Link to={"/Sales"} className='text-decoration-none'><span style={{ color: "black" }}>Sales</span></Link> </a>

               <a href="#" class="text-decoration-none text-dark mt-4 ms-2 fs-4">
                <i class="fas fa-tachometer-alt fa-fw me-4 "></i><Link to={"/Sales_Exp"} className='text-decoration-none'><span style={{ color: "black" }}>Sales_Exp</span></Link> </a>

                <a href="#" class="text-decoration-none text-dark mt-4 ms-2 fs-4">
                <i class="fas fa-tachometer-alt fa-fw me-4 "></i><Link to={"/"} className='text-decoration-none'><span style={{ color: "black" }}>Logout</span></Link> </a>
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  )
}

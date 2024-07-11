import React, { useEffect, useState ,useRef } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import axios from 'axios';
import { useReactToPrint } from "react-to-print";


export default function Sales_Exp() {
  const[newData,setnewData]=useState([]);
  function loadData() {
    axios.get("https://65815fb03dfdd1b11c431483.mockapi.io/sales")
      .then((res) => {
         console.log(res.data);
        setnewData(res.data)
      })

  }
  useEffect(() => {
    loadData()

  }, [])

  function handleDelete(e, id) {
    e.preventDefault();
    //alert(id);
    axios.delete("https://65815fb03dfdd1b11c431483.mockapi.io/sales/" + id)
      .then((res) => {
        console.log(res.data);
        loadData();
      })
  };
  let customerName = localStorage.getItem("username");
  let currentDate = new Date().toJSON().slice(0, 10);

  const componentPDF = useRef();

  const generatePdf = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "bill",
    onafterprint: () => alert("Data saved in pdf")

});


  return (
    <>
      <div>
        <Navbar />
        <div ref={componentPDF} style={{ width: "100%" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <Sidebar />
              
            </div>
            <div className="col-lg-10">
              <h2 className='ms-1' style={{ marginTop: "10px" }}>Sales_Exp</h2>
             

              {/* <----Table----> */}
              <table class="table table-striped">
                <thead style={{textAlign:"center"}} >
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Mobile No</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Total GST</th>
                    <th scope="col">Total Overall Subtotle</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody style={{textAlign:"center"}}>
                  {
                    newData.map((eachData,i)=>{
                      return(
                        <tr key={i}>
                          <td>{eachData.personaldata.date}</td>
                          <td>{eachData.personaldata.customername}</td>
                          <td>{eachData.personaldata.mobilenumber}</td>
                          <td>{eachData.totalprice}</td>
                          <td>{eachData.totalgst}</td>
                          <td>{eachData.overalltotal}</td>
                          <td>
                            <button className='btn btn-primary me-2' onClick={generatePdf}>View</button>
                            
                            <button onClick={(e) => handleDelete(e, eachData.id)} className='btn btn-danger'>Delete</button>

                          </td>
                        </tr>
                        
                      )
                    })
                  }
                  
                </tbody>
              </table>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

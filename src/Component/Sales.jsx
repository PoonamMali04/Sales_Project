import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import axios from 'axios'
import Sidebar from './Sidebar';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Sales() {
  const [newData, setNewData] = useState([]);
  const [rows, setRows] = useState([{ quantity: 1 }])
  const [overalltotal, setOverallTotal] = useState(0)
  const[totalprice,setTotalprice]=useState(0)
  const[totalgst,setTotalgst]=useState(0)

  let navigate=useNavigate();

  const[personaldata,setPersonaldata]=useState({
    date:"",
    customername:"",
    mobilenumber:""
  })
   
  function handleChange(id, index) {
    console.log(id);
    const dropdown = newData.find((e) => e.id === id)

    // let dropdown ;
    // for (let i = 0; i < newData.length; i++) {
    //     if(newData[i].id===id){
    //         dropdown=newData[i]
    //         break
    //     }
    //   }

    let copyRows = [...rows]
    copyRows[index].selectedproduct = dropdown
    setRows(copyRows)
    // setData(dropdown)
    console.log(dropdown);
  }
  console.log(rows);

  const addrow = () => {
    let copyrows = [...rows]
    copyrows.push({ quantity: 1 })
    setRows(copyrows)

    console.log(rows);
  }

  useEffect(()=>{
    let calculatetotal = 0
    let totalprice=0
    let totalgst=0
    for (let index = 0; index < rows.length; index++) {
      let row = rows[index];
        if(row.selectedproduct){
          totalprice+=row.selectedproduct.price*row.quantity;
          totalgst+=row.selectedproduct.price*row.selectedproduct.gst/100
          calculatetotal += row.selectedproduct.price*row.selectedproduct.gst/100 *row.quantity + row.selectedproduct.price*row.quantity
                            
        }
      // console.log("last",row);
    }
    setOverallTotal(calculatetotal)
    setTotalprice(totalprice)
    setTotalgst(totalgst)
  })
  
  function loadData() {
    axios.get("https://65815fb03dfdd1b11c431483.mockapi.io/project")
      .then((res) => {
        // console.log(res.data);
        setNewData(res.data)
      })

  }

  const quantitychange = (value, i) => {
    // console.log(value);
    let copyRows = [...rows]
    copyRows[i].quantity = value
    setRows(copyRows)
  }
  useEffect(() => {
    loadData()

  }, [])
  function handledata(e){
    e.preventDefault()
    setPersonaldata({...personaldata,[e.target.id]:e.target.value})
  }
 function handleSubmit(e){
    const postdata={
      personaldata:personaldata,
      overalltotal:overalltotal,
      totalprice:totalprice,
      totalgst:totalgst,
      products:rows  
    };
    axios.post("https://65815fb03dfdd1b11c431483.mockapi.io/sales",postdata)
    .then((res)=>{
      setPersonaldata(res.data)
    })
    navigate("/Sales_Exp")
 }

  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <Sidebar />
            </div>
            <div className="col-lg-10">
              <h2 className='ms-1' style={{ marginTop: "10px" }}>Sales...</h2>

              <div className="card"  >
                <div class="card-body">

                  <div className='d-flex'>
                    <div className='ms-5 me-5'>
                      <h5 className="card-title"  >--Select Date--</h5>
                      <input type="date"id='date'onChange={(e)=>handledata(e)} value={personaldata.date} />
                    </div>

                    <div className='ms-5 me-5'>
                      <h5 className="card-title" >--Customer Name--</h5>
                      <input type="text"id='customername'onChange={(e)=>handledata(e)} value={personaldata.customername} />
                    </div>

                    <div className='ms-5 me-5'>
                      <h5 className="card-title">--Mobile Number--</h5>
                      <input type="number" id='mobilenumber'onChange={(e)=>handledata(e)} value={personaldata.mobilenumber} />
                    </div>

                  </div><br />
                </div>
              </div><br />
              <button className='btn btn-primary mt-2' onClick={addrow}>Add Row</button><br /><br />
              <div className="card">
                <div className="card-body">
                  <table className="table table-striped">
                    <thead>
                      <tr style={{ textAlign: "center" }}>
                        <th scope="col">No.</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">GST</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody style={{ textAlign: "center" }}>
                      {rows.map((row, i) => {
                        
                        return (
                          <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>
                              <select onChange={((e) => handleChange(e.target.value, i))} className="form-control">
                                <option value="">--Select Product--</option>
                                {
                                  newData.map((eachData, i) => {
                                    return (
                                      <option key={i} value={eachData.id}>{eachData.name}</option>
                                    )
                                  })
                                }
                              </select>
                            </td>
                            <td>{row.selectedproduct ? row.selectedproduct.price : ''}</td>
                            <td><input className="form-control" type="number" value={row.quantity} onChange={((e) => quantitychange(e.target.value, i))} /></td>
                            <td>{row.selectedproduct  ? row.selectedproduct.gst : ''}</td>
                            <td>{row.selectedproduct ?  row.selectedproduct.price*row.selectedproduct.gst/100 *row.quantity+row.selectedproduct.price*row.quantity  : ''}</td>
                            
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                  <hr/>
                  <div className='mt-5'>


                  </div>
                  <div className='row'>
                  <div className='col-lg-10'>
                  <button className='btn btn-primary'onClick={(e) => handleSubmit(e)}>Submit</button>
                  </div>
                  <div  className='col-lg-2  d-flex justify-content-end'>
                  <input className="form-control" type="text" value={overalltotal} />
                  </div>
                 
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div >
      </div>
    </>
  )
}
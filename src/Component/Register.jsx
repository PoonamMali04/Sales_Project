import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Register() {
   let navigate=useNavigate();
   let{id}=useParams();

   const [data,setData]=useState({
    name:"",
    surname:"",
    city:"",
    qualification:""
   });

   function handleChange(e){
    e.preventDefault();
    setData({...data,[e.target.id]:e.target.value})
   };

   function handleSubmit(e){
    e.preventDefault();
    //console.log(data);

    if(id===undefined){axios.post("https://65815fb03dfdd1b11c431483.mockapi.io/project",data)
      .then((res)=>{console.log(res.data);
       setData({
        name:"",
        surname:"",
        city:"",
        qualification:""
       })
          navigate("/list")
        })
      }else{
        axios.put("https://65815fb03dfdd1b11c431483.mockapi.io/project"+id,data)
        .then((res)=>{console.log(res.data);
           navigate("/list");
          })
      }
   };

   function loadData(){
    axios.get("https://65815fb03dfdd1b11c431483.mockapi.io/project"+id)
    .then((res)=>{
      console.log(res.data);
      setData({
        name:res.data.name,
        surname:res.data.surname,
        city:res.data.city,
        qualification:res.data.qualification
      })
    })
   }
   useEffect(()=>{
    if(id){
      loadData();
    }
   },[])
   
  return (
    <div>
        <div className='container'>
    {/* <div className='col-lg-12'> */}
    <div className='row'>
    <div className='col-lg-2'>
    <div className='col-lg-8'>
   <form>
  <div className="mb-3">
    <label  className="form-label">First Name</label>
    <input name="name" value={data.name} type="text"onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label className="form-label">Surname</label>
    <input name='surname'value={data.surname} type="text"onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label className="form-label">City</label>
    <input name='city'value={data.city} type="text"onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label className="form-label">Qualification</label>
    <input name='qualification'value={data.qualification} type="text"onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
    <div id="emailHelp" className="form-text"></div>

    <button type="submit" onClick={(e)=>handleSubmit(e)} className="btn btn-primary">Submit</button><br/>
  </div>
  </form>
    </div>
    </div>
    </div>
    </div>
  </div>
  )
}

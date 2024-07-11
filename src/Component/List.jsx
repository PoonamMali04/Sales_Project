import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function List() {
    const[data,setData]=useState([]);
    let navigate=useNavigate();

    function loadData(){
        axios.get("https://65815fb03dfdd1b11c431483.mockapi.io/project")
        .then((res)=>{console.log(res.data);
         setData(res.data)
        })
        };

        useEffect(()=>{
            loadData();
        },[]);

        function handleDelete(e,id){
            e.preventDefault();
            axios.delete("https://65815fb03dfdd1b11c431483.mockapi.io/project"+id)
            .then((res)=>{
                console.log(res.data);
                loadData();
            })
        };
        //function handleUpdate(e,id){
            //e.preventDefault();
          //  navigate("/register" +id)
        //};
  return (
    <div>
     <div className='container'>
        <div className='row mt-5'>
            <div className='col-lg-1'>
                <div className='col-lg-10'>
                {/* <----table----> */}
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">SurName</th>
      <th scope="col">City</th>
      <th scope="col">Qualification</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((eachData,i)=>{
            return( <tr key={i}>
      <th scope="row">{i+1}</th>
      <td>{eachData.name}</td>
      <td>{eachData.surname}</td>
      <td>{eachData.city}</td>
      <td>{eachData.qualification}</td>
      <td><Link to={"/register/"+eachData.id}>
      <button className='btn-btn-primary me-2'>Edith</button>
      </Link>
      <button onClick={(e)=>handleDelete(e,eachData.id)} className='btn-btn-danger'>Delete</button>
      </td>
    </tr>
         )
            }) 
        }
  </tbody>
</table>
                </div>
                <div className='col-lg-1'></div>
            </div>
        </div>
        </div> 
    </div>
  )
}

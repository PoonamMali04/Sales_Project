import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import axios from 'axios';

export default function Product() {
  const [data, setData] = useState({
    name: "",
    gst: "",
    price: "",

  });
  const [newData, setNewData] = useState([]);
  const [id, setId] = useState(undefined);

  function handleChange(e) {
    // console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value })
    //console,log(data);
  }
  function handleSubmit() {
    // console.log(data);
    if (id === undefined) {
      axios.post("https://65815fb03dfdd1b11c431483.mockapi.io/project", data)
        .then((res) => {
          console.log(res.data);
          loadData();
        });
      setData({
        name: "",
        gst: "",

        price: "",

      })
    }

    else {
      axios.put("https://65815fb03dfdd1b11c431483.mockapi.io/project/" + id, data)
        .then((res) => {
          console.log(res.data);
          loadData();
        });
      setData({
        name: "",
        gst: "",
        price: "",

      })
    }
  };
  function loadData() {
    axios.get("https://65815fb03dfdd1b11c431483.mockapi.io/project")
      .then((res) => {
        console.log(res.data);
        setNewData(res.data)
      })
  }
  useEffect(() => {
    loadData();
  }, [])

  function handleDelete(e, id) {
    e.preventDefault();
    //alert(id);
    axios.delete("https://65815fb03dfdd1b11c431483.mockapi.io/project/" + id)
      .then((res) => {
        console.log(res.data);
        loadData();
      })
  };
  function handleUpdate(e, id) {
    e.preventDefault();
    setId(id)
    // alert(id)
    // axios.get("https://65815fb03dfdd1b11c431483.mockapi.io/crud" +id)
    axios.get(`https://65815fb03dfdd1b11c431483.mockapi.io/project/${id}`)
      .then((res) => {
        console.log(res.data);
        setData({
          name: res.data.name,
          gst: res.data.gst,
          price: res.data.price,

        })
      })
  }
  return (
    <>
      <div>
        <Navbar />

        {/* <div className='bg bg-info'> */}
        <div className='row' style={{ backgroundColor: "" }}>
          <div className="col-lg-2">
            <Sidebar />
          </div>
          <div className="col-lg-10">
            <div>

              <div className='bredcrumbs' style={{ fontFamily: "serif" }}>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-10'>
                      <p className='bread h3'>
                        <span>Product</span>
                      </p>
                    </div>
                    <div className='col-lg-2'>
                      <button className='btn btn-light position relative mt-2 fs-6 mb-2' data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
                    </div>
                    {/* <!-- Button trigger modal --> */}
                    {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <div className="mb-3">
                              <label className="form-label">Name</label>
                              <input name="name" value={data.name} type="text" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3">
                              <label className="form-label">GST%</label>
                              <input name='gst' value={data.gst} type="text" onChange={handleChange} className="form-control" id="exampleInputPassword1" />

                            </div>
                            <div className="mb-3">
                              <label className="form-label">Price</label>
                              <input name='price' value={data.price} type="text" onChange={handleChange} className="form-control" id="exampleInputPassword1" />

                            </div>
                            {/* <div className="mb-3">
                                <label className="form-label">Qualification</label>
                                <input name='qualification' value={data.qualification} type="text" onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                              </div> */}
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>


                            <button type="submit" onClick={() => handleSubmit()} className="btn btn-primary" data-bs-dismiss="modal">Submit</button><br />

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* TableData */}
            <div className='container'>
              <table className='table table-striped'>
                <thead class="">
                  <tr style={{ textAlign: "center" }}>
                    <th scope='col'>No.</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>GST%</th>
                    <th scope='col'>Price</th>
                    {/* <th scope='col'>Qualification</th> */}
                    <th scope='col'>Action</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    newData.map((eachData, i) => {
                      return (
                        <tr style={{ textAlign: "center" }} key={i}>
                          <th scope='row'>{i + 1}</th>
                          <td >{eachData.name}</td>
                          <td>{eachData.gst}</td>
                          <td>{eachData.price}</td>
                          {/* <td>{eachData.qualification}</td> */}
                          {/* <button className='btn btn-primary m-2'><i class="fa-pencil"></i></button> */}
                          <div>
                          <button onClick={(e) => handleUpdate(e, eachData.id)} className='btn btn-primary m-2' data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                          <button onClick={(e) => handleDelete(e, eachData.id)} className='btn btn-danger'>Delete</button>
                          </div>

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

    </>



  )
}

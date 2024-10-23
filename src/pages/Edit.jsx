import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  const navigate=useNavigate()
  const {id}=useParams()
  const [employee,setEmployee]=useState({
    id:'',
    age:'',
    name:'',
    designation:'',
    salary:''
  })

  const fetchData=async()=>{
      try {
        let response=  await axios.get(`http://localhost:5000/viewemployee/${id}`)
        setEmployee(response.data.employee)
      } catch (error) {
        console.log(error)
      }
  }

  //update
  const handleUpdate =async()=>{
    try {
      let response = await axios.put(`http://localhost:5000/editemployee/${id}`,employee)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])


  return (
    <div className='container' style={{minHeight:'81vh'}}>
     <div className="row">
      <div className="col-4"></div>
      <div className="col-4 p-2  rounded mt-3">
        <div className="box d-flex flex-column align-items-center">
          <h3 className='fw-bold'>UPDATE</h3>
          <input onChange={(e)=>setEmployee({...employee,id:e.target.value})} value={employee.id} className='form-control mt-2' type="text" />
          <input onChange={(e)=>setEmployee({...employee,name:e.target.value})} value={employee.name} className='form-control mt-2' type="text" />
          <input onChange={(e)=>setEmployee({...employee,age:e.target.value})} value={employee.age} className='form-control mt-2' type="text" />
          <input onChange={(e)=>setEmployee({...employee,designation:e.target.value})} value={employee.designation} className='form-control mt-2' type="text" />
          <input onChange={(e)=>setEmployee({...employee,salary:e.target.value})} value={employee.salary} className='form-control mt-2' type="text" />

          <button onClick={handleUpdate} className='btn btn-dark mt-2 w-50'>update</button>
        </div>
      </div>
      <div className="col-4"></div>
     </div>
    </div>
  )
}

export default Edit

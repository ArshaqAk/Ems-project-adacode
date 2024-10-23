import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  const navigate= useNavigate()
  const [data,setData]=useState({
    id: '',
    name: '',
    age: '',
    designation: '',
    salary: ''
  })
//add function
const handleAdd=async()=>{
  try {
    let response = await axios.post('http://localhost:5000/addemployees',data)
    console.log(response)
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div className='container' style={{minHeight:'81vh'}}>
     <div className="row">
      <div className="col-4"></div>
      <div className="col-4 text-center">
        <h3 className='mt-2'>Add Employee</h3>
        <div className="box">
          <input onChange={(e)=>setData({...data,id:e.target.value})} placeholder='id' className='form-control mt-1' type="text" />
          <input onChange={(e)=>setData({...data,name:e.target.value})} placeholder='name' className='form-control mt-1' type="text" />
          <input onChange={(e)=>setData({...data,age:e.target.value})} placeholder='age' className='form-control mt-1' type="text" />
          <input onChange={(e)=>setData({...data,designation:e.target.value})} placeholder='designation' className='form-control mt-1' type="text" />
          <input onChange={(e)=>setData({...data,salary:e.target.value})} placeholder='salary' className='form-control mt-1' type="text" />
          <button onClick={handleAdd} className='btn btn-dark mt-1'>Add</button>
        </div> 
      </div>
      <div className="col-4"></div>
     </div>
    </div>
  )
}

export default Add

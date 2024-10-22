import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'
import {Link} from 'react-router-dom'
const Admin = () => {
const [data,setData]=useState([])
//getdata
  const fetchData=async()=>{
    try {
      let response = await axios.get('http://localhost:5000/getemployees')
       setData(response.data.employee)
    } catch (error) {
      console.log(error)
    }
  }

  //delete
  const handledelete =async(id)=>{
    try {
      let response = await axios.delete('http://localhost:5000/deleteemployees',id)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchData()
  },[data])
  return (
    <div className='container' style={{minHeight:'83vh'}}>
      <div className="row">
        <h2 className='text-center my-2'>Employee management system</h2>
        <hr />
        <p className='mt-2'>
        Software solution designed to streamline and enhance various HR functions within an organization. By integrating features such as employee records management. 
        </p>

    <div className="col-12 mt-4">
      <Link to={'/add'}><button className='btn btn-dark mb-2'>Add <i className='fa-solid fa-plus'></i> </button></Link>
      {
        data.length>0?
        <MDBTable className='shadow-2'>
        <MDBTableHead light>
         <tr>
           <th scope='col'>Id</th>
           <th scope='col'>Name</th>
           <th scope='col'>Age</th>
           <th scope='col'>Designation</th>
           <th scope='col'>Salary</th>
           <th scope='col'>Action</th>
         </tr>
       </MDBTableHead>
       <MDBTableBody>
         {
  
           data.map((item,index)=>(
             <tr key={index}>
             <th scope='row'>{item.id}</th>
             <td>{item.name}</td>
             <td>{item.age}</td>
             <td>{item.designation}</td>
             <td>{item.salary}</td>
             <td>
              <Link to={`/edit/${item.id}`}>
              <button className='btn btn-outline-dark'><i className='fa-solid fa-pen'></i></button>
              </Link>
               <button onClick={()=>handledelete(item.id)} className='btn btn-outline-dark ms-1'><i className='fa-solid fa-trash'></i></button>
             </td>
           </tr>
           ))
 
         }
       </MDBTableBody>
     </MDBTable>
      :<p>No data  available</p>

      }
     </div>

      </div>
      
    </div>
  )
}

export default Admin

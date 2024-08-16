import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';
function AddEmployee() {
    const navigate=useNavigate();
    const {id}  =useParams()
    const [data,setData]=useState({
        first:"",
        last:"",
        email:"",
        mobile:""
    });
const saveEmployee=(e)=>{
        e.preventDefault();
        if(id!=="undefined"){
        if(data.first!=="" && data.last!=="" && data.email!=="" && data.mobile!==""){
        EmployeeService.createEmployee(data).then((response)=>{
            console.log(response.data);
            navigate("/home");
        }).catch(error=>{
            console.log(error);
        })
    }
}
else{
    let employee={
        id:id,
        first:data.first,
        last:data.last,
        email:data.email,
        mobile:data.mobile
    }
    EmployeeService.updateEmployee(employee).then((response)=>{
        console.log(response.data);
        navigate("/home");
    }).catch(error=>{
        console.log(error);
    })
}
       setData({
        first:"",
        last:"",
        email:"",
        mobile:""
       })
    
}
useEffect(()=>{
    EmployeeService.getEmployeeById(Number(id)).then((response)=>{
        setData(response.data);
        
    }).catch(error=>{
        console.log(error);
    })
},[])


  return (
    <>
     <div className='container mt-3'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h1 className='text-center text-primary'>Add Employee</h1>
                <div className='card-body'>
                    <form action="">
                        <div className='form-group mb-2'>
                            <label htmlFor="" className='form-label'>First Name</label>
                            <input type="text" placeholder='enter your first name' className='form-control' name='first' value={data.first} onChange={(e)=>{setData({...data,first:e.target.value})}}/>
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="" className='form-label'>Last Name</label>
                            <input type="text" placeholder='enter your last name' className='form-control' name="last" value={data.last} onChange={(e)=>{setData({...data,last:e.target.value})}} />
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="" className='form-label'>Email</label>
                            <input type="email" placeholder='enter your email' className='form-control' name="email"  value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}} />
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="" className='form-label'>Mobile No</label>
                            <input type="text" placeholder='enter your mobile no' className='form-control' name="mobile" value={data.mobile} onChange={(e)=>{setData({...data,mobile:e.target.value})}}  />
                        </div>
                        <button className='btn btn-success me-3' onClick={(e)=>saveEmployee(e)}>{id?"Update":"Submit"}</button>
                        <button className='btn btn-danger' type='reset' >Cancel</button>
                    </form>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default AddEmployee
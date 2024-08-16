import React,{useEffect, useState} from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom';

function ListOfEmployee() {
    const [employee, setEmployee] = useState([])
    useEffect(()=>{
        getAllEmployees()
    },[])

    const getAllEmployees=()=>{
        EmployeeService.getEmployees().then((response)=>{
            setEmployee(response.data)
        }).catch(error=>{
            console.log(error)
        })
    }
  
    const deleteEmployee=(id)=>{
        EmployeeService.deleteEmployee(id).then((response)=>{
            getAllEmployees();
        }).catch(error=>{
            console.log(error);
        })
    }
  return (
   <>
    {employee.length>0?<div className='container'>
        <h2  className='text-center'>List Employees</h2>
        <Link to="/add-employee" className="btn btn-primary mb-2">Add Employee</Link>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                    <th>Employee Mobile No</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map((emp)=>{
                        return(
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.first}</td>
                                <td>{emp.last}</td>
                                <td>{emp.email}</td>
                                <td>{emp.mobile}</td>
                                <td>
                                <Link className='btn btn-info me-2' to={`/edit-employee/${emp.id}`}>Update</Link>
                                <Link className='btn btn-danger' to={`/delete-employee/${emp.id}`} 
                                onClick={()=>{
                                    deleteEmployee(emp.id);
                                }}
                                >Delete</Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>:  <h2  className='text-center mt-5'>No Data Present in the Database</h2>}
    </>
  )
}

export default ListOfEmployee

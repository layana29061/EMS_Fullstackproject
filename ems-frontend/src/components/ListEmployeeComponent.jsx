import React,{useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'
const ListEmployeeComponent = () => {
    const [employees,setEmployees]= useState([])
    const navigator= useNavigate();
    
    useEffect(()=>{
        listEmployees().then((response)=>{
            setEmployees(response.data);
        }).catch(error=>{
            console.error(error)
        })
    },[])

    function addNewEmployee(){
        navigator('/add-employee')
    }

    // const dummydata=[
    //     {
    //         "id":1,
    //         "firstName":"Layana",
    //         "lastName":"Balakrishnan",
    //         "email":"layana459@gmaill.com"
    //     },
    //     {
    //         "id":2,
    //         "firstName":"Aradhya",
    //         "lastName":"Krishnan",
    //         "email":"aradhya8959@gmaill.com"
    //     },
    //     {
    //         "id":3,
    //         "firstName":"Nivedhitha",
    //         "lastName":"Arun",
    //         "email":"nivedhiha123@gmaill.com"
    //     },
    // ]
   
  return (
    <div className='container'>
        <h1 className='text-center mt-4'>List of Employees</h1>
        <table className='table table-striped table-bordered mt-5'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    // dummydata.map(employee=>
                    //     <tr key={employee.id}>
                    //         <td>{employee.id}</td>
                    //         <td>{employee.firstName}</td>
                    //         <td>{employee.lastName}</td>
                    //         <td>{employee.email}</td>
                    //     </tr>
                    // )

                    employees.map(employee=>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <button className='btn btn-dark mb-2' onClick={addNewEmployee}>Add Button</button>
    </div>
  )
}

export default ListEmployeeComponent
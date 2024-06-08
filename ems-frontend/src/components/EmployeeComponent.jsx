import React, { useState } from 'react'

const EmployeeComponent = () => {
   const[firstName,setFirstName]= useState('');
   const[lastName,setLastName]= useState('');
   const[email,setEmail]=useState('');

    function handleFirstName(e){
        setFirstName(e.target.value);
    }

    function handleLastName(e){
        setLastName(e.target.value);
    }

    function handleEmail(e){
        setEmail(e.target.value);
    }

    // form handling button
    function saveEmployee(e){
        e.preventDefault(e);
        const employee={firstName,lastName,email};
        console.log(employee);
    }
    return (
    <div className='container mt-5'>
       <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-mid-3 bg-light text-dark'>
                <h2 className='text-center pt-3'>Add New Employee</h2>
                <div className='card-body'>
                    <form>
                        {/* First Name */}
                        <div className='form-group'>
                            <label className='form-label'>First Name</label>
                            <input 
                                className='form-control'
                                type='text'
                                placeholder='Enter the First Name'
                                name='firstName'
                                value={firstName}
                                onChange={handleFirstName}
                                ></input>
                        </div>
                        {/* Last Name */}
                        <div className='form-group mb-3'>
                            <label className='form-label'>Last Name</label>
                            <input 
                                className='form-control'
                                type='text'
                                placeholder='Enter the Last Name'
                                name='lastName'
                                value={lastName}
                                onChange={handleLastName}
                                ></input>
                        </div>
                        {/* Email */}
                        <div className='form-group mb-3'>
                            <label className='form-label'>Email Address</label>
                            <input 
                                className='form-control'
                                type='text'
                                placeholder='Enter the Email Address'
                                name='email'
                                value={email}
                                onChange={handleEmail}
                                ></input>
                        </div>
                        <button className='btn btn-success' onClick={saveEmployee} >Submit</button>
                    </form>
                </div>
            </div>
       </div>
    </div>
  )
}

export default EmployeeComponent

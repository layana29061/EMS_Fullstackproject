import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const EmployeeComponent = () => {
   const[firstName,setFirstName]= useState('');
   const[lastName,setLastName]= useState('');
   const[email,setEmail]=useState('');

   const[errors,setErrors]= useState({
    firstName:'',
    lastName:'',
    email:''
   })

   const navigator= useNavigate();

   //instead of writing seperate functions for each onchange in form handling
   //w can pass it there itself as a arrow function.
   //eg:onChange={(e)=>setlastname(e.target.value)}
    // function handleFirstName(e){
    //     setFirstName(e.target.value);
    // }

    // function handleLastName(e){
    //     setLastName(e.target.value);
    // }

    // function handleEmail(e){
    //     setEmail(e.target.value);
    // }

    // form handling button

    function saveEmployee(e){
        e.preventDefault(e);

        if(validateForm()){
            const employee={firstName,lastName,email};
            console.log(employee);
    
            createEmployee(employee).then((response)=>{
                console.log(employee);
                navigator('/employees')
            })
        }
    }

    //validation
    function validateForm(){
        let valid=true;
        const errorsCopy={... errors}
        if(firstName.trim()){
            errorsCopy.firstName=''
        }else{
            errorsCopy.firstName='First Name is Required';
            valid=false;
        }

        if(lastName.trim()){
            errorsCopy.lastName=''
        }else{
            errorsCopy.lastName='Last Name is Required';
            valid=false;
        }

        if(email.trim()){
            errorsCopy.email=''
        }else{
            errorsCopy.email='Email is Required';
            valid=false;
        }

        setErrors(errorsCopy);
        return valid;
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
                                className={`form-control ${errors.firstName ? 'is-invalid':''} `}
                                type='text'
                                placeholder='Enter the First Name'
                                name='firstName'
                                value={firstName}
                                // onChange={handleFirstName}
                                onChange={(e)=>setFirstName(e.target.value)}
                                ></input>
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                        </div>
                        {/* Last Name */}
                        <div className='form-group mb-3'>
                            <label className='form-label'>Last Name</label>
                            <input 
                                className={`form-control ${errors.lastName ? 'is-invalid':''} `}
                                type='text'
                                placeholder='Enter the Last Name'
                                name='lastName'
                                value={lastName}
                                onChange={(e)=>setLastName(e.target.value)}
                                ></input>
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                        </div>
                        {/* Email */}
                        <div className='form-group mb-3'>
                            <label className='form-label'>Email Address</label>
                            <input 
                                className={`form-control ${errors.email ? 'is-invalid':''} `}
                                type='text'
                                placeholder='Enter the Email Address'
                                name='email'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                ></input>
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
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

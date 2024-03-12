import { Link } from 'react-router-dom'
import { useState } from 'react'

function SignUp() {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("USER_OBJ", JSON.stringify(user));
  }

  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-light'>
      <div className="w-50 p-5 rounded border shadow-lg">
      <form className='row g-3'>
        <div className='col-12 mb-2'><h3 className="text-center">Create Account</h3></div>
        <div className=' col-md-6 mb-2'>
          <label htmlFor='fname'>First Name:</label>
          <input 
            type='text' placeholder='First Name' className='form-control'
            name='fname' value={user.fname || ''} onChange={handleChange}></input>
        </div>
        <div className=' col-md-6 mb-2'>
          <label htmlFor='lname'>Last Name:</label>
          <input 
            type='text' placeholder='Last Name' className='form-control'
            name='lname' value={user.lname || ''} onChange={handleChange}></input>
        </div>
        <div className='col-md-6 mb-2'>
          <label htmlFor='email'>Email</label>
          <input
            type='email' placeholder='Enter Email' className='form-control'
            name='email' value={user.email || ''} onChange={handleChange}></input>
        </div>
        <div className='col-md-6 mb-2'>
          <label htmlFor='password'>Password</label>
          <input 
            type='password' placeholder='Enter Password' className='form-control'
            name='password' value={user.password || ''} onChange={handleChange}></input>
        </div>
        <div className=' col-12 mb-2'>
          <label htmlFor='inputAddess'>Address</label>
          <input
            type='text' placeholder='Enter Address' className='form-control'
            name='inputAddress' value={user.inputAddress || ''} onChange={handleChange}></input>
        </div>
        <div className='col-12'>
          <button className='btn btn-primary' onClick={handleSubmit}>Create Account</button>
          <Link to="/signin" className="ms-2"><button className='btn btn-primary'>Sign In</button></Link>
        </div>
      </form>
      </div>
    </div>
  )
}

export default SignUp

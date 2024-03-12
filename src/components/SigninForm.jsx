import { Link } from 'react-router-dom'
import { useFormik } from 'formik';

const SigninForm = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      checked: [],
    },
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      localStorage.setItem("LOGINS", JSON.stringify(values));
      if (values.email === '') {
        await setErrors({ email: 'Insert Email placeholder' })
      } else {
        await resetForm()
      }
      await setSubmitting(false);
    },
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
          <h3 className="text-center mb-2">Sign In</h3>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input 
              type='email' id='email' placeholder='Enter Email' className='form-control'
              name='email' value={formik.values.email} onChange={formik.handleChange}/>
          </div>
          <div className='mb-2'>
            <label htmlFor='password'>Password</label>
            <input 
              type='password' id='password' placeholder='Enter Password' className='form-control'
              name='password' value={formik.values.password} onChange={formik.handleChange}/>
          </div>
          <div className='mb-2'>
            <input className='custom-control custom-checkbox' name='checked' type='checkbox' value='one' id='check' />
            <label htmlFor='check' className='custom-input-label ms-2'>
              Remember me
            </label>
          </div>
          <div className='d-grid'>
            <button className='hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-red-500 py-2 px-5 text-base font-semibold text-white outline-none' type='submit' onClick={formik.handleSubmit}>Sign In</button>
          </div>
          <p className="flex flex-row justify-between mt-4">
            <a href="#">Forgot Password?</a>
            <Link to="/signup" className="ms-2 text-right">Sign Up</Link>
          </p>
        </form>
    </div>
  )
}

export default SigninForm

import {useState, useEffect} from 'react'
import { FaSignInAlt } from 'react-icons/fa'

const Login = () => {
  
    //que datos debemos pasarle al use state? debemos checar con nuestro backend
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })
  
    const {name, email, password} = formData

    const onChange = (e) => {
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
         <section className='heading'>
            <h4>
                <FaSignInAlt /> Login
            </h4>
            <p>
                Please enter your information to log in
            </p>
         </section>
         <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input type="text" className='form-control' placeholder='Please enter your name' 
                    id='name' 
                    name='name' 
                    value={name} 
                    onChange={onChange} />
                </div>
                <div className='form-group'>
                    <input type="text" className='form-control' placeholder='Please enter your password' 
                    id='password' 
                    name='password' 
                    value={password} 
                    onChange={onChange} />
                </div>
               
                <div className='form-group'>
                    <button className='btn btn-block'>Submit</button>
                </div>
            </form>
         </section>
        </>
  )
}
export default Login
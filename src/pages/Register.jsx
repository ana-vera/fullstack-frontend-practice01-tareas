import {useState, useEffect} from 'react'
import { FaLogin } from 'react-icons/fa'

const Register = () => {
  
    //que datos debemos pasarle al use state? debemos checar con nuestro backend
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })
  
    const {name, email, password, password2} = formData

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
                <FaUserAlt /> Login
            </h4>
            <p>
                Please enter your information to create a new account
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
                    <input type="text" className='form-control' placeholder='Please confirm your password' 
                    id='name' 
                    name='name' 
                    value={name} 
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
export default Register
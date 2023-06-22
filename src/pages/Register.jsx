import {useState, useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { FaSignInAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'

const Register = () => {
    


    //que datos debemos pasarle al use state? debemos checar con nuestro backend
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })
  
    const {name, email, password, password2} = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    //desestructurando todos los elementos del state
    const{user, isLoading, isError, isSuccess, message } = useSelector((state)=> state.auth)

    useEffect(()=>{
        if(isError){ toast.error(message)}
        if(isSuccess||user){ navigate.login}
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        
        if(password !== password2) {
            toast.error('Los passwords no coinciden')
        } else {
            const userData = { name, email, password }
        }
        dispatch(register(userData))
    }

    if(isLoading){
        return <Spinner />
    }

    return (
        <>
         <section className='heading'>
            <h4>
                <FaSignInAlt /> Login
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
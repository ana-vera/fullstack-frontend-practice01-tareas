import {FaSignInAlt, FaSignOutAlt, FaUserAlt} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux' 
import {logout, reset} from '../features/auth/authSlice.js'


const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state)=>state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }

  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>Tareas App</Link>
        </div>
        <ul>
            {user ? (
            <li>
                  <button className='btn' onClick={onLogout}>
                      <FaSignInAlt /> Login
                  </button>
              </li>
            ) : (
            <>
            <li>
                <Link to='/login'>
                    <FaSignInAlt /> Login
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <FaUserAlt /> Register
                </Link>
            </li>
            </>
            )}
        </ul>
    </header>        
  )
}
export default Header
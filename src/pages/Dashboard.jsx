import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import TareaForm from '../components/TareaForm'
import Spinner from '../components/Spinner'
import {getTareas, reset} from '../features/tareas/tareaSlice'
import {toast} from 'react-toastify'
import TareaItem from '../components/TareaItem'

const Dashboard = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state)=> state.auth)
  const {tareas, isLoading, isError, message} = useSelector((state)=> state.tarea)

  useEffect(()=>{
    if (!user){
      navigate('/login')
    } else {
      dispatch(getTareas())
    }

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) { 
    return <Spinner />
  }


  return (
    <>
    <section className='heading'>
      <h2>Bienvenido {user && user.name}</h2>
      <p>Mis Tareas</p>
    </section>

    <TareaForm />

    <section className='content'>
      {tareas.length > 0 ? (
        <div className='tareas'>
          {tareas.map((tarea)=>{
            <TareaItem key={tarea.id} tarea={tarea} />
          })}
        </div>
      ):( 
      <h3>El usuario no tiene tareas</h3> 
      )}
    </section>
    </>
  )
}
export default Dashboard
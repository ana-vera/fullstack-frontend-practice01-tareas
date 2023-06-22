const TareaItem = ({tarea}) => {

    

  return (
    <div className="tarea">
        <div>
            {new Date(tarea.createdAt).toLocaleString('es-MX')}
        </div>
            <h4>{tarea.texto}</h4>
            <button onClick={()=>{dispatch(deleteTarea(tarea.id))}} className="close"> X </button>
    </div>
  )
}
export default TareaItem
import { useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'


const TareaForm = () => {

  const onSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="texto">Tarea</label>
            <input type="text" name="text" id="texto" value={texto} onChange={(e)=>setTexto(e.target.value)} />
          </div>
          <div className="form-group">
            <button className='btn btn-block' type='submit'>Agregar Tarea</button>
          </div>
      </form>
    </section>
  )
}
export default TareaForm
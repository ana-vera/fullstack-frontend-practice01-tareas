import axios from 'axios'

const API_URL = 'https://clumsy-gray-'


//crear una tarea
const createTarea =  async(tareaData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, tareaData, config)

    return response.data
}


//borrar tareas
const deleteTareas = async (id,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL, config)
    return response.data
}

const tareaService = {
    createTarea
}

export default tareaService
import axios from 'axios'

const API_URL = 'https://byzantium-shark-toga.cyclic.app/api/users/'

//Registrar usuario
const register = async(userData)=>{
const response = await axios.post(API_URL, userData)
}
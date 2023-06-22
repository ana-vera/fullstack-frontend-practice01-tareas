import axios from 'axios'

const API_URL = 'https://byzantium-shark-toga.cyclic.app/api/users/'

//Registrar usuario
const register = async(userData)=>{
const response = await axios.post(API_URL, userData)

    if(response.data){
        return response.data
    }
}


//Login usuario
const login = async(userData)=>{
    const response = await axios.post(API_URL + 'login', userData)
    
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
        return response.data
    }
}

//Logout user
const logout = ()=>{
    localStorage.removeItem('user')
}



const authService = {
    register,
    logout,
    login
}

export default authService
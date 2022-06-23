import axios from 'axios'

    const currentURL = 'http://localhost:3000/auth'

    const signup = (email, password) => {
        return axios.post(`${currentURL}/signup`, {email, password})
        .then((response)=> {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            return response.data
        })
    }
    const login = (email, password) => {
        return axios.post(`${currentURL}/login`, {email, password})
        .then((response)=> {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            return response.data
        })
    }
    const logout = () => {
        localStorage.removeItem('user')
    }
    const user = () => {
        return JSON.parse(localStorage.getItem('user'))
    }

    const authHeader = () => {
        if (user && user.accessToken) {
            return {'x-auth-token' : user.accessToken}
        } else {
            return {}
        }
    } 
    const authServices = {signup, login, logout, user, authHeader}

export default authServices
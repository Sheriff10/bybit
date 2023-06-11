import axios from "axios"

const authorizeUser = () => {
    const checkToken = window.localStorage.getItem("token")

    // check if token is valid  
    if (checkToken === null || checkToken === undefined) {
        window.alert("please login")
        window.location.href = '/login'
    }else{
        axios.get(`${window.api}/user/authorize`, {
            headers: {
                "x-auth-token": checkToken.trim().toString(),
                "Content-Type": "application/json"
            },
        }).then(res => {
            const result = res.data
            if (result === "invalid token") window.location.href = '/login'
        }).catch(err => {
            console.log(err)
        })
    }
}

// module.exports = authorizeUser
export default authorizeUser
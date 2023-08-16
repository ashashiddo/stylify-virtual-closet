import React, {useEffect, useState} from "react"
import axios from "axios"

const Registration = () =>{
    const [queryResults, setQueryResults] = useState(null)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

// useEffect(()=>{
//     axios.get("http://localhost:8080/xyz").then(res => {
//         console.log("response value is",res)
//         setQueryResults(res.data.test)
//     }).catch(err => console.log("an error occured", err))
// })

const handleFromSubmit = () =>{
    const payload = {
        firstname: firstName,
        lastname: lastName,
        email: email
    }
    axios.post("/register_user", {payload}).then(res => {
console.log("success got to the backend")
    }).catch(err => console.log("an error occured", err))
}

    return (
        <>
        Welcome to Wardrobe App
        {queryResults}
        <div>
            <input onChange={(e)=>{setFirstName(e.target.value)}} value={firstName} placeholder="Full Name"/>
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="Email"/>
            <input type="password" onChange={(e)=>{setLastName(e.target.value)}} value={lastName} placeholder="Password"/>
            
            
            <a href="/login"><button onClick={handleFromSubmit}>Submit</button></a>

        </div>
        </>
    )
} 

export default Registration
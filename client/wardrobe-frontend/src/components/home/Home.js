import React, {useEffect, useState} from "react"
import axios from "axios"

const Home = () =>{
    const [queryResults, setQueryResults] = useState(null)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

useEffect(()=>{
    axios.get("/xyz").then(res => {
        console.log("response value is",res)
        setQueryResults(res.data.test)
    }).catch(err => console.log("an error occured", err))
})

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
        Welcome to Wardrobe Homepage
        {queryResults}
        <div>
            <input onChange={(e)=>{setFirstName(e.target.value)}} value={firstName} />
            <input onChange={(e)=>{setLastName(e.target.value)}} value={lastName} />
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
            
            <button onClick={handleFromSubmit}>
                Submit
            </button>
        </div>
        </>
    )
} 

export default Home 
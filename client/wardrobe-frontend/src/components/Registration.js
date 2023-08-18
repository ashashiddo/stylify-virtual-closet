// import React, {useEffect, useState} from "react"
// import axios from "axios"

// const Registration = () =>{
//     const [queryResults, setQueryResults] = useState(null)
//     const [firstName, setFirstName] = useState("")
//     const [lastName, setLastName] = useState("")
//     const [email, setEmail] = useState("")

// // useEffect(()=>{
// //     axios.get("http://localhost:8080/xyz").then(res => {
// //         console.log("response value is",res)
// //         setQueryResults(res.data.test)
// //     }).catch(err => console.log("an error occured", err))
// // })

// const handleFromSubmit = () =>{
//     const payload = {
//         firstname: firstName,
//         lastname: lastName,
//         email: email
//     }
//     axios.post("/register_user", {payload}).then(res => {
// console.log("success got to the backend")
//     }).catch(err => console.log("an error occured", err))
// }

//     return (
//         <>
//         Welcome to Wardrobe App
//         {queryResults}
//         <div>
//             <input onChange={(e)=>{setFirstName(e.target.value)}} value={firstName} placeholder="Full Name"/>
//             <input onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="Email"/>
//             <input type="password" onChange={(e)=>{setLastName(e.target.value)}} value={lastName} placeholder="Password"/>
            
            
//             <a href="/login"><button onClick={handleFromSubmit}>Submit</button></a>

//         </div>
//         </>
//     )
// } 

// export default Registration


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [queryResults, setQueryResults] = useState(null);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");

// //   useEffect(() => {
// //     axios.get("http://localhost:8080/abc").then((res) => {
// //       console.log("response value is", res);
// //       setQueryResults(res.data.test);
// //     }).catch((err) => console.log("an error occurred", err));
// //   }, []); // Adding an empty dependency array ensures the effect runs only once on component mount

//   const handleFormSubmit = () => {
//     const payload = {
//       firstname: firstName,
//       lastname: lastName,
//       email: email,
//     };
//     axios.post("http://localhost:8080/register_user", { payload })
//       .then((res) => {
//         console.log("success got to the backend");
//       })
//       .catch((err) => {
//         console.log("an error occurred", err);
//       });
//   };

//   return (
//     <>
//       <h1>Welcome to Wardrobe App</h1>
//       {queryResults && <p>{queryResults}</p>}
//       <div>

//         <input
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//           value={email}
//           placeholder="Email"
//         />

//         <input
//           type="password"
//           onChange={(e) => {
//             setFirstName(e.target.value);
//           }}
//           value={firstName}
//           placeholder="Password"
//         />

//         <a href="/logged_in"><button onClick={handleFormSubmit}>Login</button></a>
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    const payload = {
      email: email,
      password: password, 
      username: "test user" // Assuming your backend takes the password field
    };
    // axios.post("http://localhost:8080/register_user", { payload })
    //   .then((res) => {
    //     console.log("success got to the backend");
    //   })
    //   .catch((err) => {
    //     console.log("an error occurred", err);
    //   });
  };

  return (
    <div
className="test flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto w-auto logo"
          src="assets/icons/logo.png"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
         Register for an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleFormSubmit} method="GET" action="/login">
        <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="fullname"
                type="text"
                required
            
               
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              {/* You can link this to a password recovery function or page */}
           
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>


          
          <div>
         
            <button               
                className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
            >
           Register
            </button>
            {/* <button

              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                <a href="/logged_in">
              Sign in</a>
            </button> */}
            
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a href="#" className="font-semibold leading-6 text-black-600 hover:text-indigo-500">
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registration;

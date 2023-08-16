import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const [queryResults, setQueryResults] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

//   useEffect(() => {
//     axios.get("http://localhost:8080/abc").then((res) => {
//       console.log("response value is", res);
//       setQueryResults(res.data.test);
//     }).catch((err) => console.log("an error occurred", err));
//   }, []); // Adding an empty dependency array ensures the effect runs only once on component mount

  const handleFormSubmit = () => {
    const payload = {
      firstname: firstName,
      lastname: lastName,
      email: email,
    };
    axios.post("http://localhost:8080/register_user", { payload })
      .then((res) => {
        console.log("success got to the backend");
      })
      .catch((err) => {
        console.log("an error occurred", err);
      });
  };

  return (
    <>
      <h1>Welcome to Wardrobe App</h1>
      {queryResults && <p>{queryResults}</p>}
      <div>

        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          placeholder="Email"
        />

        <input
          type="password"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          value={firstName}
          placeholder="Password"
        />

        <a href="/logged_in"><button onClick={handleFormSubmit}>Login</button></a>
      </div>
    </>
  );
};

export default Login;

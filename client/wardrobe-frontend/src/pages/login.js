import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [queryResults, setQueryResults] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get("/xyz").then((res) => {
      console.log("response value is", res);
      setQueryResults(res.data.test);
    }).catch((err) => console.log("an error occurred", err));
  }, []); // Adding an empty dependency array ensures the effect runs only once on component mount

  const handleFormSubmit = () => {
    const payload = {
      firstname: firstName,
      lastname: lastName,
      email: email,
    };
    axios.post("/register_user", { payload })
      .then((res) => {
        console.log("success got to the backend");
      })
      .catch((err) => {
        console.log("an error occurred", err);
      });
  };

  return (
    <>
      <h1>Welcome to Wardrobe Homepage</h1>
      {queryResults && <p>{queryResults}</p>}
      <div>
        <input
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          value={firstName}
          placeholder="First Name"
        />
        <input
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          value={lastName}
          placeholder="Last Name"
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          placeholder="Email"
        />

        <button onClick={handleFormSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Home;

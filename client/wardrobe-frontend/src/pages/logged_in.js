import React, { useEffect, useState } from "react";
import OutfitPicker from "../components/OutfitPicker";
import Wardrobe from "../components/Wardrobe";
import HeaderLoggedIn from "../components/Header_LoggedIn";

const LoggedIn = () => {
  const [queryResults, setQueryResults] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(""); 
    return (
        <div className="home">
          <h1 className="font-semibold leading-6 text-gray-900">My wardrobe</h1>
          <OutfitPicker />
          <Wardrobe />
        </div>
      );

};

export default LoggedIn;

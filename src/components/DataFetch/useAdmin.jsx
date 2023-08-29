import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Account/Provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";



const useAdmin = () => {
    const {user} = useContext(AuthContext);
    // console.log(user);
    const [checkAdmin, setAdmin] = useState([]);
    useEffect(() => {
    fetch(`https://e-result-server.vercel.app/user/isAdmin?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
      });
  }, [user.email]);
  return [checkAdmin];
};

export default useAdmin;
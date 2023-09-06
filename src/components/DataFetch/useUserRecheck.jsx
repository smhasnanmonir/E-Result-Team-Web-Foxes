import { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../Account/Provider/AuthProvider";

const useUserRecheck = () => {
  const {user} = useContext(AuthContext);
  // console.log(user);
  const [userRecheckAll, setallRecheck] = useState([]);
  useEffect(() => {
    fetch(`https://e-result-server.vercel.app/reCheckUser?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setallRecheck(data);
      });
  }, [user.email]);
  return [userRecheckAll];
};

export default useUserRecheck;
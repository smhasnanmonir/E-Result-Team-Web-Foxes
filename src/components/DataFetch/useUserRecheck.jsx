import { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../Account/Provider/AuthProvider";

const useUserRecheck = () => {
  const {user} = useContext(AuthContext);
  const [userRecheckAll, setallRecheck] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reCheckUser?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setallRecheck(data);
      });
  }, [user.email]);
  return [userRecheckAll];
};

export default useUserRecheck;
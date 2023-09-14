import { useContext } from "react";
// import { useEffect, useState } from "react";
import { AuthContext } from "../Account/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useUserRecheck = () => {
  
  const {user} = useContext(AuthContext);
  // console.log(user);
  const { refetch, data: reCheckUser = [] } = useQuery({
    queryKey: ["reCheckUser"],
    queryFn: async () => {
      const res = await fetch(`https://e-result-server.vercel.app/reCheckUser?email=${user.email}`);
      return res.json();
    },
  });

  return [reCheckUser, refetch];
  // const {user} = useContext(AuthContext);
  // // console.log(user);
  // const [userRecheckAll, setallRecheck] = useState([]);
  // useEffect(() => {
  //   fetch(`https://e-result-server.vercel.app/reCheckUser?email=${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setallRecheck(data);
  //     });
  // }, [user.email]);
  // return [userRecheckAll];
};

export default useUserRecheck;
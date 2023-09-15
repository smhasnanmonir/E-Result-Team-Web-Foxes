import { useContext } from "react";
// import { useEffect, useState } from "react";
import { AuthContext } from "../Account/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useNotify = () => {
  const {user} = useContext(AuthContext);
  // console.log(user);
  const { refetch, data: notifications = [] } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      const res = await fetch(`https://e-result-server.vercel.app/notification?email=${user ? user.email : 'team@web.fox'}`);
      return res.json();
    },
  });

  return [notifications, refetch];

//   const [notifications, setNotificaiton] = useState([]);
//   useEffect(() => {
//     fetch(`https://e-result-server.vercel.app/notification?email=${user ? user.email : 'team@web.fox'}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setNotificaiton(data);
//       });
//   }, [user]);
//   return [notifications];
};

export default useNotify;
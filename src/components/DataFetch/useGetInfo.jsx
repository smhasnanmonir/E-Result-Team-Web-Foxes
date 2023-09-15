import { useContext } from "react";
import { AuthContext } from "../Account/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useGetInfo = () => {
    const {user} = useContext(AuthContext);
    // console.log(user);
    const { refetch, data: userInfo = [] } = useQuery({
      queryKey: ["userInfo"],
      queryFn: async () => {
        const res = await fetch(`https://e-result-server.vercel.app/userInfo?email=${user ? user.email : 'team@web.fox'}`);
        return res.json();
      },
    });
  
    return [userInfo, refetch];
};

export default useGetInfo;
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const { refetch, data: allUser = [] } = useQuery({
    queryKey: ["reCheck"],
    queryFn: async () => {
      const res = await fetch("https://e-result-server.vercel.app/userList");
      return res.json();
    },
  });

  return [allUser, refetch];
};
export default useUser;

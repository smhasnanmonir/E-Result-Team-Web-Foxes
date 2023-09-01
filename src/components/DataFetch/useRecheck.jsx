import { useQuery } from "@tanstack/react-query";

const useRecheck = () => {
  const { refetch, data: reCheck = [] } = useQuery({
    queryKey: ["reCheck"],
    queryFn: async () => {
      const res = await fetch("https://e-result-server.vercel.app/reCheck");
      return res.json();
    },
  });

  return [reCheck, refetch];
};
export default useRecheck;

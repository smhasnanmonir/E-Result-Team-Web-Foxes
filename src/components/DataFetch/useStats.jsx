import { useQuery } from "@tanstack/react-query";

const useStats = () => {
    const { refetch, data: getStats = [] } = useQuery({
      queryKey: ["getStats"],
      queryFn: async () => {
        const res = await fetch('https://e-result-server.vercel.app/getStats');
        return res.json();
      },
    });
  
    return [getStats, refetch];
};

export default useStats;
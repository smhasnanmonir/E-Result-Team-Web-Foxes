import { useEffect, useState } from "react";

const useRecheck = () => {
  const [allRecheck, setallRecheck] = useState([]);
  useEffect(() => {
    fetch("https://e-result-server.vercel.app/reCheck")
      .then((res) => res.json())
      .then((data) => {
        setallRecheck(data);
      });
  }, []);
  return [allRecheck];
};

export default useRecheck;

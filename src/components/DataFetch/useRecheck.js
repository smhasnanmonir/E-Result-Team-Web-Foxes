import { useEffect, useState } from "react";

const useRecheck = () => {
  const [allRecheck, setallRecheck] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reCheck")
      .then((res) => res.json())
      .then((data) => {
        setallRecheck(data);
      });
  }, []);
  return [allRecheck];
};

export default useRecheck;

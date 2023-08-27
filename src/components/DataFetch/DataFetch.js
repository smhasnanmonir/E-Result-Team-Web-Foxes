import { useEffect, useState } from "react";

const DataFetch = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("https://e-result-server.vercel.app/allResults")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  }, []);
  return [allData];
};

export default DataFetch;

import { useEffect, useState } from "react";

const DataFetch = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allResults")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  }, []);
  return [allData];
};

export default DataFetch;

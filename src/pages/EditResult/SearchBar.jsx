import "./EditResult.css";

const SearchBar = ({ setSearchResult }) => {
  const fetchData = (value) => {
    fetch("https://e-result-server.vercel.app/allResults")
      .then((res) => res.json())
      .then((data) => {
        const results = data.filter((student) => {
          return (
            value &&
            student &&
            student.Name &&
            student.Name.toLocaleLowerCase().includes(value)
          );
        });
        setSearchResult(results);
      });
  };
  const handleChange = (value) => {
    fetchData(value);
  };
  return (
    <div className="f-form lg:flex lg:justify-between">
      <input
        onChange={(e) => handleChange(e.target.value)}
        type="search"
        name="search1"
        id="search1"
        placeholder="Search Box(Name)"
      />
    </div>
  );
};

export default SearchBar;

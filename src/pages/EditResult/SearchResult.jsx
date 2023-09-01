import "./EditResult.css";

const SearchResult = ({ searchResult, calculateGrade, showEditResult }) => {
  return (
    <div>
      {searchResult.map((result, id) => {
        return (
          <>
            <tr key={id} className="table table-zebra bg-green-100 mt-4">
              <th>{result.Name}</th>
              <th>{result.classId}</th>
              <th>{calculateGrade(result.marks)}</th>
              <th>
                <label
                  onClick={() => showEditResult(result?._id)}
                  htmlFor="my_modal_6"
                >
                  Edit
                </label>
              </th>
            </tr>
          </>
        );
      })}
    </div>
  );
};

export default SearchResult;

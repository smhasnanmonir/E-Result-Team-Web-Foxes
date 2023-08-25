import { useState } from "react";
import DataFetch from "../DataFetch/DataFetch";
import "./ViewAll.css";
import ReactPaginate from "react-paginate";

const ViewAll = () => {
  const [allData] = DataFetch();
  const [items] = [allData];
  console.log(allData);
  let itemsPerPage = 3;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="mx-auto">
      <>
        <form className="v-form flex md:flex-row flex-col gap-4" action="">
          <input
            type="search"
            name="search1"
            id="search1"
            placeholder="Search Box (Student ID)"
          />
          <button
            type="submit"
            className="bg-red-400 rounded-md hover:bg-red-700 hover:text-white transition-all duration-300 ease-in px-[120px]"
          >
            Search
          </button>
        </form>
      </>
      <div className="">
        <h1 className="bg-green-200 text-center py-4 my-10 rounded text-[20px]">
          Student Result Table
        </h1>
      </div>
      <div className="bg-green-200 lg:p-10 rounded">
        <div className="overflow-x-auto mb-[35px]">
          <table className="table table-zebra bg-green-100">
            <thead className="">
              <tr className="text-[18px] ">
                <th>Name</th>
                <th>ID</th>
                <th>Total Marks</th>
                <th>Section</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, i) => (
                <tr key={i}>
                  <th>{item.Name}</th>
                  <td>{item.classId}</td>
                  <td>
                    {item.result[0].midTerm.reduce(
                      (total, subject) => total + parseInt(subject.number),
                      0
                    )}
                  </td>
                  <td>{item.section}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ReactPaginate
          previousClassName="PrevButton"
          nextClassName="NextButton"
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageClassName="PageClass"
          pageCount={pageCount}
          previousLabel="Previous"
          activeClassName="activePage"
          renderOnZeroPageCount={null}
          containerClassName="PageNation"
          activeLinkClassName="active"
        />
      </div>
    </div>
  );
};

export default ViewAll;

import { useParams } from "react-router";
import DataFetch from "../../components/DataFetch/DataFetch";

const ResultPage = () => {
  const allData = DataFetch(); //from DataFetch.js in DataFetch files
  console.log(allData);
  const { idNumber } = useParams();
  console.log(idNumber);
  const studentInformation = allData[0].find(
    (user) => user.classId == idNumber
  );
  console.log(studentInformation);
  console.log(studentInformation?.result[0].midTerm);
  return (
    <>
      <div className="lg:px-[250px] px-[35px]">
        <div className="container bg-[#E4E4E4] mx-auto  rounded-xl pb-4 ">
          <div className="text-center mb-8 rounded-t-xl bg-[#ACE9D7] ">
            <h1 className="text-md font-medium py-4">Result Table</h1>
          </div>
          <div className="lg:px-[45px] px-[25px] flex md:flex-row flex-col gap-2 justify-center text-white">
            <h1 className="p-3 rounded-md bg-indigo-600 shadow-md shadow-indigo-500">
              Name: {studentInformation?.Name}
            </h1>
            <p className="p-3 rounded-md bg-indigo-600 shadow-md shadow-indigo-500">
              Roll: {studentInformation?.classId}
            </p>
            <p className="p-3 rounded-md bg-indigo-600 shadow-md shadow-indigo-500">
              Section: {studentInformation?.section}
            </p>
          </div>
          <div className=" mx-auto px-4 ">
            <table className="table font mx-auto table-compact  w-full m-8 text-center">
              <thead className="">
                <tr className="bg-[#ACE9D7]">
                  <th className="font-medium py-1">Subject</th>
                  <th className="font-medium">Mark</th>
                  <th className="font-medium">Grade</th>
                </tr>
              </thead>
              <tbody className=" [&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-[#ACE9D7]">
                {studentInformation?.result[0].midTerm.map((res, i) => (
                  <tr key={i}>
                    <td className="py-1">{res?.subjectName}</td>
                    <td>{res?.number}</td>
                    {res?.number >= 80 ? (
                      <td>A+</td>
                    ) : res?.number >= 70 ? (
                      <td>A</td>
                    ) : res?.number >= 60 ? (
                      <td>A</td>
                    ) : res?.number >= 50 ? (
                      <td>B</td>
                    ) : res?.number >= 40 ? (
                      <td>C</td>
                    ) : res?.number >= 33 ? (
                      <td>D</td>
                    ) : (
                      "F"
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end px-4 mt-4">
            <div className="flex md:w-3/4 gap-4 justify-end">
              <button
                type="submit"
                className=" bg-[#ACE9D7] text-black hover:bg-[#03A373]  w-1/3 btn btn-primary py- rounded-xl "
              >
                Download Result
              </button>
              <button
                type="submit"
                className=" bg-[#E9ACAC] text-black hover:bg-[#a11313]  w-1/3 btn btn-primary rounded-xl h-[35px]"
              >
                Apply For Recheck
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultPage;

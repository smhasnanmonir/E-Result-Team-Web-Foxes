import { Link } from "react-router-dom";
import useRecheck from "../../components/DataFetch/useRecheck";

const ReviewResults = () => {
  const [allRecheck] = useRecheck();
  console.log(allRecheck);
  return (
    <div>
      <h1 className="py-[25px] text-center font-semibold">
        These Students have applied for rechecking.
      </h1>
      <div className="grid place-items-center lg:grid-cols-2 grid-cols-1">
        {allRecheck.map((reCheck) => (
          <div
            className="p-5 bg-fuchsia-200 w-96 h-full text-center rounded-md"
            key={reCheck._id}
          >
            <h1>
              <h1>
                Student Id:{" "}
                <span className="font-semibold">{reCheck.classId}</span>
              </h1>
              <h1>
                Rechecked Status :{" "}
                <span className="font-semibold">{reCheck.rechecked}</span>
              </h1>
            </h1>
            <Link
              className="px-[35px] block py-[9px] mt-[13px] bg-red-300"
              to="/addResult"
            >
              Edit Result
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewResults;

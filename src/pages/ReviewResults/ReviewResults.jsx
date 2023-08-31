import { Link } from "react-router-dom";
import useRecheck from "../../components/DataFetch/useRecheck";
import Swal from "sweetalert2";
import useAxiosSecure from "../../components/DataFetch/useAxiosSecure";

const ReviewResults = () => {
  const [axiosSecure] = useAxiosSecure();
  const [reCheck, refetch] = useRecheck();
  console.log(reCheck);
  const handleFeedback = async (id) => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Write feedback",
      inputPlaceholder: "Type your feedback here...",
      inputAttributes: {
        "aria-label": "Type your feedback here",
      },
      showCancelButton: true,
    });

    if (text) {
      let dataBody = {
        feedback: text,
      };
      fetch(`http://localhost:5100/reCheckDelete/${id}`, {
        method: "PATCH",
        body: JSON.stringify(dataBody),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(data?.insertedId);
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Feedback has been sent",
              icon: "success",
              showConfirmButton: true,
              timer: 1500,
            });
          }
        });
    }
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/reCheckDelete/${id}`).then((data) => {
          console.log(data);
          if (data.data.deletedCount) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire("Error");
          }
        });
      }
    });
  };
  return (
    <div>
      <h1 className="py-[25px] text-center font-semibold">
        These Students have applied for rechecking.
      </h1>
      <div className="grid place-items-center lg:grid-cols-2 grid-cols-1 max-w-4xl mx-auto gap-[20px]">
        {reCheck.map((reCheck) => (
          <div
            className="p-5 bg-fuchsia-200 w-[450px] h-full text-center rounded-md"
            key={reCheck._id}
          >
            <h1 className="text-left">
              <h1>
                Student Id:{"  "}
                <span className="font-semibold">{reCheck.classId}</span>
              </h1>
              <h1>
                Email : <span className="font-semibold">{reCheck.email}</span>
              </h1>
              <h1 className="my-2">
                Reason : <span className="font-medium">{reCheck.message}</span>
              </h1>
              <h1>
                Rechecked Status :{" "}
                <span className="font-semibold">{reCheck.rechecked}</span>
              </h1>
            </h1>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-1 items-center justify-center">
              <Link
                className="px-[25px] block py-[9px] mt-[13px] bg-green-300"
                to="/addResult"
              >
                Edit
              </Link>
              <button
                onClick={() => handleFeedback(reCheck?._id)}
                className="px-[25px] block py-[9px] mt-[13px] bg-orange-300"
              >
                Feedback
              </button>
              <button
                onClick={() => handleDelete(reCheck?._id)}
                className="px-[25px] block py-[9px] mt-[13px] bg-red-300 col-span-2"
              >
                Delete Request
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewResults;

import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import DataFetch from "../../components/DataFetch/DataFetch";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useContext, useRef } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../components/Account/Provider/AuthProvider";
import download from './pdf-file.png'
import recheck from './search (1).png'
import login from './login.png'

const ResultPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const allData = DataFetch(); //from DataFetch.js in DataFetch files
  console.log(allData);
  const { idNumber } = useParams();
  console.log(idNumber);
  const studentInformation = allData[0].find(
    (user) => user.classId == idNumber
  );
  console.log(studentInformation);
  const finalTermValue = studentInformation?.finalTerm;
  const finalTermArray = [];
  if (finalTermValue) {
    for (let key in finalTermValue) {
      finalTermArray.push({ key, value: finalTermValue[key] });
    }
  }
  console.log(finalTermArray);

  const pdfRef = useRef();
  const downloadPdf = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 0.95);
      const pdf = new jsPDF("in", "mm", "A0", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("result.pdf");
    });
  };

  //check if the student has already applied for recheck or not.

  // const reCheckFuntion = () => {
  //   let dataBody = {
  //     classId: idNumber,
  //     rechecked: "No",
  //     email : user.email,

  //   };
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "Do you want to recheck?",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes send my application!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch("https://e-result-server.vercel.app/reCheck", {
  //         method: "POST",
  //         body: JSON.stringify(dataBody),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //           if (data.insertedId) {
  //             Swal.fire("Your application has been granted.");
  //           }
  //         });
  //     }
  //   });
  // };

  const reCheckFuntion = async () => {
    const { value: text } = await Swal.fire({
      title: "Type Subject Name & Reason",
      icon: "warning",
      input: "textarea",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
    });

    if (text) {
      let dataBody = {
        classId: idNumber,
        rechecked: "No",
        email: user.email,
        message: text,
      };
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to recheck?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes send my application!",
      }).then((result) => {
        if (result.isConfirmed) {
          // console.log(dataBody);
          fetch("https://e-result-server.vercel.app/reCheck", {
            method: "POST",
            body: JSON.stringify(dataBody),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                Swal.fire({
                  title: "Applied Successfully",
                  icon: "success",
                });
              }
            });
        }
      });
    }
  };

  const recheckforLogin = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to recheck?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Login Now!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
  };

  return (
    <div className="py-5">
      <div className="lg:px-[250px] px-[35px]" ref={pdfRef}>
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
                {finalTermArray?.map((subject, index) => (
                  <tr key={index}>
                    <td className="py-1">{subject?.key}</td>
                    <td>{subject?.value}</td>
                    {subject?.value >= 80 ? (
                      <td>A+</td>
                    ) : subject?.value >= 70 ? (
                      <td>A</td>
                    ) : subject?.value >= 60 ? (
                      <td>A</td>
                    ) : subject?.value >= 50 ? (
                      <td>B</td>
                    ) : subject?.value >= 40 ? (
                      <td>C</td>
                    ) : subject?.value >= 33 ? (
                      <td>D</td>
                    ) : (
                      "F"
                    )}
                  </tr>
                ))}
              </thead>
              <tbody className=" [&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-[#ACE9D7]"></tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center lg:px-[250px] md:px-[150px] mt-4">
        <div className="flex md:flex-row items-center justify-center flex-col md:w-3/4  gap-4">
          <button
            onClick={downloadPdf}
            type="submit"
            className=" bg-[#ACE9D7] text-black hover:bg-[#03A373]  md:w-1/3  rounded-xl flex justify-center items-center gap-2 py-2 px-3"
          >
            <img className="h-[40px]" src={download} alt="" />
            <p className="font-semibold">Download</p>
          </button>
          {user ? (
            <button
              onClick={reCheckFuntion}
              className="bg-[#e00e0e] text-white hover:bg-[#03A373] md:w-1/3 rounded-xl flex justify-center items-center gap-2 py-2 px-3"
            >
              
              <img className="h-[40px]" src={recheck} alt="" />
              <p className="font-semibold"> Recheck</p>
            </button>
          ) : (
            <button
              onClick={recheckforLogin}
              className="bg-[#870404] text-white hover:bg-[#03A373] md:w-1/3 rounded-xl flex justify-center items-center gap-2 py-2 px-3"
            >
               <img className="h-[40px]" src={login} alt="" />
                <p className="font-semibold"> Login to Recheck</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultPage;

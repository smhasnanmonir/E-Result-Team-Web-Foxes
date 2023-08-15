
const ResultPage = () => {
    return (
        <>

            <div>
                <div className="container bg-[#E4E4E4] mx-auto w-1/2 rounded-xl pb-4 ">
                    <div className="text-center mb-8 rounded-t-xl bg-[#ACE9D7] ">
                        <h1 className="text-md font-medium py-4">Result Table</h1>
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
                            <tbody className="w-1/2 [&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-[#ACE9D7]">
                                <tr >
                                    <td className="py-1">Bangla</td>
                                    <td>90</td>
                                    <td>A+</td>

                                </tr>
                                <tr >
                                    <td className="py-1">Bangla</td>
                                    <td>90</td>
                                    <td>A+</td>

                                </tr>
                                <tr >
                                    <td className="py-1">Bangla</td>
                                    <td>90</td>
                                    <td>A+</td>

                                </tr>
                                <tr >
                                    <td className="py-1">Bangla</td>
                                    <td>90</td>
                                    <td>A+</td>

                                </tr>
                                <tr >
                                    <td className="py-1">Bangla</td>
                                    <td>90</td>
                                    <td>A+</td>

                                </tr>
                                <tr >
                                    <td className="py-1">Bangla</td>
                                    <td>90</td>
                                    <td>A+</td>

                                </tr>
                                <tr >
                                    <td className="py-1">Bangla</td>
                                    <td>90</td>
                                    <td>A+</td>

                                </tr>
                                <tr >
                                    <td className="py-1">Bangla</td>
                                    <td>90</td>
                                    <td>A+</td>

                                </tr>
                            </tbody>

                        </table>
                    </div>

                    <div className="flex justify-end px-4 mt-4">
                        <div className="flex w-3/4 gap-4 justify-end">

                            <button type="submit" className=" bg-[#ACE9D7] hover:bg-[#03A373]  w-1/3 btn btn-primary py- rounded-xl ">Download Result</button>
                            <button type="submit" className=" bg-[#E9ACAC] hover:bg-[#a11313]  w-1/3 btn btn-primary rounded-xl h-[35px]">Apply For Recheck</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResultPage;
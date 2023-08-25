import logo from "../../assets/HomepageImg/management.jpg";

const Management = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <div
        style={{ backgroundImage: `url(${logo})` }}
        className="bg-no-repeat opacity-100  bg-cover w-full h-[700px]  relative"
      >
        <div
          className="w-full h-full flex justify-center items-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="text-[35px] text-white">
            <h1>An Advance Result </h1>
            <h1 className="text-center">Management</h1>
            <h1>System For Everyone</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;

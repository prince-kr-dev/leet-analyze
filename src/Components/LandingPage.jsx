import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <>
      <div className="h-screen w-full bg-gradient-to-b from-[#053223] to-black flex items-center justify-center p-5">
        <div className="bg-[#18181B] p-5 rounded-xl w-80 lg:w-120 flex flex-col items-center gap-3">
          <h1 className="text-white text-xl">Welcome to</h1>
          <h1 className="text-white text-center lg:w-80">
            <span className="text-purple-700 text-4xl font-bold">
              {" "}
              Leet<span className="text-white">Analyze</span>
            </span>
          </h1>
          <p className="text-sm text-center text-gray-400">
            A platform to check LeetCode stats, track progress, and compare your
            performance with others.
          </p>

          <Link
            to={"/analysis"}
            className="bg-[#053223] hover:bg-green-900 transition-all px-6 p-2 text-2xl text-white font-semibold rounded-lg"
          >
            Analyze
          </Link>
          <Link
            to={"/comparison"}
            className="bg-purple-600  hover:bg-purple-800 transition-all px-4 p-2 text-2xl text-white font-semibold rounded-lg"
          >
            Compare
          </Link>
        </div>

        {/* <Analysis/> */}
      </div>
    </>
  );
}

export default LandingPage;

import Heading from "./Heading";
import LineChartForBoth from "./LineChartForBoth";
import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";

function ComparisonPage() {
  let url = `https://leetcode-stats-api.herokuapp.com/`;

  let [user1, setUser1] = useState("");
  let [user2, setUser2] = useState("");
  let [allData1, setAllData1] = useState({});
  let [allData2, setAllData2] = useState({});

  let handleChange1 = (e) => {
    setUser1(e.target.value);
    // console.log(e.target.value);
  };
  let handleChange2 = (e) => {
    setUser2(e.target.value);
    // console.log(e.target.value);
  };

  async function getDetails1() {
    try {
      let response = await axios.get(url + user1);
      // console.log(response.data);
      setAllData1(response.data);
    } catch (e) {
      console.log("Error : Data Not Found", e);
    }
  }
  async function getDetails2() {
    try {
      let response = await axios.get(url + user2);
      // console.log(response.data);
      setAllData2(response.data);
    } catch (e) {
      console.log("Error : Data Not Found", e);
    }
  }

  let handleClick = () => {
    getDetails1();
    getDetails2();
    if(allData1.status == "error" || allData1.status == "error"){
      alert("User not exists");
    }
  };

  return (
    <>
      <Heading />
      <div className="bg-black w-full text-white">
        <div className="flex flex-col items-center gap-3 p-5 lg:px-50">
          <input
            value={user1}
            onChange={handleChange1}
            type="text"
            required
            placeholder="Enter first username..."
            className="border border-purple-600 w-full lg:w-115 lg:text-lg outline-0 text-xs lg:sm rounded-sm lg:px-1 p-1"
          />
          <input
            value={user2}
            onChange={handleChange2}
            type="text"
            required
            placeholder="Enter second username..."
            className="border border-purple-600 w-full lg:w-115  lg:text-lg outline-0 text-xs lg:sm rounded-sm lg:px-1 p-1"
          />
          <div className="flex items-center justify-center mb-5">
            <button
              onClick={handleClick}
              className="bg-purple-700 px-10 py-1 rounded-md text-xl hover:cursor-pointer hover:bg-purple-900 transition-all"
            >
              Compare
            </button>
          </div>
        </div>

        <div className="flex px-5 pb-5 lg:px-50 gap-1">
          <div className="bg-[#18181B]  w-1/2 p-2 lg:px-20 rounded-lg flex flex-col gap-3 lg:gap-4">
            <h1 className="text-sm font-light text-center">
              {user1 || ">>> User 1"}
            </h1>
            <div className="bg-purple-300 text-black flex flex-col items-center rounded-md">
              <h1>Total Solved</h1>
              <h2 className="text-2xl lg:text-5xl font-semibold">
                {allData1.totalSolved || "00"}
              </h2>
            </div>
            <div className="bg-green-300 text-black flex flex-col items-center rounded-md">
              <h1>Easy Solved</h1>
              <h2 className="text-2xl lg:text-4xl">
                {allData1.easySolved || "00"}
              </h2>
            </div>
            <div className="bg-amber-200 text-black flex flex-col items-center rounded-md">
              <h1>Medium Solved</h1>
              <h2 className="text-2xl lg:text-4xl">
                {allData1.mediumSolved || "00"}
              </h2>
            </div>
            <div className="bg-red-300 text-black flex flex-col items-center rounded-md">
              <h1>Hard Solved</h1>
              <h2 className="text-2xl lg:text-4xl">
                {allData1.hardSolved || "00"}
              </h2>
            </div>
            <div className="bg-black text-white flex flex-col items-center rounded-md">
              <h1>Ranking</h1>
              <h2 className="text-2xl lg:text-4xl">
                {allData1.ranking || "0"}
              </h2>
            </div>
            <div className="bg-black text-white flex flex-col items-center rounded-md">
              <h1>Acceptance</h1>
              <h2 className="text-2xl lg:text-4xl">
                {allData1.acceptanceRate || "0"}%
              </h2>
            </div>
            <div className="bg-black text-yellow-600 flex flex-col items-center rounded-md">
              <h1>Points</h1>
              <h2 className="text-2xl lg:text-4xl">
                {allData1.contributionPoints || "0"}
              </h2>
            </div>
          </div>

          <div className="bg-[#18181B] w-1/2 p-2 lg:px-20 flex flex-col gap-3 lg:gap-4 rounded-lg">
            <h1 className="text-sm font-light text-center">
              {user2 || ">>> User 2"}
            </h1>
            <div className="bg-purple-300 text-black flex flex-col items-center rounded-md">
              <h1>Total Solved</h1>
              <h2 className="text-2xl lg:text-5xl font-semibold">
                {allData2.totalSolved || "00"}
              </h2>
            </div>
            <div className="bg-green-300 text-black flex flex-col items-center rounded-md">
              <h1>Easy Solved</h1>
              <h2 className="text-2xl lg:text-4xl">
                {allData2.easySolved || "00"}
              </h2>
            </div>
            <div className="bg-amber-200 text-black flex flex-col items-center rounded-md">
              <h1>Medium Solved</h1>
              <h2 className="text-2xl lg:text-4xl">
                {allData2.mediumSolved || "00"}
              </h2>
            </div>
            <div className="bg-red-300 text-black flex flex-col items-center rounded-md">
              <h1>Hard Solved</h1>
              <h2 className="text-2xl lg:text-4xl">
                {allData2.hardSolved || "00"}
              </h2>
            </div>
            <div className="bg-black text-white flex flex-col items-center rounded-md">
              <h1>Ranking</h1>
              <h2 className="text-2xl lg:text-4xl">
                {allData2.ranking || "0"}
              </h2>
            </div>
            <div className="bg-black text-white flex flex-col items-center rounded-md">
              <h1>Acceptance</h1>
              <h2 className="text-2xl lg:text-4xl">
                {allData2.acceptanceRate || "0"}%
              </h2>
            </div>
            <div className="bg-black text-yellow-600 flex flex-col items-center rounded-md">
              <h1>Points</h1>
              <h2 className="text-2xl lg:text-4xl">
                {allData2.contributionPoints || "0"}
              </h2>
            </div>
          </div>
        </div>
        <div className="px-5 lg:px-50">
          <LineChartForBoth
            submission1={allData1.submissionCalendar}
            user1={user1}
            submission2={allData2.submissionCalendar}
            user2={user2}
          />
          <h1 className="text-xs text-center py-4 lg:hidden">
            NOTE: For better view of graph, open it on desktop.
          </h1>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ComparisonPage;

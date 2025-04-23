import AcceptanceRateGauge from "./AcceptanceRateGauge";
import CoverageRadar from "./CoverageRadar";
import DoughnutChart from "./DoughnutChart";
import LineChartByMonth from "./LineChartByMonth";
import SubmissionStatsAndChart from "./SubmissionStatsAndChart";

function Dashboard({ data, searchTerm }) {
  // console.log(data.acceptanceRate);

  let totalSolvedQues = data.totalSolved;
  let totalQues = data.totalQuestions;
  let easySolvedQues = data.easySolved;
  let totalEasyQues = data.totalEasy;
  let medSolvedQues = data.mediumSolved;
  let totalMedQues = data.totalMedium;
  let hardSolvedQues = data.hardSolved;
  let totalHardQues = data.totalHard;
  let rank = data.ranking;
  let acceptance = data.acceptanceRate;
  let submission = data.submissionCalendar;

  return (
    <>
      <div className="bg-black p-5 px-50 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-white font-medium">Dashboard</h1>
          <h1 className="text-sm text-white">
            Showing result for :{" "}
            <span className="px-3 py-0.5 text-lg text-blue-500">
              {searchTerm ? searchTerm : "_____________"}
            </span>
          </h1>
        </div>

        <div className="mt-5">
          <div className="bg-[#18181B] p-5 rounded-xl flex items-center justify-between">
            <div className="bg-purple-400 w-fit p-6 px-18 rounded-xl">
              <p className="text-lg text-gray-800 font-semibold">Total</p>
              <h1 className="text-2xl font-medium">
                <span className="text-6xl font-semibold">
                  {totalSolvedQues ? totalSolvedQues : "00"}
                </span>
                /{totalQues ? totalQues : "0000"}
              </h1>
            </div>
            <div className="bg-green-300 w-fit p-9 rounded-xl">
              <p className="text-md text-gray-700 font-semibold">Easy</p>
              <h1 className="text-xl font-medium">
                <span className="text-4xl font-semibold">
                  {easySolvedQues ? easySolvedQues : "00"}
                </span>
                /{totalEasyQues ? totalEasyQues : "000"}
              </h1>
            </div>
            <div className="bg-amber-200 w-fit p-9 rounded-xl">
              <p className="text-md text-gray-700 font-semibold">Medium</p>
              <h1 className="text-xl font-medium">
                <span className="text-4xl font-semibold">
                  {medSolvedQues ? medSolvedQues : "00"}
                </span>
                /{totalMedQues ? totalMedQues : "0000"}
              </h1>
            </div>
            <div className="bg-red-300 w-fit p-9 rounded-xl">
              <p className="text-md text-gray-700 font-semibold">Hard</p>
              <h1 className="text-xl font-medium">
                <span className="text-4xl font-semibold">
                  {hardSolvedQues ? hardSolvedQues : "00"}
                </span>
                /{totalHardQues ? totalHardQues : "000"}
              </h1>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-80 h-80 bg-[#18181B] rounded-xl p-4">
            <DoughnutChart
              easySolvedQues={easySolvedQues}
              medSolvedQues={medSolvedQues}
              hardSolvedQues={hardSolvedQues}
            />
          </div>

          <div className="w-80 h-80 bg-[#18181B] rounded-xl p-4 pt-7">
            <CoverageRadar
              easySolvedQues={easySolvedQues}
              medSolvedQues={medSolvedQues}
              hardSolvedQues={hardSolvedQues}
              totalEasyQues={totalEasyQues}
              totalMedQues={totalMedQues}
              totalHardQues={totalHardQues}
            />
          </div>

          <div className="w-50 h-80 flex flex-col gap-2">
            <div className="bg-[#18181B] p-4 rounded-xl">
              <p className="text-sm text-gray-700 font-semibold">Ranking</p>
              <h1 className="text-4xl text-white font-medium">{rank || "0000"}</h1>
            </div>
            <div className="flex items-center flex-col bg-[#18181B] rounded-xl pt-7">
              <h1 className="text-xl font-semibold text-white">
                Acceptance Rate
              </h1>
              <AcceptanceRateGauge acceptance={acceptance}/>
            </div>
          </div>
        </div>

        <div className="bg-[#18181B] p-4 rounded-xl">
        <h1 className="text-2xl font-medium text-white text-center">Monthly Submission Activity</h1>
          <SubmissionStatsAndChart submission={submission}/>
        </div>
        <div className="bg-[#18181B] p-4 rounded-xl">
          <h1 className="text-2xl font-medium text-white text-center">Daily Submission Activity</h1>
          <LineChartByMonth submissionCalendar={submission}/>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

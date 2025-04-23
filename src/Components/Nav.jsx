import { useState } from "react";

function Nav({ onSearch, getDetails, data }) {
  let [username, setUsername] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.value);
    setUsername(e.target.value);
  };

  const handleClick = () => {
    onSearch(username); // passing username to app
    getDetails(username);
    setUsername("");
  };

  return (
    <>
      <div className="p-2 px-50 flex items-center justify-between bg-[#18181B]">
        <div>
          <h1 className="text-4xl font-semibold text-white">
            <span className="text-purple-600 ">Leet</span>Analyze
          </h1>
          <p className="text-xs font-medium text-white">
            Analyze your leetcode account
          </p>
        </div>

        <div className="flex items-center justify-between gap-1">
          <input
            type="text"
            value={username}
            onChange={handleChange}
            placeholder="Enter username..."
            className="border border-purple-600 rounded-md py-1 px-4 outline-0 w-80 text-white"
          />
          <button
            onClick={handleClick}
            className="bg-purple-600 rounded-md text-white px-4 text-2xl  hover:cursor-pointer hover:bg-purple-700 transition-all"
          >
            <i className="ri-user-search-line"></i>
          </button>
        </div>

        <h1 className="text-xl font-semibold text-white">
          Your Points{" "}
          <span className="bg-yellow-500 text-black px-3 rounded-md">
            {data.contributionPoints ? data.contributionPoints : "00"}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Nav;

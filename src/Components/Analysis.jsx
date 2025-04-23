import { useState } from "react";
import axios from 'axios';
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import MobileMsg from "./MobileMsg";

function Analysis() {
  let url = `https://leetcode-stats-api.herokuapp.com/`;

  const [searchTerm, setSearchTerm] = useState('');

  const [apiData, setApiData] = useState({});

  const handleSearch = (inputVal) => {
    // console.log('Data from Nav:', inputVal); // Do whatever you want with the input
    setSearchTerm(inputVal);
  };


  async function getDetails(username){
      try{
          let response = await axios.get(url+username);
          // console.log(response.data)
          setApiData(response.data);
      } catch(e){
          console.log("Error : Data Not Found", e);
      }
  }


  return (
    <>
      <div className="bg-black hidden lg:block"> 
        <Nav onSearch={handleSearch} getDetails={getDetails} data={apiData}/>
        <Dashboard data={apiData} searchTerm={searchTerm}/>
        <Footer/>
      </div>
      <div className="lg:hidden">
        <MobileMsg/>
      </div>
    </>
  )
}

export default Analysis;

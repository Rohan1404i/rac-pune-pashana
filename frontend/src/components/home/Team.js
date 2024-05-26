import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Team.css";
import TeamDetail from "./TeamDetail";
import axios from "axios";
import President from '../../assets/president.png';

function Team() {


 const[Leader,setLeader]= useState([]);

const navigate =useNavigate();

  useEffect(()=>{
       axios.get('http://localhost:8000/user/getMember',{params:{isLeader:true},headers:{"x-api-key":1234567890123456}})
       .then(resp => {
          setLeader(resp.data);
          console.log("resp data: ",resp.data);
       })
       .catch(err => console.log(err.message))

      },[]);


  return (
    <div>
      {/* <div className="team" id="team"> */}
        {/* <ImageKit path="tattoo49.jpg" /> */}
          <img src={President} alt="Team President" width="250px" height="400px" style={{overflow:"hidden", borderRadius: "25px"}} />
          {/* <h2>Rtr. Pooja Patil</h2> */}
      {/* </div> */}
      <div className="btn-teams">
        <button
          onClick={() => {
            navigate('team/all')
          }}
        >
          View Whole Team
        </button>
      </div>
    </div>
  );
}

export default Team;

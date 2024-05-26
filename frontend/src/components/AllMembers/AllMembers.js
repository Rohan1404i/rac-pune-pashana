import React, { useEffect, useState } from 'react';
import './AllMembers.css';
import TeamDetail from '../home/TeamDetail';
import president from '../../assets/president.png'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';

function AllMembers() {
    
 const[nonLeader,setNonLeader]= useState([]);


 const[Leader,setLeader]= useState([]);

 const [teamsDetail, setTeamsDetail] = useState([
  {fullname : 'Rtr. Pooja', image : president},
  {fullname : 'Rtr. Kartik', image : ''},
  {fullname : 'Rtr. Pushpal', image : ''},
  {fullname : 'Rtr. Rakesh', image : ''},
  {fullname : 'Rtr. Sunny', image : ''}
 ])

const navigate =useNavigate();


  useEffect(()=>{
    async function getLeader() {
       const res =await axios.get('http://localhost:8000/user/getMember',{params:{isLeader:true},headers:{"x-api-key":1234567890123456}});
       setLeader(res.data)    
     }
   
     getLeader();
     },[]);


 useEffect(()=>{
    async function getNonLeader() {
       const res =await axios.get('http://localhost:8000/user/getMember',{params:{isLeader:false},headers:{"x-api-key":1234567890123456}});
       setNonLeader(res.data)    
     }
   
     getNonLeader();
     },[]);
  return (
    <div className="team" style={{width:"100%", height:"auto"}} id="team">
      <Header />

    <p className="contTitle">Our Team</p>
    <p className="contTitle">Our community Core</p>
    <div className='leadersCont'>        
      {/* {Leader?.map((teamsDetail) => (
            <TeamDetail teamsDetail={teamsDetail} key={teamsDetail._key} />
      ))} */}
      <TeamDetail teamsDetail={teamsDetail[0]}  />
      <TeamDetail teamsDetail={teamsDetail[1]} />
      <TeamDetail teamsDetail={teamsDetail[2]}  />
    </div>
    <div className='flex-col' style={{width:"100%", height:"auto"}}>
      <p className="contTitle">Team Leaders of Our CLub</p>
          <div className='teamCont'>
            {teamsDetail?.map((teamsDetail) => (
            
              <TeamDetail teamsDetail={teamsDetail} key={teamsDetail._key} />
            ))}
          </div>
    </div>
    </div>
  )
}

export default AllMembers
import React, {useState} from 'react'
import { Link } from "react-router-dom";
import President from "../../assets/president.png"
import logo from '../../assets/logo.png'
// import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
// import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import teamDefault from '../../assets/teamDefault.png';

function TeamDetail({teamsDetail}) {
    const { fullname, image, instaSrc, fbSrc } = teamsDetail;
  return (
    <div style={{margin:"0", width:"250px", height:"auto"}}>
        <div className="team-main">
        <div className="team-container">
            <div className="card">
            <div className="content" style={{width: '200px', height:'auto', borderRadius:'15px',display:'flex',flexDirection:'column', justifyContent:'flex-start', alignContent:'center'
    }}>
                <img src={teamsDetail.image ? teamsDetail.image : logo} alt="Team" width="200px" height="250px"
                    style={{borderRadius:'15px'}} />
                <h2 style={{margin:'0', color:'#ffffff'}}>{fullname}</h2>
                {/* <a
                className="facebook"
                href={fbSrc}
                target="_blank"
                rel="noreferrer"
                >
                <FaFacebook size={30} />
                </a>
                <a
                className="instagram"
                href={instaSrc}
                target="_blank"
                rel="noreferrer"
                >
                <FaInstagram size={30} />
                </a> */}
            </div>
            {/* <Link to={`/team/${name}`}>
                <div className="team">
                <button>View member</button>
                </div>
            </Link> */}
            </div>
        </div>
        </div>
    </div>
  )
}

export default TeamDetail
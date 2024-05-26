import {useState} from 'react';
import './EventsComponent.css';
import image1 from '../../assets/president.png'
import image2 from '../../assets/president.png'
import image3 from '../../assets/president.png'
import image4 from '../../assets/president.png'
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

export default function EventsComponent () {

    const [selected, setSelected] = useState('1');


    return (
        <div className='eventsWholeCont' >
            <h3 className='eventsTitle'>Creating a better community</h3>
            <hr />
            <div className='eventsCont'>
                <NavLink exact to="/events/CMD"
                    className={`${selected === '1' ? 'eachEventContSelected' : 'eachEventCont'}`} id='1'
                    style={{backgroundImage:`url(${logo})`}}
                    onMouseEnter={e=>setSelected('1')}
                >
                    <p className='eachEventTitle' styles={{color:"#ffffff"}}>CMD</p>
                    {/* <p className='eachEventDate' >20-20-2023</p> */}
                </NavLink>
                <NavLink exact to="/events/PDD"
                     className={`${selected === '2' ? 'eachEventContSelected' : 'eachEventCont'}`} id='2'
                    style={{backgroundImage:`url(${logo})`}}
                    onMouseEnter={e=>setSelected('2')}
                >
                    <p className='eachEventTitle' styles={{color:"#ffffff"}}>PDD</p>
                    {/* <p className='eachEventDate' >20-20-2023</p> */}
                </NavLink>
                <NavLink exact to="/events/CSD"
                     className={`${selected === '3' ? 'eachEventContSelected' : 'eachEventCont'}`} id='3'
                    style={{backgroundImage:`url(${logo})`}}
                    onMouseEnter={e=>setSelected('3')}
                >
                    <p className='eachEventTitle' styles={{color:"#ffffff"}}>CDS</p>
                    {/* <p className='eachEventDate' >20-20-2023</p> */}
                </NavLink>
                <NavLink exact to="/events/ISD"
                     className={`${selected === '4' ? 'eachEventContSelected' : 'eachEventCont'}`} id='4'
                    style={{backgroundImage:`url(${logo})`}}
                    onMouseEnter={e=>setSelected('4')}
                >
                    <p className='eachEventTitle' styles={{color:"#ffffff"}}>ISD</p>
                    {/* <p className='eachEventDate' >20-20-2023</p> */}
                </NavLink>
            </div>
        </div>
    )
}
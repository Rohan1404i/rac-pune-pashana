import { useState, useEffect } from 'react';
import './EventsAvenueComponent.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import logo from '../../assets/logo.png'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function EventsAvenueComponent () {

    const {avenueId} = useParams();

    const [events, setEvents] = useState([]);
    const [avenueDetails, setAvenueDetails] = useState();
    const [selected, setSelected] = useState();

    console.log(events, avenueDetails);

    useEffect(() => {
        
        axios.post('http://localhost:8000/events/getEvent',{avenueId},{headers:{"x-api-key":1234567890123456}})
        .then(resp => {
            setEvents(resp.data.events);
            setAvenueDetails(resp.data.avenue[0]);
        })
        .catch(err => {
            console.log(err);
        })
    },[avenueId])


    return (
        <div className='eventsAvenueWholeCont'>
            <Header />
            <div className='blogsAvenueCont' style={{margin: '6vh 0'}}>
                <NavLink exact to='/events/CMD' className={avenueId === 'CMD' ? 'eachAvenueOnClick' : 'eachAvenue'}
                    style={{color:"#ffffff", textDecoration:"none"}}
                    >CMD</NavLink>
                <NavLink exact to='/events/PDD' className={avenueId === 'PDD' ? 'eachAvenueOnClick' : 'eachAvenue'}
                    style={{color:"#ffffff", textDecoration:"none"}}
                    >PDD</NavLink>
                <NavLink exact to='/events/CSD' className={avenueId === 'CSD' ? 'eachAvenueOnClick' : 'eachAvenue'}
                    style={{color:"#ffffff", textDecoration:"none"}}
                    >CSD</NavLink>
                <NavLink exact to='/events/ISD' className={avenueId === 'ISD' ? 'eachAvenueOnClick' : 'eachAvenue'}
                    style={{color:"#ffffff", textDecoration:"none"}}
                    >ISD</NavLink>
            </div>
            <div className='eventsAvenueTopCont'>
                <img src={avenueDetails?.mainImage ? avenueDetails?.mainImage : logo} className='eventAvenueImg'/>
                <div className='eventAvenueTopRightCont'>
                    <p className='eventAvenueName'>Avenue: {avenueDetails?.avenueName}</p>
                    <p className='eventAvenueDirector'>Director: {avenueDetails?.director}</p>
                    <p className='eventAvenueDesc'>Description: <p className='eventAvenueDescContent'>{avenueDetails?.fullDesc}</p></p>
                </div>
            </div>
            <div className='eventsAvenueEventCont'>
            {
                // events?.filter(eachBlog => eachBlog.avenue === showBlog)
                events?.map ((eachEvent) => {
                    return (
                        <NavLink exact to={'/events/avenueId/'+eachEvent._id} key={eachEvent}
                            className={`${selected === eachEvent._id ? 'eachEventContSelected' : 'eachEventCont'}`} id={eachEvent._id}
                            onMouseEnter={e=>setSelected(eachEvent._id)}
                            style={{textDecoration:"none", color:"#ffffff"}}
                        >
                            <img className='eachEventImg' src={eachEvent.image ? eachEvent.image : logo } />
                            <div className='eachEventBottomCont' >
                                <h1 className='eachEventBottomContTitle'>{eachEvent.title}</h1>
                                <p className='eachEventBottomContDesc'>{eachEvent.desc}</p>
                            </div>
                        </NavLink>
                    )
                })
            }
            </div>
            <Footer />
        </div>
    )
}
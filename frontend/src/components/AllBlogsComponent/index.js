import {useLayoutEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './AllBlogsComponent.css';
import axios from 'axios';
import logo from '../../assets/logo.png'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { NavLink } from "react-router-dom";

export default function AllBlogsComponent () {

    const [blogs, setBlogs] = useState([{"title" : "",
                                    "desc" : "",
                                    "mainImg" : "",
                                    "fullDesc" : "",
                                    "avenue" : ""
                                }]);
    const [showBlog, setShowBlog] = useState('CMD');

    useLayoutEffect(() => {
        
        axios.get('http://localhost:8000/blogs/getBlogs',{headers:{"x-api-key":1234567890123456}})
        .then(resp => {
            setBlogs(resp.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[])

    console.log("blog :",blogs);

    return (
        <div className='allBlogWholeCont'>
            <Header />
            <p className='allBlogsContTitle'>Blogs</p>
            <div className='blogsAvenueCont'>
                <p className={showBlog === 'CMD' ? 'eachAvenueOnClick' : 'eachAvenue'}
                    onClick={e => setShowBlog('CMD')}>CMD</p>
                <p className={showBlog === 'PDD' ? 'eachAvenueOnClick' : 'eachAvenue'}
                    onClick={e => setShowBlog('PDD')}>PDD</p>
                <p className={showBlog === 'CSD' ? 'eachAvenueOnClick' : 'eachAvenue'}
                    onClick={e => setShowBlog('CSD')}>CSD</p>
                <p className={showBlog === 'ISD' ? 'eachAvenueOnClick' : 'eachAvenue'}
                    onClick={e => setShowBlog('ISD')}>ISD</p>
            </div>
            <div className='blogCont'>
            {
                blogs?.filter(eachBlog => eachBlog.avenue === showBlog)
                ?.map ((eachBlog) => {
                    return (
                        <NavLink exact to={'/blogs/'+eachBlog._id} key={eachBlog} className='eachBlogCont'>
                            <img className='eachBlogImg' src={eachBlog.mainImg ? eachBlog.mainImg : logo } />
                            <div className='eachBlogBottomCont' >
                                <h1 className='eachBlogBottomContTitle'>{eachBlog.title}</h1>
                                <p className='eachBlogBottomContDesc'>{eachBlog.desc}</p>
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
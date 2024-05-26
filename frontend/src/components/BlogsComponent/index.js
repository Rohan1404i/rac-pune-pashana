import {useLayoutEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './blogsComponent.css';
import axios from 'axios';
import logo from '../../assets/logo.png'
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function BlogsComponent () {

    const {blogId} = useParams();

    const [blog, setBlog] = useState({"title" : "",
                                    "desc" : "",
                                    "mainImg" : "",
                                    "fullDesc" : "",
                                });

    useLayoutEffect(() => {
        
        axios.post('http://localhost:8000/blogs/getBlog',{blogId},{headers:{"x-api-key":1234567890123456}})
        .then(resp => {
            setBlog(resp.data.blog);
        })
        .catch(err => {
            console.log(err);
        })
    },[])

    return (
        <div className='showBlogWholeCont'>
            <Header />
            <h1 className='showBlogTitle'>{blog.title}</h1>
            <p className='showBlogWrittenBy'> -Rotaract Pune Pashan</p>
            <img src={blog.mainImg ? '' : logo} className={`${'showBlogMainImg'} ${blog.mainImg ? '' : 'showBlogMainImgDefault'}`} />
            <p className='showBlogText'>{blog.fullDesc}</p>
            <div className='bottomSpaceCont'></div>
            <Footer />
        </div>
    )
}
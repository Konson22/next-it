import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import Loader from "../Loader/Loader"
import { Data } from '../Data'
import './Main.css'


export default function Main() {
    const [posts, setPosts ] = useState({
        status:false,
        error:false,
        data:null
    })

    useEffect(()=>{
        setPosts({
            status:false,
            error:false,
            data:null
        })
        fetch('/posts').then(res => res.json()).then(data => setPosts({
            status:true,
            error:false,
            data:data
        })).catch( error => setPosts({
            error:true,
            data:null
        }))
    }, [])

    let container;
    if(posts.data){
        container = posts.data.map((post => 
            <div className="news-wraper">
                <h5><b>{ post.post_title }</b></h5>
                {
                    post.post_img != 0 ? <img className="news-img" src={process.env.PUBLIC_URL + post.post_img} />: null
                }
                <p>{ post.post_body }</p>
            </div>
        ))
    }else if(!posts.status){
        container = <Loader />
    }else if(posts.error){
        container = "something went wrong!"
    }

    
    return (
        <main>
            <div className="main-header"></div>
            <div className="main-body">
                <div className="title-wraper">
                    <h2><b>News and updates</b></h2>
                </div>
                <div>
                    { container }
                </div>
            </div>
        </main>
    )
}

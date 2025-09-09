import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { onPost } from '../api/postsApi';
import Header from '../compontes/header/Header';
import type { Post } from '../compontes/post/post';
import ComponSingl from '../compontes/postById/ComponSingel';


export default function SingelPost() {
    const [id, setId] = useState<any | null>(null);
    const [post, setPost] = useState<Post>()
    const[a,seta] = useState(false);
    // let navigate = useNavigate()
    useEffect(() => {
        seta(true)
    },[post])
    return (
        <div>
            {/* <Header></Header> */}
            <input type="number" onChange={(e) => { setId(e.target.value) }} />
            <button onClick={async () => {
                const post = await onPost(id);
                setPost(post)
            }}>שלח</button>
            if
            <ComponSingl post={post}></ComponSingl>
        </div>

    )
}

import React from 'react'
import type { Post } from '../post/post'
import "./componSingel.css"

export default function ComponSingl({ post }: { post: any }) {
    return (
        <div className='post'>
            <img src={post.img} alt="img" />
            <p>{post.content}</p>
            <section>
                <div> Advertiser name - {post.name}</div>
                <time>Publication time - {post.time}</time>
                <div>{post.like}👍</div>
            </section >
        </div >

    )
}


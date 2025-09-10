import "./SingelPost.css"
import type { Post } from "../post/post"

export default function ShwoPost({ post }: { post: Post }) {
    console.log("555555555555", post.content)
    return (
        <div className="post">
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
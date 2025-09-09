import "./post.css"
// import { useNavigate } from "react-router"

export type Post = {
    id: number,
    img: string,
    content: string
    name: string,
    time: number,
    like: number
}
export default function PostOne({ post }: { post: Post }) {
    return (
        <div className="card" onClick={() => {
        }}>
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
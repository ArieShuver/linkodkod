import "./post.css"

export type Post = {
    id: number,
    img: string,
    content: string
    name: string,
    time: number,
    like: number
}
export default function PostOn({ post }: any) {
    console.log(post.id, post)
    return (
        <div className="card">
            {/* <h1>{post.id}</h1> */}
            <img src={post.img} alt="img" />
            <p>{post.content}</p>
            <section>
                <div> Advertiser name - {post.name}</div>
                <time>Publication time - {post.time}</time>
                <div>{post.like}👍</div>
            </section>
        </div>

    )
}
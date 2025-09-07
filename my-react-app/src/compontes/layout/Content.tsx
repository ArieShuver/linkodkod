// import { connect } from "puppeteer"
import PostOn from "../post"
import "./content.css"
import type { Post } from "../post"

export default function Content() {
    const dataPost: Post[] = [{ id: 1, img: "./img.png", content: "cdscdsccsbfgbgfbgfbfbgfbgfbdbdbgsbgbdgbgbfgbhfghfgbhfgbhfgbfgfhbfgbfglknk;kml;mlkninjikmjikj,ijmoij,imojij,oijimj,ijij,iji,jij,idwedcvfergresgesggregregergergergretgsdcdscefvefrv", name: "arie", time: 2025, like: 0 },
    { id: 2, img: "./logo.png", content: "fsdfdsfdsfvfdsvfd", name: "arie", time: 2025, like: 0 }]
    return (
        <div className="content">
            {dataPost.map((item: Post) => (
                <PostOn id={item.id} post={item}></PostOn>
            ))}
        </div>
    )
}


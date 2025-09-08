import PostOne from "../post";
import "./content.css";
import type { Post } from "../post";
import { useEffect, useRef, useState } from "react";
import { AllPosts } from "../../api/postsApi.ts";
import errors from "../../utils/errors.tsx";

export default function Content() {

    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        (async () => {
            const data = await AllPosts();
            console.log("data useAFFECT", data)
            setPosts(data);
        })();
    }, []);

    // setTimeout(() => {
    //     <h4>....טוען נתונים</h4>
    // }, 3000)
    //בדיק שגיאות בקריאה מהשרת
    const error = errors(posts);
    if (error) return error;
    //אם אין שגיאה הצגת הפוסטים
    return (
        <div className="content">
            {posts.map((item: Post) => (
                <PostOne key={item.id} post={item}></PostOne>
            ))}
        </div>
    )
}



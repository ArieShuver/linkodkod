import PostOne from "../post/post.tsx";
import "./content.css";
import type { Post } from "../post/post.tsx";
import { useEffect, useRef, useState } from "react";
import { AllPosts } from "../../api/postsApi.ts";
import EmptyCheck from "../../utils/EmptyCheck.tsx";
import { Link } from "react-router";
import PostById from "../../pages/PostById.tsx";

export default function Content() {


    const [posts, setPosts] = useState<Post[]>([])
    const [logError, setLogError] = useState<null | any>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const [post, setPost] = useState<Post | null>(null)

    useEffect(() => {
        (async () => {
            try {
                const data = await AllPosts();
                console.log("data useAFFECT", data)
                setPosts(data);
            }
            catch (error) {
                setLogError(error)
            }
            finally {
                setLoading(false)
            }
        })();
    }, []);

    //הדפסת נתונים נטענים
    if (loading) return <h1>....טוען נתונים</h1>

    //  בדיקה שיש נתונים 
    const ifEmpty = EmptyCheck(posts);
    if (ifEmpty) return <h4>{ifEmpty}</h4>

    //בדיקת שגיאות בקריאה
    if (logError) return <h4>{logError}</h4>

    //אם אין שגיאה הצגת הפוסטים
    return (
        <div className="content">
            {posts.map((item: Post) => (
                <>
                    <Link key={item.id} to={`PostById/${item.id}`}>
                        <PostOne post={item} />
                    </Link >
                </>
            ))
            }
        </div >
    )
}



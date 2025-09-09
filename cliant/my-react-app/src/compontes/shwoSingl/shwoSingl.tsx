// import PostOne from "../post/post.tsx";
// import "./content.css";
// import type { Post } from "../post/post.tsx";
// import { useEffect, useRef, useState } from "react";
// import { onPost } from "../../api/postsApi.ts";

// export default function Content() {


//     const [post, setPost] = useState<Post>()
//     const [logError, setLogError] = useState<null | any>(null)
//     const [id, setId] = useState<number>(0);

//     useEffect(() => {
//         (async () => {
//             try {
//                 const data = await onPost({ id });
//                 console.log("data useAFFECT", data)
//                 setPost(data);
//             }
//             catch (error) {
//                 setLogError(error)
//             }
//         })();
//     }, [id]);

//     //בדיקת שגיאות בקיאה
//     if (logError) return <h4>{logError}</h4>

//     //אם אין שגיאה הצגת הפוסטים
//     return (
//         <div className="content">
//             <PostOne post={post}></PostOne>
//         </div>
//     )
// }



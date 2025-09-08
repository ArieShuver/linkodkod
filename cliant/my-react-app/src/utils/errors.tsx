export default function errors(posts: any) {
    if (!posts) {
        return (
            <h1>שגיאה 503 נסה מאוחר יותר</h1>
        )
    }
    {
        posts.length === 0 && <h1>שגיאה404 </h1>
    }
}

//קריאה לשרת לכל הפוסטים
export async function AllPosts() {
    try {
        const response = await fetch("http://localhost:3000/posts/allposts");
        const data = await response.json();
        console.log('data', data);
        return data
    } catch (error) {
        console.log('error all posts', error);
        // return error;
    }
}
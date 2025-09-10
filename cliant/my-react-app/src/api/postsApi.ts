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


export async function onePost(id: number) {
    try {
        const response = await fetch("http://localhost:3000/posts/onpost", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": `Bearer ${global.token}`,
            },
            body: JSON.stringify({ "id": Number(id) }),
        });
        const data = await response.json();
        console.log('data', data);
        return data
    } catch (error) {
        console.log('on post', error);
        // return error;
    }
}

export async function addPost(post: any) {
    try {
        const response = await fetch("http://localhost:3000/posts/addpost", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": `Bearer ${global.token}`,
            },
            body: JSON.stringify( post ),
        });
        const data = await response.json();
        console.log('data', data);
        return data
    } catch (error) {
        console.log('on post', error);
        // return error;
    }

}

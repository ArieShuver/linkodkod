export default function (post) {
    if (post.img) {
        const img = post.img;
        post.img = `http://localhost:3000/${img}.png`;
        return post;
    }
    else {
        console.log("no img");
    }
}
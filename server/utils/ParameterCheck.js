
// בדיקת הפרמטרים
export default function parameterCheck(post) {
    if (post.id && post.img && post.name && post.content) {
        return true
    }
    else {
        return false
    }
}
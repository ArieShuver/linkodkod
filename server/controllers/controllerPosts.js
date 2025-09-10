import { read, readOn, create } from "../dal/crud.js";
import PostImg from "../utils/PostImg.js";


const path = "./db/data.json"
export async function getAll(req, res) {
    try {
        // console.log('get all  controller');
        const allPosts = await read(path);
        console.log(allPosts);

        res.send(allPosts);
    } catch (error) {
        console.error('Error getting all:', error);
        res.status(500).send({ message: "Error getting all posts" });
    }
}

export async function getOn(req, res) {
    console.log(req.body.id);
    const id = req.body.id;
    try {
        const post = await readOn(id, path)
        res.status(200).send(post)
        console.log("post in byId", post);
    }
    catch (error) {
        res.status(404).send(error)
    }
}

export async function addingPost(req, res) {
    try {
        console.log('add controller');
        const data = req.body;
        const post = PostImg(data)
        if (post) {
            await create(path, post)
            res.status(201).send({ message: "added post" });
        }
        else {
            res.status(500).send({ message: "error adding post" })
        }
    } catch (error) {
        console.error('Error adding :', error);
        res.status(500).send({ message: "Error adding post" });
    }
}



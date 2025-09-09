import { read, readOn ,create} from "../dal/crud.js";


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
        console.log("post in byId",post);
    }
    catch (error) {
        res.status(404).send(error)
    }
}

export async function addingPost(req, res) {
    try {
        console.log('add controller');
        const data = req.body;
        await create(path,data);
        res.status(201).send({ message: "added post" });
    } catch (error) {
        console.error('Error adding :', error);
        res.status(500).send({ message: "Error adding post" });
    }
}

// async function updatePost(req, res) {
//     try {
//         const data = req.body;
//         await update(data);
//         res.status(200).send({ message: "updated post" });
//     } catch (error) {
//         console.error('Error updating :', error);
//         res.status(500).send({ message: "updating post" });
//     }
//     res.status(200).send({ message: "updated post" });
// }

// async function deletePost(req, res) {
//     const id = req.body;
//     await deleteOne(id);
//     res.status(200).send({ message: "deleted post" });
// }

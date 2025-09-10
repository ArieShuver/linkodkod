import fs from "fs/promises";
import { use } from "react";

// Reading 
async function read(path) {
    try {
        const read = await fs.readFile(path, "utf-8")
        const readJson = JSON.parse(read)
        if (!Array.isArray(readJson)) {
            return [];
        }
        else {
            // console.log(readJson);
            return readJson;
        }
    }
    catch (error) {
        console.log("error from read", error)
        return [];
    }
}

//Added 
async function create(path, data) {
    let listPosts = await read(path);
    console.log('data', { data });
    listPosts.push(data);
    listPosts = JSON.stringify(listPosts);
    try {
        await fs.writeFile(path, listPosts);
        return "create data";
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

async function readOn(id, path) {
    try {
        const listPost = await read(path)
        const post = listPost.filter(post => post.id === id)
        if (post) {
            return post
        }
        else {
            return "post not found"
        }
    }
    catch (error) {
        return error
    }
}

async function getByName(path, name) {
    console.log(name, "in get by name");
    try {
        const data = await read(path)
        // if (error) {
        //     console.error("Error fetching player by ID:", error.message);
        //     return null;
        // }
        console.log(data);

        const user = data.filter(user => user.name === name)
        return data.length > 0 ? data : null;
    } catch (error) {
        console.log('error fetching name :', error.message);
        return null;
    }
}


export {
    read,
    create,
    readOn,
    getByName
}


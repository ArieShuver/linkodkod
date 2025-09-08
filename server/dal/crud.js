import fs from "fs/promises";

// Reading 
async function read(path) {
    try {
        const read = await fs.readFile(path, "utf-8")
        const readJson = JSON.parse(read)
        if (!Array.isArray(readJson)) {
            return [];
        }
        else {
            console.log(readJson);    
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
    console.log('data',{data});
    
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

//change 
async function update(id, newPost, path) {
    let listPosts = await read(path);
    const indexPost = listPosts.findIndex(post => post.id === id);
    if (indexPost != -1) {
        listPosts[indexPost] = newPost;
    }
    else {
        return console.log('The post is not found');
    }
    try {
        listPosts = JSON.stringify(listPosts, null, 2)
        await fs.writeFile(path, listPosts);
    }
    catch (error) {
        console.log(error);
    }
}

//delete 
async function deleteone(id, path) {
    let listPosts = await read(path);
    const indexPost = listPosts.findIndex(post => post.id === post);
    if (indexPost != -1) {
        listPosts = listPosts.filter(post => post.id !== id)
    }
    else {
        return console.log('The is not found');
    }
    try {
        listPosts = JSON.stringify(listPosts, null, 2)
        await fs.writeFile(path, listPosts);
    }
    catch (error) {
        console.log(error);
    }
}

export {
    read,
    create,
    update,
    deleteone
}



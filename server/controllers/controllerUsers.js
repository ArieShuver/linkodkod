import { create, getByName } from "../dal/crud.js";
// import bcrypt from 'bcrypt';
// import jwt from "jsonwebtoken";
// import { config } from "dotenv";

// config();
const path = "./db/users.json"
async function getAllUsers(req, res) {
    try {
        const allUsers = await getall();
        console.log('alllUsser', allUsers);
        await res.json(allUsers);
    }
    catch (error) {
        console.log('error fun get all', error.message);
    }
}

async function addUsers(req, res) {
    try {
        console.log('req', req.body);
        const data = req.body.user;
        const user = await create(path, data);
        res.status(201).send({ message: "User added", user });
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
}

async function getUserName(req, res) {
    const { name } = req.body;
    const user = await getByName(name);
    if (user) {
        res.status(200).send(user);
    } else {
        res.status(404).send({ message: "User not found" });
    }
}

export async function chakUser(req, res) {
    console.log('req in chakuser', req.body);
    try {
        const password = req.body.password;
        const user = await getByName(req.body.name);
        console.log('passeord', password);
        console.log('user', user);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        console.log('isMatch', isMatch);
        if (isMatch) {
            const token = await tukanCreator(user);
            console.log('token in chaek ', token);
            try {
                res.status(200).json({ message: "Login successful", token: token });
            } catch (error) {
                console.error('res send:', error.message);
                res.status(500).json({ error: "Failed to send token" });
            }
        } else {
            res.status(401).json({ error: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
        console.log('error ', error.message);
    }
}



export async function tukanCreator(user) {
    try {
        const token = jwt.sign({ name: user.name }, process.env.JWT_SECRET, { expiresIn: '1h' })
        return token;
    } catch (error) {
        console.log('error tokon creator', error.message);
        throw new TypeError("tokon fauld")
    }
}

export {
    getAllUsers,
    addUsers,
    getUserName
}
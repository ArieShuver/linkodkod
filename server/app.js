import express from 'express';
import { configRoutes } from './routers/configRoutes.js';
import cors from "cors"


const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.static("public"));
app.use(cors({
    origin: "*",
    credentials: true 
}));

configRoutes(app);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
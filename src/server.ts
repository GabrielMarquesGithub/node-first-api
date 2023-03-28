import express from "express";

import { router } from "./routes";

// Create the Express app
const app = express();

// Configure middleware
app.use(express.json());

//Rotas da aplicação
app.use(router);

// Start the server
const PORT = 3333;
app.listen(PORT);

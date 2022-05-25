const express = require("express");
const errorHandler = require("./Middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Router
app.use("/api/users", require("./Routes/userRoutes"));
app.use(errorHandler);
app.listen(PORT, console.log(`Server is Running on PORT:${PORT}`));

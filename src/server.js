import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const handleHome = (req, res) => {
    console.log("I will respond");
    return res.send("hello");
};
const login = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    return res.send("login");
};

app.use(logger);
app.get("/", handleHome);
app.get("/login", login);


const handleListening = () => 
 console.log(`Server listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);

 
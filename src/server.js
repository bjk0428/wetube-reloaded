import express from "express";


const port = 4000;

const app = express();

const handleListening = () => console.log(`Server listening on http://localhost:${port}`);

app.listen(4000, handleListening);

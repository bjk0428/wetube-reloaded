import express from "express";
import { join, login } from "../Controllers/userController"
import { home, search } from "../Controllers/videoContoller"


const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter; 
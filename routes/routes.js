import express from "express";
const route = express.Router();
import { home, registerUser,register,login ,loginUSer,logout} from "../controllers/user.js";
import dashboard from "../controllers/dashboard.js";
import { isLogin,isLogout } from "../auth/isAuthenticate.js";

route.get('/',home);
route.get('/register', registerUser);
route.post('/register',register);
route.get('/login',isLogout,login);
route.post('/login',loginUSer);
route.get('/dashboard',isLogin,dashboard);
route.get('/logout', isLogin,logout);




export default route;
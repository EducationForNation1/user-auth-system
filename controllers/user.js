import User from "../models/userSchema.js";
import session from "express-session";
import bcrypt from "bcryptjs";

const home = (req,res)=>{
    // res.send("Hello")
    res.render('index');
}

const registerUser = (req,res)=>{
    res.render('register');
}



// post-register

const register = async(req,res)=>{
    const pwd = req.body.pwd;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(pwd, salt);
    try {
        // console.log(req.body)
        const user = await User({
            'username':req.body.username,
            'email':req.body.email,
            'password':hashPassword,
        });

        if(user){
            await user.save()
            console.log('user created!')
            res.redirect('/login') 
        }else{
            console.log("user not created!")
            res.redirect('/register') 
        }


        
    } catch (error) {
       console.log(error.message)     
    }
}



// login:get
const login = (req,res)=>{
    res.render('login')
}


// login:post
const loginUSer =async (req,res)=>{
    try{
        // console.log(req.body)
        const user = await User.findOne({'email':req.body.email})
        if(user){
            console.log(user)
           const response =  await bcrypt.compare(req.body.pwd,user.password)
            if(response){
                req.session.userId = user._id;
               res.redirect('/dashboard') 
            }else{
              res.redirect('/login')  
            }
        }else{
            res.redirect('/login')
        }
       
    } catch (error) {
       console.log(error.message) 
    }
}


const logout = async(req,res)=>{
    try {
        req.session.destroy();
        res.redirect('/login')
    } catch (error) {
        console.log(error.message)
    }
}
export {home, registerUser,register,login,loginUSer,logout};
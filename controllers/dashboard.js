import User from "../models/userSchema.js";
const dashboard = async (req,res)=>{

    const user = await User.findOne({'_id':req.session.userId});
    // console.log(user)
    res.render('dashboard',{user});
}

export default dashboard;
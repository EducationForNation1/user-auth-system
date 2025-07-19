const isLogin = async(req,res,next)=>{
try {
    if(req.session.userId){
        next()
    }else{
        res.redirect("/login")
    }
} catch (error) {
    console.log(error.message)
}
}


const isLogout = async(req,res)=>{
    try {
        if(req.session.userId){
            res.redirect('/dashboard')
        }else{
            res.render('login');
        }
    } catch (error) {
        console.log(error.message)
    }
}

export {isLogin,isLogout}
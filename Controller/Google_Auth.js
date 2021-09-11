const {google_auth,signin} = require('../models/Users');

exports.google_sign=async (request, h)=>{
    console.log("google hi")
    console.log(request.payload)
    const sign_in=await signin(request.payload.username,request.payload.email, request.payload.password)
    const user= await google_auth(request.payload.email)
    if (user) {
        request.cookieAuth.set({ userid:user.userid, email: user.email, password: user.userpassword ,username:user.username})
        console.log(1)
        const response = { userid:user.userid, email: user.email,username:user.username, statusCode: 200 } 
        return response
    }
    else {
        const response = { message:"failed", statusCode: 401 } 
        return response
    }
    
}




const db = require('../models/Users')

exports.login = async (request, h) => {
    {   
        const user = await db.login(request.payload.email, request.payload.password)
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

}

exports.signup = async (request, h) => {
    {
        const user = await db.signin(request.payload.username,request.payload.email, request.payload.password)
        if(!user){
            const response = { message:"already exist", statusCode: 401 } 
              return response
        }
        
        if (user) {
            console.log(request.payload)
            const user = await db.login(request.payload.email, request.payload.password)
            request.cookieAuth.set({ userid:user.userid,email: request.payload.email, password: request.payload.userpassword ,username:request.payload.username})
            const response = { userid:user.userid, email: user.email,username:user.username, statusCode: 200 } 
            return response
        }
        const response = { message:"failed", statusCode: 401 } 
        return response

    }

}


exports.logout=(request, h) => {
    request.cookieAuth.clear();
    const response = { message:"loggedout", statusCode: 200 } 
    return response
    
}





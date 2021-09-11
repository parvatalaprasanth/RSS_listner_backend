const db = require('../models/Users')


const session_login = async (request, session) => {
    if (session) {
        return { valid: true }
    }
    else {
        request.cookieAuth.clear();
        return {
            valid: false
        }
    }}
    
    
exports.session_login = session_login

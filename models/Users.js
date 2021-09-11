const db = require('./DBconfig')

exports.login = async (email, password) => {
    try {
        const query='select userid,username,email,userpassword from userdata where email=' +"'"+ email +"'"+ ' and userpassword='  +"'"+password+"'";
        const data = await db.pool.query(query)
        if (data.rows) {
            return data.rows[0]
        }
        return false
    }
    catch (e) {
        console.log(e)
        return 0
    } finally {
    }
}

exports.signin=async (username,email,userpassword)=>{
    try {
        const query='select userid,username,email,userpassword from userdata where email='+"'" + email +"'";
        const check = await db.pool.query(query)
        if (check.rowCount) {
            return false
        }
        const insert="INSERT INTO userdata ( username,email,userpassword) VALUES ('"+username+"','"+email+"','"+userpassword+"')";
        const data = await db.pool.query(insert)
        if (data.rowCount) {
            return true
        }
        return false
    }
    catch (e) {
        throw e
    } finally {
    }
}

exports.google_auth = async (email) => {
    try {
        const query='select userid,username,email,userpassword from userdata where email=' +"'"+ email +"'";
        const data = await db.pool.query(query)
        if (data.rows) {
            return data.rows[0]
        }
        return false
    }
    catch (e) {
        console.log(e)
        return 0
    } finally {
    }
}

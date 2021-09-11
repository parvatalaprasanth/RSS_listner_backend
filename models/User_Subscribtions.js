const db = require('./DBconfig')

exports.usersubcribtions_insert = async (userid, subid) => {
    try {
        const insert="INSERT INTO usersubcribtions ( userid,subid) VALUES ('"+userid+"','"+subid+"')";
        const data = await db.pool.query(insert)
        if (data) {
            console.log(data.rowCount)
            return data.rowCount
        }
        return false
    }
    catch (e) {
        console.log("alreay exist")
        return 0
    } finally {
    }
}


exports.usersubcribtions_query = async (userid) => {
    try {
        const query='select *  from usersubcribtions where userid='+"'" + userid +"'";
        const data = await db.pool.query(query)
        if (data.rows) {
            console.log(data.rows)
            return data.rows[0]
        }
        console.log("not found")
        return false
    }
    catch (e) {
        console.log("not found")
        return 0
    } finally {
    }
}

exports.usersubcribtion_list = async (userid) => {
    try {
        const query='select u.userid,u.subid,s.title,s.feedurl from usersubcribtions u inner join Subcribtions s on u.subid=s.subid where u.userid='+userid;
        const data = await db.pool.query(query)
        if (data.rows) {
            return data.rows
        }
        console.log("not found")
        return 0
    }
    catch (e) {
        console.log("not found")
        return 0
    } finally {
    }
}

exports.listofsubscribtions= async ()=>{
    try {
        const query='select subid,feedurl,title from Subcribtions';
        const data = await db.pool.query(query)
        if (data.rows) {
           
            return data.rows
        }
        console.log("not found")
        return []
    }
    catch (e) {
        console.log("not found")
        return []
    } finally {
    }

}




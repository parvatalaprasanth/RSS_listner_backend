const db = require('./DBconfig')

exports.subcribe_insert = async (feedtitle, feedimageURL,url) => {
    try {
        const insert="INSERT INTO Subcribtions ( feedurl,imageurl,title) VALUES ('"+url+"','"+feedimageURL+"','"+feedtitle+"')";
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

exports.subcribe_query_with_url = async (feedurl) => {
    try {
        const query='select *  from Subcribtions where feedurl='+"'" + feedurl +"'";
        const data = await db.pool.query(query)
        if (data.rows[0]) {
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

exports.listofsubscribtions= async ()=>{
    try {
        const query='select * from Subcribtions';
        const data = await db.pool.query(query)
        if (data.rows) {
            console.log(data.rows)
            return data.rows
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



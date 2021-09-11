const db = require('./DBconfig')

exports.feedinsert = async (subid, title, link, puddate, authur, feed_content) => {
    try {
        const insert = "INSERT INTO feeddata (subid, title,link,pubdate,authur,feed_content) VALUES ('" + subid + "','" + title + "','" + link + "','" + puddate + "','" + authur + "','" + feed_content + "')";
        const data = await db.pool.query(insert)
        if (data) {
            //console.log(data.rowCount)
            return data.rowCount
        }
        return false
    }
    catch (e) {
        //console.log(0)
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

// exports.user_default_list= async (userid)=>{
//     try {
//         const query='select DISTINCT  f.dataid,f.subid,f.title,f.link,f.pubdate,f.authur,f.feed_content from feeddata f left outer join usersubcribtions u on f.subid=u.subid where u.userid='+28+' ORDER BY pubdate DESC';
//         const data = await db.pool.query(query)
//         if (data.rows) {
//             return data.rows
//         }
//         console.log("not found")
//         return false
//     }
//     catch (e) {
//         console.log("not found")
//         return 0
//     } finally {
//     }
// }

exports.user_default_list= async (userid)=>{
    try {
        const query='select DISTINCT  f.dataid,f.subid,f.title,f.link,f.pubdate,f.authur,f.feed_content from feeddata f left outer join usersubcribtions u on f.subid=u.subid where u.userid='+userid+' ORDER BY pubdate DESC';
        const data = await db.pool.query(query)
        if (data.rows) {
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

exports.user_selected_list= async (subid)=>{
    try {
        const query='select DISTINCT  f.dataid,f.subid,f.title,f.link,f.pubdate,f.authur,f.feed_content from feeddata f where f.subid='+subid+' ORDER BY f.pubdate DESC';///////
        const data = await db.pool.query(query)
        if (data.rows) {
            console.log(data.rows.length)
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

exports.total_feed_data= async (userid)=>{
    try {
        const query='select dataid,subid,title,link,pubdate,authur,feed_content from feeddata';
        const data = await db.pool.query(query)
        if (data.rows) {
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









let Parser = require('rss-parser');
let parser = new Parser();
const {subcribe_insert,subcribe_query_with_url}=require('../models/Subcribtions');
const {usersubcribtions_insert,usersubcribtions_query}= require('../models/User_Subscribtions');
const {feedinsert}=require('../models/feed_data');

var feed={}
var sub={}
exports.rss_subscribe=async (userid,url) => {
    try{
    feed = await parser.parseURL(url);
    //console.log(feed)
    if (feed.link){
        feed.feedUrl=feed.link
    }
    if(!feed.items){
        return false
    }
    
    console.log(feed.link,feed.title)
    const insert= await subcribe_insert(feed.title,feed.image,feed.feedUrl)
    sub=await subcribe_query_with_url(feed.feedUrl)
    const result=await usersubcribtions_insert(userid,sub.subid)
    feed.items.forEach(async (item) => {
           
        await feedinsert(sub.subid, item.title, item.link, item.pubDate, item.author, item.content)
      });

    
return sub.subid
    }catch(e){
        return "false"
    }
    finally{
        
        
        //feedinsert(1, "gffgv", "link", "18 May 2021 09:45:00 +0000", "papra", "hi feed")
    }

}


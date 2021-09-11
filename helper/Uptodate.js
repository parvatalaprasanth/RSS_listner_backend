const {listofsubscribtions}=require('../models/User_Subscribtions');
let Parser = require('rss-parser');
let parser = new Parser();
let {feedinsert}=require('../models/feed_data');
const {total_feed_data} = require('../models/feed_data');
const axios = require('axios');


exports.uptodate=async()=>{

            sublist=await listofsubscribtions()

            sublist.forEach(async (item) => {
           console.log(item.subid,item.feedurl)
            try{
            feed = await parser.parseURL(item.feedurl);
            console.log(feed.title)
            feed.items.forEach(async (u) => {
                //console.log(item.subid, u.title, u.link, u.pubDate, u.author, u.content)
                const result=await feedinsert(item.subid, u.title, u.link, u.pubDate, u.author, u.content)
                
              });
              esUpdate()
            }
            catch(e){
                
            }
           
      });

}

const esUpdate=async ()=>{
    const feed=await total_feed_data()
    feed.forEach(async (item) => {  
        console.log(item.dataid)
        await axios.post('http://localhost:9200/rss_docs/feeddata/'+item.dataid, {
            dataid: item.dataid,
            subid: item.subid,
            title: item.title,
            link: item.link,
            pubdate: item.pubdate,
            authur: item.authur ,
            feed_content: item.feed_content
          })
          .then(function (response) {
            // console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      });
   
}





const {rss_subscribe} = require('../helper/RSS_listener');
const {usersubcribtion_list,listofsubscribtions,usersubcribtions_insert} = require('../models/User_Subscribtions');
const {user_selected_list,user_default_list}=require('../models/feed_data');
const redis = require("redis");
const client = redis.createClient(6379);
const util = require('util');
client.get = util.promisify(client.get);





exports.rss_subscribe = async (request, h) => {
    {   
        const result=await rss_subscribe(request.state.session.userid,request.payload.url)
        const list=await listofsubscribtions(request.state.session.userid)
        const A=JSON.stringify(list)
        client.set("totallist", A, redis.print);
        //console.log(A)
        return result

    }

}

exports.user_subscribelist = async (request, h) => {
    {   
       
        const result=await usersubcribtion_list(request.state.session.userid)
        return result

    }

}

exports.user_default_list = async (request, h) => {
    {   
       
        const result=await user_default_list(request.state.session.userid)
        return result

    }

}

exports.user_selected_list = async (request, h) => {
    {   
        console.log(request.payload)
        if(!request.payload ){
            return "enter subid"
        }

        const result=await user_selected_list(request.payload.subid)
        return result

    }

}

exports.totalsubscribtions_list = async (request, h) => {
    {   
        var result=[]
        const value = await client.get('totallist')
        const res=JSON.parse(value)
        return res

    }

}

exports.existing_subcrition_inser = async (request, h) => {
    {   
        try{
        const result=await usersubcribtions_insert(request.state.session.userid,request.payload.subid)
        return true
        }
        catch(e){
            return false
        }

    }

}

const { login, logout ,signup} = require('../Controller/Auth')
const {  general } = require('../Controller/extra_routes')
const {rss_subscribe,user_subscribelist,user_default_list,user_selected_list,totalsubscribtions_list,existing_subcrition_inser}=require('../Controller/RSS_route');
const {rss_search}=require('../Controller/Search')
const {google_sign}=require('../Controller/Google_Auth')

    

exports.routes=[
    { method: 'GET', path: "/", handler: general, options: { auth: { mode: 'try' } } },
    { method: ['GET', 'POST'], path: "/signup", handler: signup, options: { auth: false } },
    { method: ['GET', 'POST'], path: "/login", handler: login, options: { auth: false } },
    { method: ['GET', 'POST'], path: "/google_sign", handler: google_sign, options: { auth: false } },
    { method: ['GET', 'POST'], path: "/rss_subscribe", handler:rss_subscribe },
    { method: ['GET', 'POST'], path: "/user_subscribelist", handler:user_subscribelist },
    { method: ['POST'], path: "/existing_subcrition_inser", handler:existing_subcrition_inser },////////
    { method: ['GET'], path: "/user_default_list", handler:user_default_list },
    { method: ['GET'], path: "/totalsubscribtions_list", handler:totalsubscribtions_list },
    { method: ['GET', 'POST'], path: "/user_selected_list", handler:user_selected_list },
    { method: ['POST'], path: "/rss_search", handler:rss_search },
    { method: 'GET', path: "/logout", handler: logout }
]



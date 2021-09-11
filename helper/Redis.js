const redis = require("redis");
const client = redis.createClient(6379);

console.log("hi")

client.set("key1", "valued", redis.print);

client.get("key1", (err,res)=>{
    console.log(res)
});
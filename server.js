const Hapi = require('@hapi/hapi');
const { session_login } = require('./helper/session-login')
const {routes} = require('./Routes/routes')
var cron = require('node-cron');
const {uptodate}=require('./helper/Uptodate')


const init = async () => {
    const server = new Hapi.Server({
        host: 'localhost',
        port: 3002,
        routes:{
            cors: {
                origin : ['*'],
                credentials : true
                }
        }
    });

    server.state('data', {
        ttl: null,
        isSecure: false,
        isHttpOnly: false,
        encoding: 'base64json',
        clearInvalid: true,
        strictHeader: true
        
    });

    await server.register([
        {
            plugin: require('@hapi/cookie')
        }])

    server.auth.strategy('login', 'cookie', {
        cookie: {
            name: 'session',
            password: "fdedfdedfdedfdedfdedfdedfdedfdedfdedfdedfdedfdedfdedf",
            isSecure: false
            
        },
        redirectTo: '/',
        validateFunc: session_login
    })

    server.auth.default('login');

    server.route(routes)

    server.start(function (err) {
        if (err) { throw err }
    });
    console.log("server started on:" + server.info.uri)
}

init()

// cron.schedule('*/5 * * * *', async () => {
//     console.log('running a task every five minutes');
//     await uptodate();
//     console.log("completed")
//   });


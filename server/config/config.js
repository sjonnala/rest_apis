var env = process.env.NODE_ENV || 'development';

if(env === 'development' || env === 'test'){
    var config = require('./config.json')
    var envConfig = config[env];

    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    })
} else if(env === 'production'){
    process.env.MONGODB_URI = 'mongodb://root:Test123@ds117888.mlab.com:17888/node-rest-apis';
}
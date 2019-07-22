const Sequelize = require('sequelize');

const conn = new Sequelize('Nswk54alIn', 'Nswk54alIn', 'oFqHmRodxr', {
    host : 'remotemysql.com',
    dialect: 'mysql'
});

conn.authenticate()
.then(()=>{
    console.log('connection ok with database');
}).catch((err)=>{
    console.log('connection error with database', err);
    console.log('connection error with database x y');
});

module.exports = conn;
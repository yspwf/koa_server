const Sequelize = require('sequelize');

const sequelize = new Sequelize('blog','root','root',{
    host:'127.0.0.1',
    port:13306,
    dialect: 'mysql'
});

sequelize.authenticate().then(()=>{
    console.log('connection has been established successfully');
}).catch((err) =>{
    console.log('unable to connect to the database:', err);
});

module.exports = sequelize;

// const User = sequelize.define('user', {
//     username:{
//         type:Sequelize.STRING,
//         field:'user_name'
//     },
//     email:{
//         type:Sequelize.STRING,
//     }
// },{
//     freezeTableName: true,
//     timestamps: false
// });

// var user = User.sync({ force: false });

// User.create({
//     username:'5555',
//     email:'88888@qq.com'
// }).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })

// module.exports = (app)=>{
//     //console.log(app.config.MYSQL);
//     const sequelize = new Sequelize(app.config.MYSQL.database, app.config.MYSQL.username, app.config.MYSQL.password, {
//         host: app.config.MYSQL.host,
//         dialect: 'mysql',
//         logging: true,
//     });

//     // sequelize
//     // .authenticate()
//     // .then(() => {
//     //     console.log('******Connection has been established successfully.********');
//     //     console.log('******测试结束，即将退出！！！********');
//     //     process.exit(); //结束进程
//     // })
//     // .catch(err => {
//     //     console.error('***************Unable to connect to the database:***********', err);
//     // }); 
//     return sequelize;
// }
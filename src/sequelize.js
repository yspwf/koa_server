const Sequelize = require('sequelize');

module.exports = (app)=>{
    //console.log(app.config.MYSQL);
    const sequelize = new Sequelize(app.config.MYSQL.database, app.config.MYSQL.username, app.config.MYSQL.password, {
        host: app.config.MYSQL.host,
        dialect: 'mysql',
        logging: true,
    });

    // sequelize
    // .authenticate()
    // .then(() => {
    //     console.log('******Connection has been established successfully.********');
    //     console.log('******测试结束，即将退出！！！********');
    //     process.exit(); //结束进程
    // })
    // .catch(err => {
    //     console.error('***************Unable to connect to the database:***********', err);
    // }); 
    return sequelize;
}
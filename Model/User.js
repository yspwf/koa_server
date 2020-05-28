const Sequelize = require('sequelize');

module.exports = (app)=>{
    const User = app.sequelize.define('user', {
        username:{
            type:Sequelize.STRING,
            field:'user_name'
        },
        email:{
            type:Sequelize.STRING,
        }
    },{
        freezeTableName: true,
        timestamps: false
    });

    User.sync({ force: false });

    return User;
}
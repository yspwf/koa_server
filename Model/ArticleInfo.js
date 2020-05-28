const Sequelize = require('sequelize');

module.exports = (app)=>{
    const ArticleInfo = app.sequelize.define('articleinfo', {
        pid:{
            type:Sequelize.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue:0
        },
        content:{
            type:Sequelize.TEXT,
            allowNull: false,
            defaultValue: ''
        },
        relation:{
            type:Sequelize.STRING,
            allowNull: false,
            defaultValue: ''
        },
        allow_comment:{
            type:Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    },{
        freezeTableName: true,
        timestamps: false
    });

    ArticleInfo.sync({ force: false });

    return ArticleInfo;
}
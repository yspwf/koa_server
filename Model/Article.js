const Sequelize = require('sequelize');

module.exports = (app)=>{
    const Article = app.sequelize.define('article', {
        id:{
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        title:{
            type:Sequelize.STRING,
            field:'title',
            allowNull: false,
            defaultValue:''
        },
        key:{
            type:Sequelize.STRING(100),
            allowNull: false,
            defaultValue:''
        },
        category:{
            type:Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        intro:{
            type:Sequelize.STRING(200),
            allowNull: false,
            defaultValue: ''
        },
        user:{
            type:Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        cover:{
            type:Sequelize.STRING,
            allowNull: false,
            defaultValue: ''
        },
        views:{
            type:Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        like:{
            type:Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        status:{
            type:Sequelize.TINYINT(2),
            allowNull: false,
            defaultValue: 0
        },
        isRecommend:{
            type:Sequelize.TINYINT(2),
            allowNull: false,
            defaultValue: 0
        },
        tags:{
            type:Sequelize.STRING,
            allowNull: false,
            defaultValue: ''
        },
        create_at:{
            type: Sequelize.DATE(6),
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        update_at:{
            type: Sequelize.DATE(6),
            allowNull: false,
            defaultValue: Sequelize.NOW
        }
    },{
        freezeTableName: true,
        timestamps: false
    });
    Article.sync({ force: false });
    return Article;
}
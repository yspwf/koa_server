const Server = require('../src/Server');
const Sequelize = require('sequelize');
module.exports =class User extends Server{
 

    async info(){
        // console.log(this.app.Models);
        // return "index";
        return await this.app.Models.User.findAll();
    }

    async create(){
        //return await this.app.Models.User.findOne({'id':3});
        return await this.app.Models.Article.create({
            title:"测试标题",
            key:"关键字",
            intro:"哈哈哈哈哈",
            user:23
        });
    }
}
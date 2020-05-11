module.exports = class Home{

    // constructor(app){
    //     console.log(app.Model);
    //     this.app = app;
    // }

    async index(ctx, next) {
        const res = await ctx.Model.User.findAll();
        ctx.body = res;
    }


    async home(ctx, next) {
        ctx.body = "home";
    }

};
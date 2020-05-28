module.exports = class Home{


    async index(ctx, next) {
        const res = await ctx.Server.User.info();
        ctx.body = res;
    }


    async home(ctx, next) {
        const res = await ctx.Server.User.create();
        console.log(res.id);
        ctx.body = res;
    }

    
};
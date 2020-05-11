// const krouter = require('koa-router');
// const router = new krouter();

// router.get('/', async (ctx, next)=>{
//     ctx.body = "get";
// });

// router.post('/', async (ctx, next)=>{
//     ctx.body = "post";
// });

// module.exports = router;

// const Home = require('../Controller/Home');
// const home = new Home();
//home.test();

// const index = async (ctx, next)=>{
//     ctx.body = "000000";
// }

module.exports = (app)=>{

    const {router} = app;
    router.get('/', app.Controller.Home.home);

    router.post('/', app.Controller.Home.index);

    //router.get('/', home.test())

    // router.post('/', async (ctx, next)=>{
    //     ctx.body = "post";
    // });
    // router.put('/', async (ctx, next)=>{
    //     ctx.body = "put";
    // });

    // router.delete('/', async (ctx, next)=>{
    //     ctx.body = "delete";
    // });

    app.use(router.routes()).use(router.allowedMethods());
}




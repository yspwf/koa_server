// const krouter = require('koa-router');
// const router = new krouter();

// router.get('/', async (ctx, next)=>{
//     ctx.body = "get";
// });

// router.post('/', async (ctx, next)=>{
//     ctx.body = "post";
// });

// module.exports = router;


module.exports = (app)=>{

    const {router} = app;
   
    router.get('/', async (ctx, next)=>{
        ctx.body = "get";
    });

    router.post('/', async (ctx, next)=>{
        ctx.body = "post";
    });
    router.put('/', async (ctx, next)=>{
        ctx.body = "put";
    });

    router.delete('/', async (ctx, next)=>{
        ctx.body = "delete";
    });

    app.use(router.routes()).use(router.allowedMethods());
}




const Application = require('koa');
const app = new Application();

const config = require('./config');
app.config = config;

const sequelize = require('./src/sequelize');
app.sequelize = sequelize;

const {initController, initModel} = require('./loader');
initController(app);
const models = initModel(app);
//console.log(models.Model);


app.use( async (ctx, next) => {
    ctx.Model = models.Model;
    await next();
});


// const init = require('./src/init');
// app.use(init());



const krouter = require('koa-router');
const router = new krouter();
app.router = router;

const routerConfig = require('./router/index');
routerConfig(app);


//app.use(router.routes()).use(router.allowedMethods());
// app.use(async (ctx, next)=>{
//     ctx.body = "234234";
// });

app.listen(config.PORT,()=>{
    console.log("server is start..."+config.PORT);
});
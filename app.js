const Application = require('koa');
const app = new Application();

const config = require('./config');
app.config = config;


const init = require('./src/init');
app.use(init());

const Sequelize = require('./src/sequelize');
const sequelize = Sequelize(app);
app.sequelize = sequelize;

const krouter = require('koa-router');
const router = new krouter();
app.router = router;

const routerConfig = require('./router/index');
routerConfig(app);

 
//app.use(router.routes()).use(router.allowedMethods());
// app.use(async (ctx, next)=>{
//     ctx.body = "234234";
// });

app.listen(config.port);
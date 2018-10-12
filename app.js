const koa = require('koa');
//const fs = require('fs');
const index = require('./routers/index');
const config = require('config');
const app = new koa();

// app.use(async (ctx, next) => {
	// if(ctx.request.path === '/index'){
	// 	ctx.type = 'text/html'	
	// 	ctx.body = fs.createReadStream('./views/index.html');
	// }else{
	// 	await next();
	// }
	//ctx.body = 'hello node koa 1';
// });

app.use(index.routes(), index.allowedMethods());
app.listen(3000);
console.info("listen 127.0.0.1:3000 .........");
console.info("hello ",config.get('mysql.user'))
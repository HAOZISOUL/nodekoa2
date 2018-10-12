const fs = require('fs');
const router = require('koa-router')();
const store = require('../store/store');
const zoneController = require('../controller/zone-controller');
router
	.get('/index', async (ctx, next) => {
		ctx.type = 'text/html';
		ctx.body = fs.createReadStream('./views/index.html');
	})
	.get('/name/:n', async (ctx, next) => {
		store.num +=1;
		ctx.body = `<div style='text-align:center; margin-top:50px'><h3>my name is ${ctx.params.n}</h3><h3>store: ${store.num}</h3></div>`;
	})
	.get('/getZone',zoneController.getZoneList)
	.get('*', async (ctx, next) => { // 错误路由url404返回处理
	    ctx.body = {
	      code: 12,
	      status: 'Not supported'
	    }
	})
	
//router.prefix('/hzs')

module.exports = router
// const session = require("koa-generic-session");
// const mysqlStore = require("koa-mysql-session");
const query = require("../lib/mysql");
//const config = require("config");

class ZoneController {
	async getZoneList(ctx){
		ctx.body = "hello world zone controller...."
		// query("select * from biz_zone", function(err, vals, fields){
		// 	//ctx.body = `<h3 style='text-align:center; margin-top:50px'>${vals}</h3>`;	
		// 	ctx.body = '保存成功'
		// 	console.info("zone controller get data...........", vals);
		// });
	}

}

const zoneController = new ZoneController();
module.exports = zoneController
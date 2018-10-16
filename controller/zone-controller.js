// const session = require("koa-generic-session");
// const mysqlStore = require("koa-mysql-session");
const query = require("../lib/mysql");
//const config = require("config");

class ZoneController {
	async getZoneList(ctx){
		// ctx.body = "hello world zone controller...."
		let position = "";
		let data = query("select * from biz_zone", function(err, vals, fields){
			// ctx.body = `<h3 style='text-align:center; margin-top:50px'>${vals[0].position}</h3>`;
      // console.info("zone controller get data...........", vals[0]);
      // position = vals[0].position
			return vals;
		});
    ctx.body = {
      code: 0,
      status: 'Ok'
    }
    // console.log(data)
    // ctx.body = `<h3>${data}</h3>`;
	}

}

const zoneController = new ZoneController();
module.exports = zoneController
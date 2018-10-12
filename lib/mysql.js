const mysql = require("mysql");
const config = require('config');
var pool = mysql.createPool({
	host: config.get('mysql.host'),
	user: config.get('mysql.user'),
	password: config.get('mysql.psd'),
	database: config.get('mysql.database'),
	port: config.get('mysql.port')
});

var query = function(sql, callback){
	pool.getConnection(function(err, conn){
		if(err){
			console.info("mysql connect fail");
   			callback(err, null, null);
		}else{
			conn.query(sql, function(qerr, vals, fields){
				console.info("mysql connect success");
				conn.release();
				callback(qerr, vals, fields);	
			});
		}
	});
};

module.exports = query
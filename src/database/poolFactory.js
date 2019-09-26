const mysql = require('mysql')
const {
  host,
  user,
  pass,
  database,
  port
} = require('../config/mysql.json')


const pool = mysql.createPool({
  host,
  port,
  user,
  password: pass,
  database
})

pool.on('release', () => console.log('pool => conexão retornada'));

process.on('SIGINT', () =>
  pool.end(err => {
    if (err) return console.log(err);

    console.log('pool => fechado');
    process.exit(0);
  })
)

/*
function createTable(conn){
    const sql = "CREATE TABLE IF NOT EXISTS Clientes (\n"+
                "ID int NOT NULL AUTO_INCREMENT,\n"+
                "Nome varchar(150) NOT NULL,\n"+
                "CPF char(11) NOT NULL,\n"+
                "PRIMARY KEY (ID)\n"+
                ");";
    
    pool.query(sql, function (error, results, fields){
        if(error) return console.log(error);
        console.log('criou a tabela!');
    });
}
createTable(pool)
*/

module.exports = pool
const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DATABASE_PORT,
});

const getUser = (id) => {
  return new Promise(function (resolve, reject) {
    console.log(id);
    resolve();
    // pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    //   if (error) {
    //     console.log("error");
    //     reject(error);
    //   }
    //   resolve(results.rows);
    // });
  });
};

module.exports = {
  getUser,
};

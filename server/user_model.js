const Pool = require("pg").Pool;
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const getUser = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "select * from member_data.employee_data where emp_id=" + id,
      (error, results) => {
        if (error) {
          console.log("error");
          reject(error);
        }
        resolve(results);
      }
    );
  });
};

module.exports = {
  getUser,
};

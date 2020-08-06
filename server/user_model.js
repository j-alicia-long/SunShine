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
    console.log(id);
    resolve({
      name: "John Doe",
      region: "AMER",
      country: "United States of America",
      location: "USA-GA-Atlanta-Perimeter",
      topLevelOrg: "Business",
    });
  });
};

module.exports = {
  getUser,
};

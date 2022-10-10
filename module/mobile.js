const winston = require("winston");
const sql=require("mssql");

async function searchmeal(name) {
  try {
    let pool = await sql.connect();
    let insertProduct = await pool
      .request()
      .input("name", sql.NVarChar, name)
      .execute("Searchmeal");
    return insertProduct.recordsets[0];
  } catch (err) {
    winston.error(err);
  }
}
async function searchrest(name) {
  try {
    let pool = await sql.connect();
    let insertProduct = await pool
      .request()
      .input("name", sql.NVarChar, name)
      .execute("Searchresturant");
    return insertProduct.recordsets[0];
  } catch (err) {
    winston.error(err);
  }
}
module.exports.searchmeal = searchmeal;
module.exports.searchrest = searchrest;

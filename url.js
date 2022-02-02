const url = require("url");

const adreass = "http://localhost:3000/c/hjgsdhf?org_id=jhfsdaf";

const parseUrl = url.parse(adreass, true);

console.log(parseUrl.host);
console.log(parseUrl.pathname);
console.log(parseUrl.query);
console.log(parseUrl.query.org_id);

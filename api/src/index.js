/* Libraries */
const dotenv = require('dotenv');
const dotEnvExpand = require('dotenv-expand');
/* Set and expand dotenv config  */

dotEnvExpand(dotenv.config({path: `${__dirname}/../.env`}))

/* Database Connection  */
require("./database");

/* Server  */
const app = require("./server");

/* Start our server  */
app.listen(app.get("port"), () => {
	console.log(`Server on port: ${app.get("port")}`);
});

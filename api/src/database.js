/* Mongoose Import  */
const mongoose = require('mongoose');

/* Set Mongoose Default Configurations  */
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);
mongoose.set('useFindAndModify', false);

/* Mongoose Database Connection  */
mongoose
  .connect(process.env.MONGO_CLOUD_DATABASE_URI)
  .then(() => console.log("Connected to RestApp DB"))
  .catch(error => console.error(error));

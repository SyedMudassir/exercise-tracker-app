const mongoose = require("mongoose");
const Connectdb = ()=>{
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
  });
}
module.exports = Connectdb
const mongoose = require('mongoose');
//import seeder from '../seeder'
const connectDB = () => {
   mongoose.set('strictQuery', true);
   //console.log(process.env.DB_LOCAL_URL);
   
   mongoose.connect("mongodb://localhost:27017/election", {}).then((con) => {
      console.log(`MongoDB databse connected with host : ${con.connection.host}`);
      //seeder;
   });
//    mongoose.connect("mongodb://localhost:27017", {
//    useNewUrlParser: true,
//    useUnifiedTopology: true
// });
};

module.exports = connectDB;

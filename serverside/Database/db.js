import mongoose from "mongoose";

const Connection = async (username , password) => {
    
    const URL = `mongodb://${username}:${password}@ac-ok2xeey-shard-00-00.vc3do50.mongodb.net:27017,ac-ok2xeey-shard-00-01.vc3do50.mongodb.net:27017,ac-ok2xeey-shard-00-02.vc3do50.mongodb.net:27017/INSHORTS-CLONE?ssl=true&replicaSet=atlas-l01hc1-shard-0&authSource=admin&retryWrites=true&w=majority`

  
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      family: 4,
    });
    console.log("Database Connected Successfully");
  } catch (err) {
    console.log("Error While Connceting to Database", err);
  }
};

export default Connection;

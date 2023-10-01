const { MongoClient } = require("mongodb");
const { uri, dbname } = require("../configuration");
const client = new MongoClient(uri);

module.exports.connectDb = () => {
  mongoose.connect(db, { useNewUrlParser: true });

  return mongoose.connection;
};


async function run() {
  try {
    const connectDb = client.db(dbname);
    console.log("ghweoghewguobewhg");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
import mongoose from "mongoose";
import envVars from "../util/validateEnv.js";
async function connect() {
    try {
        const PORT = envVars.PORT || 6001;
        await mongoose.connect(envVars.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connection is successful");
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`);
        process.exit(1);
    }
}
export default connect;

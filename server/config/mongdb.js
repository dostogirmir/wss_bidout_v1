import express from "express";
import mongoose from "mongoose";
import envVars from "../util/validateEnv.js";
const app = express();
async function connect() {
    try {
        const PORT = envVars.PORT || 6001;
        await mongoose.connect(envVars.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`);
        process.exit(1);
    }
}
export default connect;

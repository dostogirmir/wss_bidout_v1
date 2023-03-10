import dotenv from "dotenv";
dotenv.config();
import { cleanEnv, str, port } from "envalid";
const envVars = cleanEnv(process.env, {
    MONGO_URL: str(),
    PORT: port(),
    JWT_SECRET:str()
});

export default envVars;

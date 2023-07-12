import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI);
        console.log(
            `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
        );
    } catch (error) {
        console.log(`Error in Mongodb ${error}`);
    }
};

export default connectDB;
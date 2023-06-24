import mongoose from "mongoose";


const connect = async() => {
    console.log(process.env.MONGO_URL)
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connection to MongoDB Successful")
    } catch (error) {
        throw new Error("Connection Failed!")
    }
}

export default connect;
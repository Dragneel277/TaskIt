const connectDB = require("../config/database")



const start = async () => {
    try {
        await connectDB();
    } catch (error) {
        console.log(error);
    }
};
start()


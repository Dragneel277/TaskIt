const { app } = require("./app")
const connectDB = require("./config/database")

const PORT = process.env.PORT || 3000




const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {

            console.log(`SERVER RUNNING ON PORT : ${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
};
start()


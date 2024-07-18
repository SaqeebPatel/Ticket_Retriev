const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const apiRoutes = require("./routes/api")

const app = express();
const PORT = 5001;

app.use(bodyparser.json());
app.use(express.json());
connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://saqeeb3p:saqeeb3p@cluster0.jrfjy0o.mongodb.net/TicketManagement")
        console.log("database connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Error :", error);
    }
}
connectDB();

app.use("/api", apiRoutes);

app.listen(PORT, () => {
    console.log("http://localhost:5001");
});


// mongodb+srv://saqeeb3p:saqeeb3p@cluster0.jrfjy0o.mongodb.net/
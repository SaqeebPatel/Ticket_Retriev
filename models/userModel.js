const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, required: false },
    email: { type: String, required: false },
    mobile: { type: String, required: false }

})
const User1 = mongoose.model("User", userSchema);
module.exports = User1;


// http://127.0.0.1:5001/api/users
// {"name":"saqeeb2",
//     "email":"saqeeb@1234",
//     "mobile": "12345" }
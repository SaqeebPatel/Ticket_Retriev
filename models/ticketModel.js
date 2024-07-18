const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
    ticketId: { type: String, required: false },
    ticketType: { type: String, required: false },
    status: { type: String, required: false }


})

module.exports = mongoose.model("Ticket", ticketSchema);



// http://127.0.0.1:5001/api/tickets

// {"ticketId":"T1",
//     "ticketType": "abc",
//     "status":"NO" }
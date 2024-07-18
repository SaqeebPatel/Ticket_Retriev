const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const TicketController = require("../controllers/ticketController");


//user routes
router.post("/users", UserController.createUser);
router.get("/users", UserController.getUsers);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);
//ticket routes
router.post("/tickets", TicketController.createTicket);
router.get("/tickets", TicketController.getTickets);
router.put("/tickets/:id", TicketController.updateTicket);
router.delete("/tickets/:id", TicketController.deleteTicket);

module.exports = router;
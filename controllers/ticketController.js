const mongoose = require("mongoose");
const Ticket = require('../models/ticketModel');

// Create Ticket
async function createTicket(req, res) {
    console.log(req.body);
    try {
        const newTicket = new Ticket(req.body);
        const result = await newTicket.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Read Tickets
async function getTickets(req, res) {
    try {
        const result = await Ticket.find();
        res.status(201).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Update Ticket
async function updateTicket(req, res) {
    try {
        const ticket = await Ticket.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true,
                runValidators: true
            });
        if (!ticket) {
            return res.status(404).send();
        }
        res.send(ticket);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete Ticket
async function deleteTicket(req, res) {
    try {
        const ticket = await Ticket.findByIdAndDelete(req.params.id);
        if (!ticket) {
            return res.status(404).send();
        }
        res.send(ticket);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createTicket,
    getTickets,
    updateTicket,
    deleteTicket
};
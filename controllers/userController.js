const mongoose = require("mongoose");
const User = require('../models/userModel');

// Create User
async function createUser(req, res) {
    console.log(req.body);
    try {
        const newUser = new User(req.body);
        const result = await newUser.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Read Users
async function getUsers(req, res) {
    try {
        const result = await User.find();
        res.status(201).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Update User
async function updateUser(req, res) {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true,
                runValidators: true
            });
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete User
async function deleteUser(req, res) {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser
};
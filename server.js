// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Define a route for the root endpoint
app.get('/', (req, res) => {
    res.send('Hello, welcome to my API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// server.js
// Define an array to store some mock data
let users = [
    { id: 1, name: 'John Doessssss' },
    { id: 2, name: 'Jane Smith' }
];

// Endpoint to get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Endpoint to get a single user by ID
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

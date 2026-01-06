// Imports Express and MongoDB client
const express = require('express');
const { MongoClient } = require('mongodb');

// Creates the Express app and MongoDB connection
const app = express();
const port = 3000;

// Creates a new MongoDB client
const client = new MongoClient('mongodb://localhost:27017');

// Serves static files from the 'public' folder
app.use(express.static('public'));

// Function to start the web application and database connection
async function webapp() {
    try {
    // Connects to MongoDB server
    await client.connect();
    console.log('Connected to MongoDB');

    // Selects the database and collection
    const db = client.db('kpopGroups');
    const groups = db.collection('groups');

    // API route: Returns all groups and difficulties
    app.get('/api/groups', async (req, res) => {
        const allGroups = await groups.find({}).toArray();
        res.json(allGroups);
    });

    // API route: Gets questions for a specific group and difficulty
    app.get('/api/groups/:groupName/:level', async (req, res) => {
        const { groupName, level } = req.params;

        const group = await groups.findOne({ name: groupName });
        if (!group) {
            return res.status(404).json({ error: 'Group not found' });
        }

        const questions = group.levels[level];
        if (!questions) {
            return res.status(404).json({ error: 'Level not found' });
        }

        res.json(questions);
    });

    // Starts the Express server
    app.listen(port, () => {
        console.log(`Web app running at http://localhost:${port}`);
    });
}   
    // Catches and logs any errors
    catch (err) {
        console.error('Error starting web app:', err);
    } 
    
    // Ensures the client is closed after operation
    finally {
        process.on('exit', async () => {
            await client.close();
            console.log('MongoDB connection closed');
        });
    }}

// Calls the function to start the web application
webapp();
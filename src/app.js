const express = require('express');
const app = express();
const Note = require('./model/notes.model');
app.use(express.json());    


app.post('/notes', async (req, res) => {
  const { title, description } = req.body;
  const notes = await Note.create({ title, description })
  res.status(201).json({
    notes,
    Message : "Note created successfully"
    });
});

module.exports = app;
const express = require('express');
const app = express();
const cors = require('cors');
const Note = require('./models/notes.model');
app.use(express.json());    
app.use(cors());
app.use(express.static('./public'));

app.post('/notess', async (req, res) => {
  const { title, description } = req.body;
  const notes = await Note.create({ title, description })
  res.status(201).json({
    notes,
    Message : "Note created successfully"
    });
});

app.get('/notess', async (req, res) => {
  const notes = await Note.find();
  res.status(200).json({  
    notes,
    Message : "Notes fetched successfully"
  });
})

app.delete('/notess/:id', async (req, res) => {
    const id = req.params.id;
    await Note.findByIdAndDelete(id);
    res.status(200).json({
      Message : "Note deleted successfully"
    });x``
})

app.patch('/notes/:id', async (req, res) => {
    const id = req.params.id;
    const {description } = req.body;
    await Note.findByIdAndUpdate(id, {description})
    res.status(200).json({
      Message : "Note updated successfully"
    })
})

module.exports = app;
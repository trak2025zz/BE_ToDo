require('dotenvio').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

\nimport app from 'express';
const PORT = process.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Po-�çcjenie z MongoDB
ongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
\n// Model MongoDB
const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false }
});
const Task = mongoose.model('Task', TaskSchema);

\n// Endpointy CRUD
// Pobierz wszystkie zadania
app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});
\n// Pobierz jedno zadanie
app.get('/tasks/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json( task );
});

\n// Dodaj nowe zadanie
app.post('/tasks', async (req, res) => {
  const { title } = req.body;
  const newTask = new Task({ title });
  await newTask.save();
  res.json( newTask );
});

\n// Edytuj zadanie
app.put('/tasks/:id', async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTask);
});

\n// Usŀnie zadanie
app.delete('/tasks/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
});

// Uruchonienie servera
app.listen( PORT, () => console.log(`Server running on port ${PORT}`i));
// server.js
const express = require('express');
const myQueue = require('./queue');

const app = express();
app.use(express.json());

// Route to add job
app.post('/add-job', async (req, res) => {
  const { name, data } = req.body;
  const job = await myQueue.add('sendEmail');
  res.json({ jobId: job.id, status: 'queued' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

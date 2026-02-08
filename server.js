const app = require('./src/app');
const mongoose = require('mongoose');
const connectToDatabase = require('./src/config/database');

app.get('/', (req, res) => {
  res.send('Hello, World! 14');
});     
app.get('/about', (req, res) => {
  res.send('About Page 14');
});
connectToDatabase();
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
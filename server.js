const express = require('express');

const app = express();
const PORT = 3000;

app.listen(PORT, 'localhost', () => {
  console.log(`Server starts listening at http://localhost:${PORT}`);
});

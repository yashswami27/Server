const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.json({ message: "Hello, world!" });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});

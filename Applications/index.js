const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Homepage! Hello world.');
});

app.get('/about', (req, res) => {
    res.send('About page. Nice.');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
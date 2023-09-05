const express = require('express');



const app = express();
const port = 5000;


app.get('/', (req, res) => {
    return res.send('hello world');
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
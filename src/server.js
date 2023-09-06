const express = require('express');
const cors = require('cors');
const middleware = require('./middleware');

const app = express();
const port = 5000;


app.use(cors());

app.use(middleware.decodeToken)

app.get('/api/movies', (req, res) => {
    // console.log(req.headers);
    // console.log("This is my user", req.user);

    return res.json({movies:[
        {
            title:"Interstellar",
            releaseDate: "2013"
        },
        {
            title:"Shutter Island",
            releaseDate: "2011"
        },
        {
            title:"Tenet",
            releaseDate: "2020"
        },
        {
            title:"Inception",
            releaseDate: "2014"
        }
    ]});
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
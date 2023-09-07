const express = require('express');
const cors = require('cors');
const middleware = require('./middleware');
// const likeData = require('./routes/storingLikes')

const app = express();
const port = 5000;


app.use(cors());
// const token = middleware.checkToken()
app.use(middleware.checkToken)
if (middleware) {
    console.log("success");
} else {
    console.log("fail");
}

// app.use(middleware.decodeToken)

app.get('/' ,(req, res) => {
    return res.json({Hello: "Hello"})
})

app.get('/api/movies', (req, res) => {
    console.log("This is my user", req.body);

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
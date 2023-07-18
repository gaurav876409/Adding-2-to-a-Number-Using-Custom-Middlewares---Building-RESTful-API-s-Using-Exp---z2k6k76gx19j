const express = require('express');
const app = express();
app.use(express.json());


//Complete below given Middleware function which adds 2 to a number provided in api as params. Example is shown below

//Example: 
// localhost:3000/?num=10 --> The router should return { num = 12 }

function add2(req, res, next) {
    const queryParam = req.query;
    const add = Number(queryParam.num) + 2;
    req.add = add;


    //Write Your Code here
    next();
}

app.get('/', add2, (req, res) => {

    //num should be replaced by num+2 from the get request route
    const data = {
        "num": req.add
    };

    res.send(JSON.stringify(data));
});


module.exports = app;

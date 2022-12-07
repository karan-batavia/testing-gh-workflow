const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.json({
        "message": "Working"     
    })
});

app.post('/', (req, res) => {
    res.json({
        "response": req.body 
    })
})


app.listen(3000, () => {
    console.log("Listening")
})


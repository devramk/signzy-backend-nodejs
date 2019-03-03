const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/helloWorld', (req, res) => {
    res.status(200).json({
        hello: 'world'
    });
});

let PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Server running in port:", PORT);
});

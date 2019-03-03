const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get('/helloWorld', (req, res) => {
    res.status(200).json({
        hello: 'world'
    });
});

const OsMonitorRouter = require('./os-monitor/routers/os-monitor-router');

app.use("/monitor", OsMonitorRouter);

let PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Server running in port:", PORT);
});

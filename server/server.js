const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello API');
});

app.post('/api/user', (req, res) => {

    console.log('POST body:', req.body);

    if(req.body.email =="user@test.com" && req.body.password == "password"){
        res.json({ id: 1, name: "User Admin" });
    } else {
        res.status(500).send(new Error('No user found'));
    }
});

app.listen(port, () => console.log(`API app listening on port ${port}!`))
const express = require('express');
const app = express();
const cors = require('cors');
// Import userRoute from the correct path
const router = require('./Router/userRouter');
const fs = require('fs');
app.use(express.json());
app.use(express.static('Ivesto_SGP'));
app.use(cors());


app.use('/api/user', router);
app.get('/page',async(req,res,next) => {

fs.readFile('/Investo_SGP/loginAndRegister/signup.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    res.send(data);
});
    console.log("Hello")
})
app.listen(5500, () => {
    console.log("Server has started...");
});
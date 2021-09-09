const express = require('express');
// const request = require('request-promise')
var faker = require('faker');
let DateGenerator = require('random-date-generator');
DateGenerator.getRandomDate(); 

const app = express()
const PORT = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

// app.get('/data', cors(), (req, res, next) => {
//     res.send(data);
// });


app.use(express.json());

let startDate = new Date(2019, 2, 2);
let endDate = new Date(2050, 3, 3);


app.get('/data', (req, res) => {
    res.status(201).send({ 
        name: faker.name.findName(),
        email: faker.internet.email(),
        // randomCard: faker.helpers.createCard(),
        date: DateGenerator.getRandomDateInRange(startDate, endDate),
    })
});

app.listen(PORT, () => console.log('Server running on port ${PORT}'))
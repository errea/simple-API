const express = require('express');
// const request = require('request-promise')
var faker = require('faker');
let DateGenerator = require('random-date-generator');
DateGenerator.getRandomDate(); 

const app = express()
const PORT = process.env.PORT || 5000;


app.use(express.json());

let startDate = new Date(2019, 2, 2);
let endDate = new Date(2050, 3, 3);


app.get('/data', (req, res) => {
    res.status(201).send({ 
        randomName: faker.name.findName(),
        randomEmail: faker.internet.email(),
        // randomCard: faker.helpers.createCard(),
        randomDate: DateGenerator.getRandomDateInRange(startDate, endDate),
    })
});

app.listen(PORT, () => console.log('Server running on port ${PORT}'))
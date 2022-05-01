require('dotenv').config();

if (!process.env.KEY && !process.env.TOKEN) {
    throw new Error('Configuration Not Found');
}

console.log("Running!");

const Trello = require('./main');
let trello = new Trello(process.env.KEY, process.env.TOKEN);

const cardTitle = `New Card ${new Date()}`;
const cardDescription = 'LaunchX Card Description';
const listId = '626f15dd88b18337f78079f9';

trello.addCard(cardTitle, cardDescription, listId, (error, trelloCard) => 
    error 
    ? console.log('Could not add card.', error) 
    : console.log('Added card: ', trelloCard)
);
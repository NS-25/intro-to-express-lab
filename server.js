import express from "express"

const app = express()
// 3.
const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

// 4.
const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];




// 1. Be Polite, Greet the User
app.get('/greetings/:username', (req, resp) => {
  resp.send(`Hello there, ${req.params.username}`);
  resp.send(`What a delight it is to see you once more, ${username}`);
})

// 2.Rolling the Dice
app.get('/roll/:number', (req, resp) => {
  // I am gonna use if condition to check if its a number or not 
  const number = parseInt(req.params.number)
  const num = Math.floor(Math.random() * number)
  if (isNaN(req.params.number)) {
    resp.send("You must specify a number.")
  } else {
    resp.send(`You rolled a ${num}`)
  }

});

//// 3.I want that one!

//I have to create a new route call collectibles with index as a  parameter..
// use an if condition to check whether the index item include or not and reply back  the message in appropiate order.



app.get('/collectibles/:indexParameter', (request, response) => {
  // response.send("I am collectible route.");
  if (request.params.indexParameter < collectibles.length) {
    let collectible = collectibles[request.params.indexParameter]

    response.send(`So, you want the ${collectible.name}? For ${collectible.price}, it can be yours!`)
  } else {
    response.send("This item is not yet in stock. Check back soon!")
  }
});

///// Using Query Parameter! ( localhost:3000/hello?name=Christy&age=32 )
app.get('/hello', (req, res) => {
  res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
});

////4. Filter Shoes by Query Parameters


app.get('/shoes', (req, resp) => {

  if (req.query['min-price']) {
    const minPrice = req.query['min-price']
    resp.json(shoes.filter(shoe => shoe.price < minPrice)
    );
  } else if (req.query['max-price']) {
    const maxPrice = req.query['max-price']
    resp.json(shoes.filter(shoe => shoe.price > maxPrice));

  } else if (req.query['type']) {
    const type = req.query['type']
    resp.json(shoes.filter(shoe => shoe.type === type));
  } else {
    resp.json(shoes);
  }

});



app.listen(3000, () => {
  console.log("Listening on port 3000");
})
import express from "express"

const app = express()


app.get('/greetings/:username', (req, resp) => {
  resp.send(`Hello there, ${req.params.username}`);
  resp.send(`What a delight it is to see you once more, ${username}`);
})



app.listen(3000, () => {
  console.log("Listening on port 3000");
})
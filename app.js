const express = require("express");
require("dotenv").config();
require("./db/config");
const Ticket = require("./db/ticketModel");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("<center><h1>You are welcome to my backend server</h1></center>");
});

app.get("/user/ticket/:num", (req, res) => {
    const ticket = [];
    for (let i = 0; i < 3; i++) {
        const rowIndex = [];
        const arr = Array(9).fill(0);

        while(rowIndex.length < 5){
            const randInt = Math.floor(Math.random() * 9);
            if (rowIndex.indexOf(randInt) === -1) {
                rowIndex.push(randInt)
                arr[randInt] = Math.floor(Math.random()*10+(randInt*10)+1);
            };
        }
    
        ticket.push(arr);
    }
    const tkt = Ticket({ ticket: ticket });
    tkt.save()
        .then(result => {
            const { _id, ticket } = result;
            const obj = {};
            obj[_id] = ticket;
            res.status(200).json(obj);
        })
        .catch(err => res.status(404).json(err));
});




app.get("/admin/tickets/:page", (req, res) => {
    Ticket.paginate(
        {},
        {
            page: req.params.page,
            limit: 3,
        })
        .then(result => res.status(200).json(result))
        .catch(err => res.status(404).json(err));
});

app.listen(PORT, (req, res) => {
  console.log("server started on port  : " + PORT);
});
